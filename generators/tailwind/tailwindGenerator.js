import fs from "fs";
import path from "path";
import { logger } from "../../utils/logger.js";

import StyleDictionary from "style-dictionary";
import { fileHeader } from "style-dictionary/utils";

// 0) CLEAN OUTPUT DIRECTORY
// ----------------------------------------------------------------------------
function cleanDist() {
  const distDir = path.resolve("build/tailwind");
  try {
    fs.rmSync(distDir, { recursive: true, force: true });
    console.info(`Removed ${distDir}`);
  } catch (err) {
    console.error(`No existing ${distDir} to remove`, err);
  }

  fs.mkdirSync(distDir, { recursive: true });
  logger.success(`Created fresh ${distDir}`);
}

// 1) TRANSFORMERS
// ----------------------------------------------------------------------------
// Some built-in transforms
const defaultTransforms = [
  "attribute/cti",
  "color/css",
  "size/px",
  "name/kebab",
];

// 2) FILE HEADERS
// ----------------------------------------------------------------------------
StyleDictionary.registerFileHeader({
  name: "doNotEditWarningHeader",
  fileHeader: async () => {
    const dateTime = new Date().toLocaleString();
    return [`Autogenerated file. Generated at ${dateTime}.`, "Do not edit!"];
  },
});

StyleDictionary.registerFileHeader({
  name: "canEditHeader",
  fileHeader: async () => {
    const dateTime = new Date().toLocaleString();
    return [
      `Autogenerated file. Generated at ${dateTime}.`,
      "This file can be edited to extend base.config.js e.g custom plugins or themes.",
    ];
  },
});

// 3) A HELPER TO PRODUCE JS CODE WITH UNQUOTED KEYS
// ----------------------------------------------------------------------------
function isValidJSKey(key) {
  // Basic check for a valid JS identifier: a-z, A-Z, 0-9, _, $
  // cannot start with digit
  return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(key);
}

function jsify(value, indent = 2) {
  if (typeof value === "string") {
    return `"${value}"`;
  }
  if (Array.isArray(value)) {
    const arrContent = value.map((v) => jsify(v, indent + 2)).join(", ");
    return `[${arrContent}]`;
  }
  if (typeof value === "object" && value !== null) {
    let spaces = " ".repeat(indent);
    let result = "{\n";
    const entries = Object.entries(value);
    entries.forEach(([k, v], index) => {
      let keyName = isValidJSKey(k) ? k : `"${k}"`;
      result += `${spaces}${keyName}: ${jsify(v, indent + 2)}`;
      if (index < entries.length - 1) {
        result += ",";
      }
      result += "\n";
    });
    result += " ".repeat(indent - 2) + "}";
    return result;
  }
  return String(value); // booleans, numbers, etc.
}

function setNestedProperty(obj, pathArray, value) {
  let current = obj;
  for (let i = 0; i < pathArray.length; i++) {
    const key = pathArray[i];
    if (i === pathArray.length - 1) {
      current[key] = value;
    } else {
      if (!current[key]) {
        current[key] = {};
      }
      current = current[key];
    }
  }
}

// 4) FORMATTERS
// ----------------------------------------------------------------------------

/**
 * css/index-file
 * Existing index file for:
 * @import "./base.css";
 * @import "./dark.css";
 * plus @tailwind directives
 */
StyleDictionary.registerFormat({
  name: "css/index-file",
  // property is "format" not "formatter", but we can do async to use await
  format: async function ({ file, options, dictionary }) {
    const header = await fileHeader({ file, options });

    const content = `
/* Import Generated Design Token Files */
@import "./base.css";
@import "./dark.css";

/* Tailwind Base, Components, and Utilities */
@tailwind base;
@tailwind components;
@tailwind utilities;
`.trimStart();

    return header + content;
  },
});

/**
 * tailwind/base
 * -> Outputs a partial config in "tailwind.base.js" that references tokens.
 *    No 'content' array or 'plugins' here. We define darkMode + theme.extend.
 */
