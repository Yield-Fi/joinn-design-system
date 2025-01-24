import StyleDictionary from "style-dictionary";

// Helper to generate proper CSS variable names
function generateVariableName(token) {
  const sanitizedPath = token.path
    .filter(
      (segment) => !["colors", "themes", "light", "dark"].includes(segment)
    ) // Remove unwanted prefixes
    .join("-");
  return `--${sanitizedPath.toLowerCase()}`;
}

// Custom format for global variables
StyleDictionary.registerFormat({
  name: "css/global",
  format: ({ dictionary }) => {
    return `:root {\n${dictionary.allTokens
      .map((token) => `  ${generateVariableName(token)}: ${token.$value};`)
      .join("\n")}\n}`;
  },
});

// Custom format for light mode variables
StyleDictionary.registerFormat({
  name: "css/light",
  format: ({ dictionary }) => {
    return `:root {\n${dictionary.allTokens
      .map((token) => `  ${generateVariableName(token)}: ${token.$value};`)
      .join("\n")}\n}`;
  },
});

// Custom format for dark mode variables
StyleDictionary.registerFormat({
  name: "css/dark",
  format: ({ dictionary }) => {
    return `.dark {\n${dictionary.allTokens
      .map((token) => `  ${generateVariableName(token)}: ${token.$value};`)
      .join("\n")}\n}`;
  },
});

// Filters to include tokens based on their theme attribute
StyleDictionary.registerFilter({
  name: "isGlobal",
  filter: (token) => token.attributes?.theme === "global",
});

StyleDictionary.registerFilter({
  name: "isLight",
  filter: (token) => token.attributes?.theme === "light",
});

StyleDictionary.registerFilter({
  name: "isDark",
  filter: (token) => token.attributes?.theme === "dark",
});

// Configure Style Dictionary
const styleDictionary = new StyleDictionary({
  source: ["./src/style/tokens.json"],
  platforms: {
    global: {
      transformGroup: "css",
      buildPath: "dist/css/",
      files: [
        {
          destination: "global.css",
          format: "css/global",
          filter: "isGlobal",
        },
      ],
    },
    light: {
      transformGroup: "css",
      buildPath: "dist/css/",
      files: [
        {
          destination: "lightMode.css",
          format: "css/light",
          filter: "isLight",
        },
      ],
    },
    dark: {
      transformGroup: "css",
      buildPath: "dist/css/",
      files: [
        {
          destination: "darkMode.css",
          format: "css/dark",
          filter: "isDark",
        },
      ],
    },
  },
});

// dist all platforms
await styleDictionary.buildAllPlatforms();
