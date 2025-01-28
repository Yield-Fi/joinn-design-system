/**
 * Autogenerated file. Generated at 1/28/2025, 8:28:01 AM.
 * This file can be edited to extend base.config.js e.g custom plugins or themes.
 */

/** @type {import('tailwindcss').Config} */

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
