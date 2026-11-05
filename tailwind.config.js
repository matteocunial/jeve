/**
 * Tailwind config per il sito AfterLoop.
 * Il preset del brand kit fornisce colori, font, raggi e letter-spacing.
 */
const preset = require("./afterloop-brand-kit/tokens/tailwind.preset.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [preset],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // Alias dei token strutturali di tokens.css (nessun colore nuovo).
      colors: {
        "al-bg": "var(--al-bg)",
        "al-text": "var(--al-text)",
        "al-muted": "var(--al-text-muted)",
        "al-line": "var(--al-border)",
        "al-surface": "var(--al-surface)",
      },
      maxWidth: {
        site: "1200px",
      },
    },
  },
  plugins: [],
};
