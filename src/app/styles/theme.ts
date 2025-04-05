export const colors = {
    primary: "#111827",
    secondary: "#0C111B",
    accent: "#EAB308",
    black: "#020204",
    white: "#F3F4F6",
} as const;

export type ColorKeys = keyof typeof colors;

// Generate CSS variables
export const cssVariables = Object.entries(colors)
    .map(([key, value]) => `--color-${key}: ${value};`)
    .join("\n");

// Helper function to use CSS variables in TypeScript
export const getColorVar = (colorKey: ColorKeys) => `var(--color-${colorKey})`;
