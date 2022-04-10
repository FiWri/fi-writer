import type { Theme } from "theme-ui";
import { buttons } from "./buttons";
import { colors } from "./colors";
import { fonts } from "./fonts";

export const theme: Theme = {
  config: {
    initialColorModeName: "light",
  },
  fonts,
  colors,
  buttons,
};
