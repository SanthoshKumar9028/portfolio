import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: { DEFAULT: { value: "#0563bb" }, 100: { value: "gray" } },
        secondary: { DEFAULT: { value: "#EE0F0F" } },
        bg: {
          darkBg: { value: "#333" },
        },
      },
    },
    semanticTokens: {
      colors: {
        primary: {
          solid: { value: "{colors.primary}" },
          contrast: { value: "white" },
          fg: { value: { _light: "{colors.primary}", _dark: "white" } },
          muted: { value: "{colors.primary}" },
          subtle: { value: "{colors.primary}" },
          emphasized: { value: "{colors.primary.100}" },
          focusRing: { value: "white" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
