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
        // Jade Scale
        "jade-1": "#fbfefd",
        "jade-2": "#f4fbf7",
        "jade-3": "#e6f7ed",
        "jade-4": "#d6f1e3",
        "jade-5": "#c3e9d7",
        "jade-6": "#acdec8",
        "jade-7": "#8bceb6",
        "jade-8": "#56ba9f",
        "jade-9": "#29a383",
        "jade-10": "#26997b",
        "jade-11": "#208368",
        "jade-12": "#1d3b31",

        // Semantic Roles
        "app-bg": "#fbfefd", // jade-1
        "subtle-bg": "#f4fbf7", // jade-2
        "ui-bg": "#e6f7ed", // jade-3
        "ui-hover-bg": "#d6f1e3", // jade-4
        "ui-active-bg": "#c3e9d7", // jade-5

        "border-subtle": "#acdec8", // jade-6
        "border-default": "#8bceb6", // jade-7
        "border-strong": "#56ba9f", // jade-8

        "solid-bg": "#29a383", // jade-9
        "solid-hover-bg": "#26997b", // jade-10

        muted: "#208368", // jade-11
        strong: "#1d3b31", // jade-12
      },
      fontFamily: {
        "geist-sans": ["var(--font-geist-sans)"],
        "geist-mono": ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [],
};
