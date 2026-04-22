import { cva } from 'class-variance-authority';

export const arrowLinkStyles = cva(
  'inline-flex items-center gap-[15px] font-[family-name:var(--font-space-grotesk)] text-[1.25rem] leading-[1.4]',
  {
    variants: {
      background: {
        dark: 'bg-dark text-white',
        green: 'bg-green text-dark',
        transparent: 'bg-transparent text-dark',
      },
    },
    defaultVariants: {
      background: 'transparent',
    },
  },
);

export const arrowLinkIconStyles = cva(
  'inline-flex items-center justify-center size-5',
  {
    variants: {
      variant: {
        dark: 'bg-dark',
        green: 'bg-green',
        none: '',
      },
    },
    defaultVariants: {
      variant: 'none',
    },
  },
);
