/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cyan Scale
        "cyan-1": "#fafdfe",
        "cyan-2": "#f2fafb",
        "cyan-3": "#def7f9",
        "cyan-4": "#caf1f6",
        "cyan-5": "#b5e9f0",
        "cyan-6": "#9ddde7",
        "cyan-7": "#7dcedc",
        "cyan-8": "#3db9cf",
        "cyan-9": "#00a2c7",
        "cyan-10": "#0797b9",
        "cyan-11": "#107d98",
        "cyan-12": "#0d3c48",

        // Semantic Roles (Light Mode)
        "app-bg": "#000000", // cyan-1
        "subtle-bg": "#f2fafb", // cyan-2
        "ui-bg": "#def7f9", // cyan-3
        "ui-hover-bg": "#caf1f6", // cyan-4
        "ui-active-bg": "#b5e9f0", // cyan-5

        "border-subtle": "#9ddde7", // cyan-6
        "border-default": "#7dcedc", // cyan-7
        "border-strong": "#3db9cf", // cyan-8

        "solid-bg": "#00a2c7", // cyan-9
        "solid-hover-bg": "#0797b9", // cyan-10

        muted: "#107d98", // cyan-11
        strong: "#0d3c48", // cyan-12
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: [
          "var(--font-poppins)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        "geist-sans": ["var(--font-geist-sans)"],
        "geist-mono": ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [],
};
