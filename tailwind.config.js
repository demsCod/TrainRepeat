/** @type {import('tailwindcss').Config} */

// ===== RADIX UI SCALE CONFIGURATION =====
// Suivant les conventions Radix UI: https://www.radix-ui.com/colors

// Thèmes disponibles - Changez CURRENT_THEME pour basculer
const THEMES = {
  blue: {
    light: {
      // Blue scale pour les accents
      scale1: "#f0f9ff",
      scale2: "#e0f2fe",
      scale3: "#bae6fd",
      scale4: "#7dd3fc",
      scale5: "#38bdf8",
      scale6: "#0ea5e9",
      scale7: "#0284c7",
      scale8: "#0369a1",
      scale9: "#0284c7", // Solid backgrounds
      scale10: "#0369a1", // Hovered solid backgrounds
      scale11: "#075985",
      scale12: "#0c4a6e",
    },
    dark: {
      // scale scale pour les accents (dark) - Plus vibrant
      scale1: "#0c1220",
      scale2: "#111827",
      scale3: "#1e293b",
      scale4: "#334155",
      scale5: "#475569",
      scale6: "#3B9EFF",
      scale7: "#94a3b8",
      scale8: "#cbd5e1",
      scale9: "#3b82f6", //C2E6FFlid backgrounds - bleu vibrant
      scale10: "#60a5fa", // Hovered solid backgrounds
      scale11: "#93c5fd",
      scale12: "#dbeafe",
    },
  },
  green: {
    light: {
      scale1: "#fbfefd",
      scale2: "#f4fbf7",
      scale3: "#e6f7ed",
      scale4: "#d6f1e3",
      scale5: "#c3e9d7",
      scale6: "#acdec8",
      scale7: "#8bceb6",
      scale8: "#56ba9f",
      scale9: "#29a383",
      scale10: "#26997b",
      scale11: "#208368",
      scale12: "#1d3b31",
    },
    dark: {
      scale1: "#0e1512",
      scale2: "#121b17",
      scale3: "#132d21",
      scale4: "#113b29",
      scale5: "#174933",
      scale6: "#20573e",
      scale7: "#28684a",
      scale8: "#2f7c57",
      scale9: "#30a46c",
      scale10: "#33b074",
      scale11: "#3dd68c",
      scale12: "#b1f1cb",
    },
  },
  red: {
    light: {
      scale1: "#fffcfc",
      scale2: "#fff7f7",
      scale3: "#feebec",
      scale4: "#ffdbdc",
      scale5: "#ffcdce",
      scale6: "#fdbdbe",
      scale7: "#f4a9aa",
      scale8: "#eb8e90",
      scale9: "#e5484d",
      scale10: "#dc3e42",
      scale11: "#ce2c31",
      scale12: "#641723",
    },
    dark: {
      scale1: "#191111",
      scale2: "#201314",
      scale3: "#3b1219",
      scale4: "#500f1c",
      scale5: "#611623",
      scale6: "#72232d",
      scale7: "#8c333a",
      scale8: "#b54548",
      scale9: "#e5484d",
      scale10: "#ec5d5e",
      scale11: "#ff9592",
      scale12: "#ffd1d9",
    },
  },
  sky: {
    light: {
      scale1: "#f9feff",
      scale2: "#f1fafd",
      scale3: "#e1f6fd",
      scale4: "#d1f0fa",
      scale5: "#bee7f5",
      scale6: "#a9daed",
      scale7: "#8dcae3",
      scale8: "#60b3d7",
      scale9: "#7ce2fe",
      scale10: "#74daf8",
      scale11: "#00749e",
      scale12: "#1d3e56",
    },
    dark: {
      scale1: "#0d141f",
      scale2: "#111a27",
      scale3: "#112840",
      scale4: "#113555",
      scale5: "#154467",
      scale6: "#1b537b",
      scale7: "#1f6692",
      scale8: "#197cae",
      scale9: "#7ce2fe",
      scale10: "#a8eeff",
      scale11: "#75c7f0",
      scale12: "#c2f3ff",
    },
  },
  yellow: {
    light: {
      scale1: "#fdfdf9",
      scale2: "#fefce9",
      scale3: "#fffab8",
      scale4: "#fff394",
      scale5: "#ffe770",
      scale6: "#f3d768",
      scale7: "#e4c767",
      scale8: "#d5ae39",
      scale9: "#ffe629",
      scale10: "#ffdc00",
      scale11: "#9e6c00",
      scale12: "#473b1f",
    },
    dark: {
      scale1: "#14120b",
      scale2: "#1b180f",
      scale3: "#2d2305",
      scale4: "#362b00",
      scale5: "#433500",
      scale6: "#524202",
      scale7: "#665417",
      scale8: "#836a21",
      scale9: "#ffe629",
      scale10: "#ffff57",
      scale11: "#f5e147",
      scale12: "#f6eeb4",
    },
  },
};

