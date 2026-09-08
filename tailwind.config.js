/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface": "#f4f1ea",
        "primary-container": "#00f0ff",
        "on-surface-variant": "#000000",
        "primary": "#dbfcff",
        "on-surface": "#000000",
        "surface-container-low": "#e2ded2",
        "surface-container-highest": "#d1ccc0",
        "outline-variant": "#cbd5e1",
        "on-primary-container": "#000000",
      },
      spacing: {
        "margin-mobile": "16px",
        "section-gap": "120px",
        "margin-desktop": "80px",
        "gutter": "24px",
      },
      fontFamily: {
        "fraunces": ["'Fraunces'", "serif"],
        "inter": ["'Inter'", "sans-serif"],
        "headline-xl": ["'Hanken Grotesk'", "sans-serif"],
        "headline-md": ["'Hanken Grotesk'", "sans-serif"],
        "headline-lg": ["'Hanken Grotesk'", "sans-serif"],
        "body-lg": ["'Hanken Grotesk'", "sans-serif"],
        "body-md": ["'Hanken Grotesk'", "sans-serif"],
        "code-sm": ["'JetBrains Mono'", "monospace"],
        "label-caps": ["'JetBrains Mono'", "monospace"],
      },
    },
  },
  plugins: [],
}
