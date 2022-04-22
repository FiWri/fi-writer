import { useColorMode } from 'theme-ui';

export const useColor = () => {
  const [colorMode, setColorMode] = useColorMode();

  const switchColorMode = () => {
    const colorArray: string[] = ['light', 'dark'];
    const current = colorArray.indexOf(colorMode);
    // loop through the array
    if (current === -1 || current === colorArray.length - 1) {
      setColorMode(colorArray[0]);
    } else {
      setColorMode(colorArray[current + 1]);
    }
  };

  return { switchColorMode };
};
