/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* Background Colors */
        background: {
          primary: "var(--background-primary)",
          secondary: "var(--background-secondary)",
          tertiary: "var(--background-tertiary)",
        },
        /* Text Colors */
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          tertiary: "var(--text-tertiary)",
          accent: "var(--text-accent)",
        },
        /* Surface Colors (Includes Cards, Panels, Navigation) */
        surface: {
          primary: "var(--surface-primary)", // Main navigation or elevated surfaces
          secondary: "var(--surface-secondary)", // Nested surfaces
        },
        /* Button Colors */
        button: {
          primary: {
            bg: "var(--button-primary-bg)",
            hover: "var(--button-primary-hover)",
            text: "var(--button-primary-text)",
          },
          secondary: {
            bg: "var(--button-secondary-bg)",
            hover: "var(--button-secondary-hover)",
            text: "var(--button-secondary-text)",
          },
          success: {
            bg: "var(--button-success-bg)",
            hover: "var(--button-success-hover)",
            text: "var(--button-success-text)",
          },
          error: {
            bg: "var(--button-error-bg)",
            hover: "var(--button-error-hover)",
            text: "var(--button-error-text)",
          },
          warning: {
            bg: "var(--button-warning-bg)",
            hover: "var(--button-warning-hover)",
            text: "var(--button-warning-text)",
          },
          info: {
            bg: "var(--button-info-bg)",
            hover: "var(--button-info-hover)",
            text: "var(--button-info-text)",
          },
        },
        /* Border Colors */
        border: {
          primary: "var(--border-primary)",
          secondary: "var(--border-secondary)",
          accent: "var(--border-accent)",
        },
        /* Separator Colors */
        separator: {
          primary: "var(--separator-primary)",
          secondary: "var(--separator-secondary)",
        },
        /* Icon Colors */
        icon: {
          primary: "var(--icon-primary)",
          muted: "var(--icon-muted)",
          accent: "var(--icon-accent)",
        },
        /* Progress Bar Colors */
        progress: {
          /* Default Progress Bar */
          primary: {
            bg: "var(--progress-bg)",
            fill: "var(--progress-fill)",
            hover: "var(--progress-hover)",
          },
          /* Success Progress Bar */
          success: {
            bg: "var(--progress-success-bg)",
            fill: "var(--progress-success-fill)",
            hover: "var(--progress-success-hover)",
          },
          /* Error Progress Bar */
          error: {
            bg: "var(--progress-error-bg)",
            fill: "var(--progress-error-fill)",
            hover: "var(--progress-error-hover)",
          },
          /* Warning Progress Bar */
          warning: {
            bg: "var(--progress-warning-bg)",
            fill: "var(--progress-warning-fill)",
            hover: "var(--progress-warning-hover)",
          },
          /* Info Progress Bar */
          info: {
            bg: "var(--progress-info-bg)",
            fill: "var(--progress-info-fill)",
            hover: "var(--progress-info-hover)",
          },
        },
        fontFamily: {
          base: "var(--font-family-base)", // Default body font
          heading: "var(--font-family-heading)", // Headings
          mono: "var(--font-family-mono)", // Monospaced
        },
        fontSize: {
          xs: "var(--font-size-xs)",
          sm: "var(--font-size-sm)",
          base: "var(--font-size-base)",
          lg: "var(--font-size-lg)",
          xl: "var(--font-size-xl)",
          "2xl": "var(--font-size-2xl)",
          "3xl": "var(--font-size-3xl)",
          tight: "var(--line-height-tight)",
        },
      },
      fontWeight: {
        normal: "var(--font-weight-normal)",
        medium: "var(--font-weight-medium)",
        bold: "var(--font-weight-bold)",
      },
      lineHeight: {
        normal: "var(--line-height-normal)",
        heading: "var(--line-height-heading)",
      },
      boxShadow: {
        DEFAULT: "var(--shadow-default)",
        soft: "var(--shadow-soft)",
        sm: "var(--shadow-sm)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
      },
    },
  },
  plugins: [],
};
