import { cva } from 'class-variance-authority';

export const iconContainerStyles = cva(
  'flex items-center justify-center rounded-full size-[41px] transition-all',
  {
    variants: {
      background: {
        dark: 'bg-black',
        light: 'bg-white',
        green: 'bg-green',
        transparent: 'bg-transparent',
      },
    },
    defaultVariants: {
      background: 'transparent',
    },
  },
);
