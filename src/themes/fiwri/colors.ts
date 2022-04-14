import { ColorModesScale } from 'theme-ui';

export const colors: ColorModesScale = {
  text: '#000200', // Body foreground color
  background: '#FAFAF9', // Body background color
  muted: 'rgba(0,0,0,.1)', // A faint color for backgrounds, borders, and accents that do not require high contrast with the background color
  primary: '#F25F5C', // Primary brand color for links, buttons, etc.
  primaryDark: '#B51916', // same but darker
  primaryLight: '#FCBAB1', //same but lighter
  blue: '#B6DEE2',
  blueDark: '#247BA0',
  greenDark: '#2D5948',
  green: '#B2E4DC',
  yellowDark: '#FFDA3A',
  yellow: '#FCF5C7',
  // accent: "#3B322C", // contrast color for emphasizing UI
  // highlight: "", // A background color for highlighting text
  modes: {
    dark: {
      text: `#eee`,
      background: '#2E2836',
      muted: 'rgba(0,0,0,.1)',
      primary: '#F25F5C',
      primaryDark: '#B51916',
      primaryLight: '#FCBAB1',
      blue: '#B6DEE2',
      blueDark: '#247BA0',
      greenDark: '#2D5948',
      green: '#B2E4DC',
      yellowDark: '#FFDA3A',
      yellow: '#FCF5C7',
      // accent: "#3B322C",
      // highlight: "", // A background color for highlighting text
    },
  },
};
