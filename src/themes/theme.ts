import type { Theme } from "theme-ui";
import { buttons } from "./buttons";
import { colors } from "./colors";
import { styles } from "./styles";
import { swiss } from "@theme-ui/presets";

// Base preset for the theme is available here: https://github.com/system-ui/theme-ui/blob/develop/packages/preset-base/src/index.ts
export const theme: Theme = {
  config: {
    initialColorModeName: "light",
  },
  ...swiss,
  buttons,
  colors,
  // ...fonts,
  styles,
};
