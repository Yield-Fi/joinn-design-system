/**
 * Autogenerated file. Generated at 1/27/2025, 3:24:55 AM.
 * Do not edit!
 */

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        button: {
          primary: {
            bg: "var(--colors-button-primary-bg)",
            hover: "var(--colors-button-primary-hover)",
            text: "var(--colors-button-primary-text)"
          },
          secondary: {
            bg: "var(--colors-button-secondary-bg)",
            hover: "var(--colors-button-secondary-hover)",
            text: "var(--colors-button-secondary-text)"
          },
          accent: {
            bg: "var(--colors-button-accent-bg)",
            hover: "var(--colors-button-accent-hover)",
            text: "var(--colors-button-accent-text)"
          },
          success: {
            bg: "var(--colors-button-success-bg)",
            hover: "var(--colors-button-success-hover)",
            text: "var(--colors-button-success-text)"
          },
          error: {
            bg: "var(--colors-button-error-bg)",
            hover: "var(--colors-button-error-hover)",
            text: "var(--colors-button-error-text)"
          },
          warning: {
            bg: "var(--colors-button-warning-bg)",
            hover: "var(--colors-button-warning-hover)",
            text: "var(--colors-button-warning-text)"
          },
          info: {
            bg: "var(--colors-button-info-bg)",
            hover: "var(--colors-button-info-hover)",
            text: "var(--colors-button-info-text)"
          }
        },
        progress: {
          primary: {
            bg: "var(--colors-progress-primary-bg)",
            fill: "var(--colors-progress-primary-fill)",
            hover: "var(--colors-progress-primary-hover)"
          },
          success: {
            bg: "var(--colors-progress-success-bg)",
            fill: "var(--colors-progress-success-fill)",
            hover: "var(--colors-progress-success-hover)"
          },
          error: {
            bg: "var(--colors-progress-error-bg)",
            fill: "var(--colors-progress-error-fill)",
            hover: "var(--colors-progress-error-hover)"
          }
        },
        white: {
          "100": "var(--colors-white-100)",
          "200": "var(--colors-white-200)",
          "300": "var(--colors-white-300)"
        },
        black: {
          "100": "var(--colors-black-100)",
          "200": "var(--colors-black-200)",
          "300": "var(--colors-black-300)"
        },
        grey: {
          "100": "var(--colors-grey-100)",
          "200": "var(--colors-grey-200)"
        },
        blue: {
          "100": "var(--colors-blue-100)",
          "200": "var(--colors-blue-200)"
        },
        green: {
          "100": "var(--colors-green-100)",
          "200": "var(--colors-green-200)"
        },
        yellow: {
          "100": "var(--colors-yellow-100)",
          "200": "var(--colors-yellow-200)"
        },
        orange: {
          "100": "var(--colors-orange-100)",
          "200": "var(--colors-orange-200)"
        },
        red: {
          "100": "var(--colors-red-100)",
          "200": "var(--colors-red-200)"
        },
        purple: {
          "100": "var(--colors-purple-100)",
          "200": "var(--colors-purple-200)"
        },
        background: {
          primary: "var(--colors-background-primary)",
          secondary: "var(--colors-background-secondary)",
          inverse: "var(--colors-background-inverse)"
        },
        text: {
          primary: "var(--colors-text-primary)",
          secondary: "var(--colors-text-secondary)",
          tertiary: "var(--colors-text-tertiary)",
          inverse: "var(--colors-text-inverse)",
          accent: "var(--colors-text-accent)"
        },
        surface: {
          primary: "var(--colors-surface-primary)",
          secondary: "var(--colors-surface-secondary)"
        },
        border: {
          primary: "var(--colors-border-primary)",
          secondary: "var(--colors-border-secondary)",
          accent: "var(--colors-border-accent)"
        },
        separator: {
          primary: "var(--colors-separator-primary)",
          secondary: "var(--colors-separator-secondary)"
        },
        icon: {
          primary: "var(--colors-icon-primary)",
          muted: "var(--colors-icon-muted)",
          accent: "var(--colors-icon-accent)"
        }
      },
      shadow: {
        default: "var(--shadow-default)",
        soft: "var(--shadow-soft)",
        card: "var(--shadow-card)",
        modal: "var(--shadow-modal)"
      },
      dimensions: {
        spacing: {
          "0": "var(--dimensions-spacing-0)",
          "1": "var(--dimensions-spacing-1)",
          "2": "var(--dimensions-spacing-2)",
          "3": "var(--dimensions-spacing-3)",
          "4": "var(--dimensions-spacing-4)",
          "5": "var(--dimensions-spacing-5)"
        },
        border: {
          radius: {
            none: "var(--dimensions-border-radius-none)",
            sm: "var(--dimensions-border-radius-sm)",
            md: "var(--dimensions-border-radius-md)",
            lg: "var(--dimensions-border-radius-lg)",
            full: "var(--dimensions-border-radius-full)"
          }
        },
        max: {
          width: {
            container: "var(--dimensions-max-width-container)",
            content: "var(--dimensions-max-width-content)"
          }
        }
      },
      typography: {
        font: {
          family: {
            base: "var(--typography-font-family-base)",
            heading: "var(--typography-font-family-heading)",
            mono: "var(--typography-font-family-mono)"
          },
          size: {
            xs: "var(--typography-font-size-xs)",
            sm: "var(--typography-font-size-sm)",
            base: "var(--typography-font-size-base)",
            lg: "var(--typography-font-size-lg)",
            xl: "var(--typography-font-size-xl)",
            "2xl": "var(--typography-font-size-2xl)",
            "3xl": "var(--typography-font-size-3xl)"
          },
          weight: {
            normal: "var(--typography-font-weight-normal)",
            medium: "var(--typography-font-weight-medium)",
            semibold: "var(--typography-font-weight-semibold)",
            bold: "var(--typography-font-weight-bold)"
          }
        },
        line: {
          height: {
            normal: "var(--typography-line-height-normal)",
            heading: "var(--typography-line-height-heading)",
            tight: "var(--typography-line-height-tight)"
          }
        }
      }
    }
  },
  plugins: []
};
