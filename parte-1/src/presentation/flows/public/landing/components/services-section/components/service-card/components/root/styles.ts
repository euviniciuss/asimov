import { cva } from 'class-variance-authority';

export const rootStyles = cva(
  'flex items-center justify-between rounded-[45px] border border-dark p-[50px] w-full h-[310px] shadow-[0px_5px_0px_0px_rgba(25,26,35,1)]',
  {
    variants: {
      background: {
        light: 'bg-gray',
        dark: 'bg-dark',
        green: 'bg-green',
      },
    },
    defaultVariants: {
      background: 'light',
    },
  },
);
