import { cva } from 'class-variance-authority';

export const textColorStyles = cva('text-xl', {
  variants: {
    variant: {
      dark: 'text-black',
      'alternative-dark': 'text-black',
      light: 'text-white',
      'alternative-light': 'text-white',
      green: 'text-black',
      'alternative-green': 'text-white',
      transparent: 'text-current',
    },
  },
  defaultVariants: {
    variant: 'transparent',
  },
});
