import type { ThemeUIStyleObject } from "theme-ui";

export const buttons: Record<string, ThemeUIStyleObject> = {
  primary: {
    color: "background",
    bg: "primary",
    "&:hover": {
      bg: "text",
    },
  },
  secondary: {
    color: "background",
    bg: "secondary",
    "&:hover": {
      bg: "text",
    },
  },
};
