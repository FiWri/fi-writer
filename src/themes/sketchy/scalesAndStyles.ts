import { makeTheme } from '@theme-ui/css/utils';

import { ScalesAndStyles } from '../interfaces/ScalesAndStyles';

export const scalesAndStyles: ScalesAndStyles = makeTheme({
  colors: {
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
        muted: '#6A538966',
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
  },
  fonts: {
    body: '"Architects Daughter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  sizes: {
    container: 800,
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  radii: {
    radius0: '225px 25px 225px / 25px 225px',
    radius1: '15px 255px 15px / 225px 15px',
    radius2: '10px 125px 20px / 205px 25px',
    radius3: '225px 15px 15px / 15px 225px',
    radius4: '80px 15px 105px / 25px 250px',
    circle: '200px 185px 160px / 195px 160px',
  },
  borders: {
    thick: '2px solid var(--theme-ui-colors-text, black)',
    thin: '1px solid var(--theme-ui-colors-text, black)',
  },
  shadows: {
    outline: '0 0 0px 1px black rgba(0,0,0,.4)',
    default: '15px 24px 25px -18px rgba(0,0,0,.4)',
    hover: '2px 8px 10px -6px rgba(0,0,0,.4)',
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'primary',
      '&:hover': {
        color: 'primaryDark',
      },
    },
    pre: {
      fontFamily: 'monospace',
      fontSize: 1,
      p: 3,
      color: 'text',
      bg: 'muted',
      overflow: 'auto',
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 1,
    },
    inlineCode: {
      fontFamily: 'monospace',
      color: 'blueDark',
    },
    table: {
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      border: 'thick',
      borderRadius: 'radius3',
      borderBottomWidth: '1px',
      p: 2,
    },
    td: {
      border: 'thick',
      borderRadius: 'radius1',
      p: 2,
    },
    hr: {
      border: 0,
      borderBottom: 'thin',
    },
    img: {
      maxWidth: '100%',
    },
  },
});
