import { defaultBorderStyles } from './borders';

export const alerts = {
  danger: {
    ...defaultBorderStyles,
    borderColor: 'primary',
    backgroundColor: 'primaryLight',
  },
  info: {
    ...defaultBorderStyles,
    borderColor: 'blueDark',
    backgroundColor: 'blue',
  },
  warning: {
    ...defaultBorderStyles,
    borderColor: 'yellowDark',
    backgroundColor: 'yellow',
  },
  success: {
    ...defaultBorderStyles,
    borderColor: 'greenDark',
    backgroundColor: 'green',
  },
};
