import { base, bootstrap, bulma, dark, deep, funk, future, roboto, sketchy, swiss, system, tailwind, tosh } from "@theme-ui/presets";
import { atom, useAtom } from "jotai";
import { Theme } from "theme-ui";

const themeAtom = atom(base as Theme);

export const useTheme = () => {
  const [theme, setTheme] = useAtom(themeAtom);

  const switchTheme = () => {
    const themeArray: Theme[] = [base, bootstrap, bulma, dark, deep, funk, future, roboto, sketchy, swiss, system, tailwind, tosh];
    const current = themeArray.indexOf(theme);
    console.log(`current theme index: ${current}`);
    if (current === -1 || current === themeArray.length - 1) {
      setTheme(themeArray[0]);
    } else {
      setTheme(themeArray[current + 1]);
    }
  };

  return { theme, switchTheme };
};
