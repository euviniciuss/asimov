import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "w-fit inline-flex items-center justify-center rounded-[14px] border text-p-mobile md:text-p transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark/40 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "border-dark bg-dark text-white hover:bg-dark/90",
        secondary: "border-dark bg-transparent text-dark hover:bg-dark/10",
        tertiary: "border-green bg-green text-dark hover:bg-green/90",
      },
      size: {
        sm: "h-10 py-5 px-4",
        md: "py-5 px-[35px]",
        lg: "h-14 py-5 px-8",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);
