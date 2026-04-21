import { cva } from "class-variance-authority";

export const headingVariants = cva(
  "inline-block w-fit font-[family-name:var(--font-space-grotesk)] font-medium leading-[1.15]",
  {
    variants: {
      variant: {
        green: "bg-green text-[#191A23] rounded-[7px] px-[7px]",
        white: "bg-white text-[#191A23] rounded-[7px] px-[7px]",
        dark: "bg-dark text-white rounded-[7px] px-[7px]",
      },
      size: {
        h1: "text-h1",
        h2: "text-h2",
        h3: "text-h3",
      },
    },
    defaultVariants: {
      variant: "green",
      size: "h2",
    },
  }
);