// Configuration du thème actuel
const CURRENT_THEME = "blue"; // Changez ici: "blue", "purple", "green", "orange"
const CURRENT_MODE = "dark"; // Changez ici: "light", "dark"

// Génération des couleurs sémantiques basées sur Radix Scale
const generateRadixColors = (theme, mode) => {
  const colors = THEMES[theme][mode];

  return {
    // ===== RADIX SCALE (1-12) =====
    // Backgrounds (Steps 1-2)
    "app-bg": colors.scale1, // Step 1: App background
    "bg-subtle": colors.scale2, // Step 2: Subtle background

    // UI Components (Steps 3-5)
    "ui-bg": colors.scale3, // Step 3: UI element background
    "ui-bg-hover": colors.scale4, // Step 4: Hovered UI element background
    "ui-bg-active": colors.scale5, // Step 5: Active/Selected UI element background

    // Borders (Steps 6-8)
    "border-subtle": colors.scale6, // Step 6: Subtle borders and separators
    border: colors.scale7, // Step 7: UI element border and focus rings
    "border-hover": colors.scale8, // Step 8: Hovered UI element border

    // Solid Colors (Steps 9-10)
    primary: colors.scale9, // Step 9: Solid backgrounds
    "primary-hover": colors.scale10, // Step 10: Hovered solid backgrounds

    // Text (Steps 11-12)
    "text-low": colors.scale11, // Step 11: Low-contrast text
    "text-high": colors.scale12, // Step 12: High-contrast text

    // Accent variations
    "accent-bg": colors.scale3, // Accent background
    "accent-border": colors.scale7, // Accent border
    "accent-solid": colors.scale9, // Accent solid
    "accent-solid-hover": colors.scale10, // Accent solid hover

    // ===== SEMANTIC ALIASES =====
    surface: colors.scale2,
    "surface-hover": colors.scale3,
    text: colors.scale12,
    "text-muted": colors.scale11,
    "text-secondary": colors.scale9,

    // Status colors (adaptés au mode)
    success: mode === "light" ? "#16a34a" : "#22c55e",
    warning: mode === "light" ? "#ea580c" : "#fb923c",
    error: mode === "light" ? "#dc2626" : "#f87171",
    info: colors.scale9,

    // Neutral (pour boutons comme Apple) - Plus contrasté
    neutral: mode === "light" ? "#1f2937" : "#374151",
    "neutral-hover": mode === "light" ? "#111827" : "#4b5563",

    // Additional semantic colors
    "accent-secondary": "#3b82f6",
    "accent-secondary-hover": "#2563eb",
    "accent-tertiary": "#8b5cf6",
    "accent-tertiary-hover": "#7c3aed",
    "accent-warning": "#f59e0b",
    "accent-warning-hover": "#d97706",
    "accent-danger": "#ef4444",
    "accent-danger-hover": "#dc2626",
    "primary-strong": colors.scale11,

    // Intensity badges
    "intensity-high": mode === "light" ? "#fef2f2" : "#451a1a",
    "intensity-high-text": mode === "light" ? "#dc2626" : "#fca5a5",
    "intensity-medium": mode === "light" ? "#fffbeb" : "#451a03",
    "intensity-medium-text": mode === "light" ? "#d97706" : "#fbbf24",
    "intensity-low": mode === "light" ? "#f0fdf4" : "#14532d",
    "intensity-low-text": mode === "light" ? "#16a34a" : "#86efac",
  };
};

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: generateRadixColors(CURRENT_THEME, CURRENT_MODE),

      backgroundImage: {
        // Gradients thématiques basés sur Radix
        "gradient-primary":
          "linear-gradient(135deg, var(--tw-colors-primary), var(--tw-colors-primary-hover))",
        "gradient-surface":
          "linear-gradient(135deg, var(--tw-colors-surface), var(--tw-colors-surface-hover))",
        "gradient-header":
          "linear-gradient(90deg, var(--tw-colors-primary), var(--tw-colors-primary-hover))",

        // Grid patterns
        "grid-pattern": `
          linear-gradient(var(--tw-colors-border-subtle) 1px, transparent 1px),
          linear-gradient(90deg, var(--tw-colors-border-subtle) 1px, transparent 1px)
        `,
      },

      backgroundSize: {
        "grid-sm": "20px 20px",
        "grid-md": "40px 40px",
        "grid-lg": "60px 60px",
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

      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
        "scale-in": "scaleIn 0.2s ease-out",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
