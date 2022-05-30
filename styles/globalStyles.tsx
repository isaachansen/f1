import { globalCss } from './stitches';

export const globalStyles = globalCss({
  'html, body, #__next': {
    padding: '0',
    margin: '0',
    fontFamily: "'Nunito Sans', -apple-system, sans-serif",
    fontSize: '16px',
    boxSizing: 'border-box',
    height: '100%',
  },

  a: {
    color: 'inherit',
    textDecoration: 'none',
  },

  '*, *:before, *:after': {
    boxSizing: 'inherit',
  },
});
