export const colors = {
    primary: "#111827",
    secondary: "#0C111B",
    accent: "#EAB308",
    black: "#020204",
    white: "#F3F4F6",
};

// Génère automatiquement des variables CSS
export const cssVariables = Object.entries(colors)
    .map(([key, value]) => `--color-${key}: ${value};`)
    .join("\n");