StyleDictionary.registerFormat({
  name: "tailwind/base",
  format: async function ({ file, options, dictionary }) {
    const header = await fileHeader({ file, options });
    const dateTime = new Date().toLocaleString();

    const partialConfig = {
      darkMode: "class",
      theme: {
        extend: {},
      },
    };

    // Insert tokens into partialConfig.theme.extend
    dictionary.allTokens.forEach((token) => {
      const varRef = `var(--${token.name})`;
      const segments = token.name.split("-");
      setNestedProperty(partialConfig.theme.extend, segments, varRef);
    });

    const partialStr = jsify(partialConfig, 2);
    const snippet = `/** @type {import('tailwindcss').Config} */
export default ${partialStr};
`;

    return header + snippet;
  },
});

/**
 * tailwind/config
 * -> Outputs "tailwind.config.js" that imports 'tailwind.base.js'
 *    and merges or overrides content, plugins, etc.
 */
StyleDictionary.registerFormat({
  name: "tailwind/config",
  format: async function ({ file, options, dictionary }) {
    const header = await fileHeader({ file, options });
    const dateTime = new Date().toLocaleString();

    // We'll build a snippet that merges the base partial config
    const snippet = `/** @type {import('tailwindcss').Config} */

import base from "./tailwind.base.js";

export default {
  darkMode: base.darkMode,

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],

  plugins: [
  ],

  theme: {
    ...base.theme,

    extend: {
      ...(base.theme?.extend || {}),
    }
  }
};
`;
    return header + snippet;
  },
});

// 5) BUILD SCRIPTS
// ----------------------------------------------------------------------------
async function main() {
  cleanDist();

  // Base styles
  {
    console.log("Building base theme...");
    const SD = new StyleDictionary({
      source: [
        "tokens/**/!(*.dark).json", // all .json files that do NOT end with .dark.json
      ],
      log: { verbosity: "verbose" },
      platforms: {
        // 1) CSS output
        base: {
          transformGroup: "css",
          transforms: defaultTransforms,
          buildPath: "build/tailwind/",
          files: [
            {
              destination: "base.css",
              format: "css/variables",
              options: {
                fileHeader: "doNotEditWarningHeader",
                outputReferences: true,
              },
            },
            {
              destination: "index.css",
              format: "css/index-file",
              options: {
                fileHeader: "doNotEditWarningHeader",
              },
            },
          ],
        },
        // 2) Tailwind partial + merged configs in the repo root
        tailwind: {
          transformGroup: "js",
          transforms: defaultTransforms,
          buildPath: "build/tailwind/",
          files: [
            {
              destination: "tailwind.base.js",
              format: "tailwind/base",
              options: {
                fileHeader: "doNotEditWarningHeader",
              },
            },
            {
              destination: "tailwind.config.js",
              format: "tailwind/config",
              options: {
                fileHeader: "canEditHeader",
              },
            },
          ],
        },
      },
    });
    SD.buildAllPlatforms();
    logger.success("Base theme built!");
  }

  // Dark styles
  {
    console.log("Building dark theme...");
    const SD = new StyleDictionary({
      source: [
        "tokens/**/*(*.dark).json", // only dark files
      ],
      log: { verbosity: "verbose" },
      platforms: {
        base: {
          transformGroup: "css",
          transforms: defaultTransforms,
          buildPath: "build/tailwind/",
          files: [
            {
              destination: "dark.css",
              format: "css/variables",
              options: {
                fileHeader: "doNotEditWarningHeader",
                selector: ".dark",
                outputReferences: true,
              },
            },
          ],
        },
      },
    });
    SD.buildAllPlatforms();
    logger.success("Dark theme built!");
  }

  logger.success("All builds finished!");
}

main().catch((err) => {
  console.error("Error building tokens:", err);
  process.exit(1);
});

export { main };
