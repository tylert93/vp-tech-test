import BaseUnit from './baseUnit';
import breakpoints from './breakpoints';
import colors from './colors';
import spacing from './spacing';
import typography from './typography';
import { fontFamily, fontWeight } from './font';

const theme = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/App.tsx',
    '../../node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    '../../node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  mode: 'jit',
  theme: {
    screens: breakpoints,
    typography,
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '5px',
      '6': '6px',
      '8': '8px',
    },
    borderRadius: {
      none: '0',
      DEFAULT: `${BaseUnit * 0.5}px`,
      md: `${BaseUnit}px`,
      lg: `${BaseUnit * 1.5}px`,
      xl: `${BaseUnit * 2}px`,
      full: '9999px',
      '50%': '50%',
    },
    fontFamily: fontFamily,
    fontWeight: fontWeight,
    transitionDuration: {
      200: '200ms',
      400: '400ms',
      600: '600ms',
      800: '800ms',
      1000: '1000ms',
      1500: '1500ms',
      2000: '2000ms',
    },
    extend: {
      colors,
      minHeight: {
        'fit-content': 'fit-content',
        ...spacing,
      },
      maxHeight: {
        'fit-content': '100%',
      },
      width: {
        '12/12': '100%',
      },
      maxWidth: {
        '25%': '25%',
        '50%': '50%',
        '75%': '75%',
      },
      transitionProperty: {
        height: 'max-height',
        position: 'left, right, top, bottom',
        visibility: 'visibility',
      },
      boxShadow: {
        'elevation-1': '0px 4px 8px rgb(0 0 0 / 12%)',
        'elevation-2': '0px 4px 16px rgb(0 0 0 / 16%)',
        'elevation-3': '0px 4px 24px rgb(0 0 0 / 24%)',
        'elevation-4': '0px 4px 32px rgb(0 0 0 / 32%)',
      },
    },
    lineClamp: {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
    },
  },
  variants: {
    extend: {
      textColour: ['disabled'],
      borderWidth: ['disabled'],
      borderColor: ['disabled'],
      cursor: ['hover', 'active'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default theme;
