/**
 * Autogenerated file. Generated at 2/10/2025, 10:39:24 AM.
 * This file can be edited to extend the base configuration.
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
