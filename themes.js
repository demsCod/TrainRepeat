/**
 * CONFIGURATION DE THÈMES POUR L'APPLICATION
 *
 * Pour changer de thème, copiez les couleurs ci-dessous dans tailwind.config.js
 * dans la section "colors" > "// ===== COULEURS DE BASE =====".
 *
 * Gardez tous les alias sémantiques intacts, ne changez que les couleurs de base.
 */

// ===== THÈME 1: CYAN (ACTUEL) =====
export const THEME_CYAN = {
  "base-1": "#fafdfe", // Très clair
  "base-2": "#f2fafb", // Clair
  "base-3": "#def7f9", // Clair moyen
  "base-4": "#caf1f6", // Moyen clair
  "base-5": "#b5e9f0", // Moyen
  "base-6": "#9ddde7", // Moyen foncé
  "base-7": "#7dcedc", // Foncé moyen
  "base-8": "#3db9cf", // Foncé
  "base-9": "#00a2c7", // Principal
  "base-10": "#0797b9", // Principal foncé
  "base-11": "#107d98", // Très foncé
  "base-12": "#0d3c48", // Ultra foncé
};

// ===== THÈME 2: PURPLE (MODERNE) =====
export const THEME_PURPLE = {
  "base-1": "#fefcff", // Très clair
  "base-2": "#fbf7ff", // Clair
  "base-3": "#f5edff", // Clair moyen
  "base-4": "#ede1ff", // Moyen clair
  "base-5": "#e2d1ff", // Moyen
  "base-6": "#d4bbff", // Moyen foncé
  "base-7": "#c29fff", // Foncé moyen
  "base-8": "#a577ff", // Foncé
  "base-9": "#8b5cf6", // Principal (Violet moderne)
  "base-10": "#7c3aed", // Principal foncé
  "base-11": "#6d28d9", // Très foncé
  "base-12": "#4c1d95", // Ultra foncé
};

// ===== THÈME 3: EMERALD (NATUREL) =====
export const THEME_EMERALD = {
  "base-1": "#f0fdf4", // Très clair
  "base-2": "#dcfce7", // Clair
  "base-3": "#bbf7d0", // Clair moyen
  "base-4": "#86efac", // Moyen clair
  "base-5": "#4ade80", // Moyen
  "base-6": "#22c55e", // Moyen foncé
  "base-7": "#16a34a", // Foncé moyen
  "base-8": "#15803d", // Foncé
  "base-9": "#10b981", // Principal (Emerald)
  "base-10": "#059669", // Principal foncé
  "base-11": "#047857", // Très foncé
  "base-12": "#064e3b", // Ultra foncé
};

// ===== THÈME 4: ORANGE (ÉNERGIQUE) =====
export const THEME_ORANGE = {
  "base-1": "#fffbeb", // Très clair
  "base-2": "#fef3c7", // Clair
  "base-3": "#fde68a", // Clair moyen
  "base-4": "#fcd34d", // Moyen clair
  "base-5": "#fbbf24", // Moyen
  "base-6": "#f59e0b", // Moyen foncé
  "base-7": "#d97706", // Foncé moyen
  "base-8": "#b45309", // Foncé
  "base-9": "#ea580c", // Principal (Orange vif)
  "base-10": "#dc2626", // Principal foncé
  "base-11": "#b91c1c", // Très foncé
  "base-12": "#7f1d1d", // Ultra foncé
};

// ===== THÈME 5: BLUE (PROFESSIONNEL) =====
export const THEME_BLUE = {
  "base-1": "#eff6ff", // Très clair
  "base-2": "#dbeafe", // Clair
  "base-3": "#bfdbfe", // Clair moyen
  "base-4": "#93c5fd", // Moyen clair
  "base-5": "#60a5fa", // Moyen
  "base-6": "#3b82f6", // Moyen foncé
  "base-7": "#2563eb", // Foncé moyen
  "base-8": "#1d4ed8", // Foncé
  "base-9": "#1e40af", // Principal (Bleu professionnel)
  "base-10": "#1e3a8a", // Principal foncé
  "base-11": "#1d4ed8", // Très foncé
  "base-12": "#1e3a8a", // Ultra foncé
};

// ===== THÈME 6: PINK (CRÉATIF) =====
export const THEME_PINK = {
  "base-1": "#fdf2f8", // Très clair
  "base-2": "#fce7f3", // Clair
  "base-3": "#fbcfe8", // Clair moyen
  "base-4": "#f9a8d4", // Moyen clair
  "base-5": "#f472b6", // Moyen
  "base-6": "#ec4899", // Moyen foncé
  "base-7": "#db2777", // Foncé moyen
  "base-8": "#be185d", // Foncé
  "base-9": "#e91e63", // Principal (Pink moderne)
  "base-10": "#c2185b", // Principal foncé
  "base-11": "#ad1457", // Très foncé
  "base-12": "#880e4f", // Ultra foncé
};

// ===== THÈME 7: DARK MODE (SOMBRE) =====
export const THEME_DARK = {
  "base-1": "#0f0f23", // Très sombre
  "base-2": "#16213e", // Sombre
  "base-3": "#1e293b", // Sombre moyen
  "base-4": "#334155", // Moyen sombre
  "base-5": "#475569", // Moyen
  "base-6": "#64748b", // Moyen clair
  "base-7": "#94a3b8", // Clair moyen
  "base-8": "#cbd5e1", // Clair
  "base-9": "#3b82f6", // Principal (Bleu pour dark)
  "base-10": "#60a5fa", // Principal clair
  "base-11": "#e2e8f0", // Très clair
  "base-12": "#f8fafc", // Ultra clair
};

/**
 * INSTRUCTIONS D'UTILISATION:
 *
 * 1. Choisissez un thème ci-dessus
 * 2. Copiez les couleurs base-1 à base-12
 * 3. Remplacez-les dans tailwind.config.js ligne 8-19
 * 4. Sauvegardez le fichier
 * 5. Le navigateur se rechargera automatiquement avec le nouveau thème
 *
 * Tous les composants s'adapteront automatiquement !
 */
