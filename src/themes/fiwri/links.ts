import { ThemeUIStyleObject } from 'theme-ui';

export const links: Record<string, ThemeUIStyleObject> = {
  nav: {
    borderRadius: 'sketchy1',
    textDecoration: 'none',
    px: 2,
    py: 1,
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
    '&:hover': {
      bg: 'primaryLight',
    },
  },
};
