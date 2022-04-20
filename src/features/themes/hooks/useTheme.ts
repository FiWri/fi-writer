import {
  base,
  bootstrap,
  bulma,
  dark,
  deep,
  funk,
  future,
  roboto,
  swiss,
  system,
  tailwind,
  tosh,
} from '@theme-ui/presets';
import { atom, useAtom } from 'jotai';
import { Theme } from 'theme-ui';
import { sketchy } from '../sketchy';

const themeAtom = atom(sketchy as Theme);

export const useTheme = () => {
  const [theme, setTheme] = useAtom(themeAtom);

  const switchTheme = () => {
    const themeArray: Theme[] = [
      sketchy,
      base,
      bootstrap,
      bulma,
      dark,
      deep,
      funk,
      future,
      roboto,
      swiss,
      system,
      tailwind,
      tosh,
    ];
    const current = themeArray.indexOf(theme);
    // loop through the array
    if (current === -1 || current === themeArray.length - 1) {
      setTheme(themeArray[0]);
    } else {
      setTheme(themeArray[current + 1]);
    }
  };

  return { theme, switchTheme };
};
