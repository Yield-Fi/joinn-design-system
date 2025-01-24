import StyleDictionary from "style-dictionary";

const SCHEMA_URL =
  "https://raw.githubusercontent.com/Yield-Fi/joinn-design-system/refs/heads/main/schema/tokens.json";

// Helper to generate proper CSS variable names
function generateVariableName(token) {
  const sanitizedPath = token.path
    .filter(
      (segment) =>
        !["global", "colors", "themes", "light", "dark"].includes(segment)
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

// Fetch tokens from the remote URL
async function fetchTokens() {
  console.log(`Fetching tokens from: ${SCHEMA_URL}`);
  const response = await fetch(SCHEMA_URL);

  if (!response.ok) {
    throw new Error(`Failed to fetch tokens: ${response.statusText}`);
  }

  const tokens = await response.json();
  console.log("Tokens fetched successfully.");
  return tokens;
}

// Main function to transform and generate CSS files
async function main() {
  try {
    const tokens = await fetchTokens();

    // Create a Style Dictionary instance
    const sd = new StyleDictionary({
      tokens, // Pass the tokens directly
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

    // Await initialization
    await sd.hasInitialized;

    // dist all platforms
    await sd.buildAllPlatforms();
    console.log("CSS files generated successfully!");
  } catch (error) {
    console.error("Error processing tokens:", error);
  }
}

main();
