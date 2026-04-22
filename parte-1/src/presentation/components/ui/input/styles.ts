import { cva } from 'class-variance-authority';

export const inputStyles = cva(
  'flex h-12 w-full rounded-xl border border-dark/20 bg-white px-4 text-p-mobile md:text-p text-dark placeholder:text-dark/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark/30 disabled:cursor-not-allowed disabled:opacity-50',
);
