import {
  base,
  bootstrap,
  bulma,
  dark,
  deep,
  funk,
  future,
  roboto,
  sketchy,
  swiss,
  system,
  tailwind,
  tosh,
} from '@theme-ui/presets';
import { atom, useAtom } from 'jotai';
import { Theme } from 'theme-ui';
import { fiwri } from './fiwri';

const themeAtom = atom(fiwri as Theme);

export const useTheme = () => {
  const [theme, setTheme] = useAtom(themeAtom);

  const switchTheme = () => {
    const themeArray: Theme[] = [
      fiwri,
      // base,
      // bootstrap,
      // bulma,
      // dark,
      // deep,
      // funk,
      // future,
      // roboto,
      sketchy,
      // swiss,
      // system,
      // tailwind,
      // tosh,
    ];
    const current = themeArray.indexOf(theme);
    console.log(`current theme index: ${current}`);
    // loop through the array
    if (current === -1 || current === themeArray.length - 1) {
      setTheme(themeArray[0]);
    } else {
      setTheme(themeArray[current + 1]);
    }
  };

  return { theme, switchTheme };
};
