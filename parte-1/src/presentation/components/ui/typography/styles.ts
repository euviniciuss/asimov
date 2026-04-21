import { cva } from "class-variance-authority";

export const typographyVariantStyles = cva("", {
  variants: {
    variant: {
      h1: "text-h1",
      "h1-mobile": "text-h1-mobile",
      h2: "text-h2",
      "h2-mobile": "text-h2-mobile",
      h3: "text-h3",
      "h3-mobile": "text-h3-mobile",
      h4: "text-h4",
      "h4-mobile": "text-h4-mobile",
      p: "text-p",
      "p-mobile": "text-p-mobile",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

export const typographyColorStyles = cva("", {
  variants: {
    color: {
      dark: "text-dark",
      gray: "text-gray",
      green: "text-green",
    },
  },
  defaultVariants: {
    color: "dark",
  },
});
