import { ColorModesScale } from "theme-ui";

export const colors: ColorModesScale = {
  /**
   * Body background color
   */
  background: "#fff2d6",
  /**
   * Body foreground color
   */
  text: "black",
  /**
   * Primary brand color for links, buttons, etc.
   */
  primary: "#71A9F7",
  /**
   * A secondary brand color for alternative styling
   */
  secondary: "#5C946E",
  /**
   * A contrast color for emphasizing UI
   */
  accent: "#3B322C",
  /**
   * A background color for highlighting text
   */
  //  highlight: '',
  /**
   * A faint color for backgrounds, borders, and accents that do not require
   * high contrast with the background color
   */
  muted: "#F08CAE",

  modes: {
    dark: {
      background: "#282c34",
      text: `white`,
      primary: "#146D85",
      secondary: "#9FB6E3",
      accent: `#27A8CC`,
      muted: "#203257",
    },
  },
};
