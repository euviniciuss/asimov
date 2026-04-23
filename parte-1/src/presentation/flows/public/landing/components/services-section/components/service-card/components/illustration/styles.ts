import { cva } from 'class-variance-authority';

export const illustrationStyles = cva('w-[210px] h-[170px] flex-shrink-0', {
  variants: {
    size: {
      default: 'w-[210px] h-[170px]',
      small: 'w-[160px] h-[130px]',
      large: 'w-[260px] h-[210px]',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});
