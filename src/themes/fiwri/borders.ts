import { ThemeUICSSObject } from 'theme-ui';

export const defaultBorderStyles: ThemeUICSSObject = {
  border: 'thick',
  color: 'text',
  borderRadius: 'sketchy0',
};

export const borders = {
  borders: {
    thick: '2px solid var(--theme-ui-colors-text, black)',
    thin: '1px solid var(--theme-ui-colors-text, black)',
  },
  radii: {
    sketchy0: '225px 25px 225px / 25px 225px',
    sketchy1: '15px 255px 15px / 225px 15px',
    sketchy2: '10px 125px 20px / 205px 25px',
    sketchy3: '225px 15px 15px / 15px 225px',
    sketchy4: '80px 15px 105px / 25px 250px',
    circle: '200px 185px 160px / 195px 160px',
  },
};
