import { ThemeStyles } from 'theme-ui';

export const styles: ThemeStyles = {
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
    borderRadius: 'sketchy3',
    borderBottomWidth: '1px',
    p: 2,
  },
  td: {
    border: 'thick',
    borderRadius: 'sketchy1',
    p: 2,
  },
  hr: {
    border: 0,
    borderBottom: 'thin',
  },
  img: {
    maxWidth: '100%',
  },
};
