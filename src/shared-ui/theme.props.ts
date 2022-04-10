import { Theme } from "../themes";

export interface ThemeProps<T> extends React.HTMLProps<T> {
  theme: Theme;
}
