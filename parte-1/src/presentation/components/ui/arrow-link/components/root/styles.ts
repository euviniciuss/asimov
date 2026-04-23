import { cva } from "class-variance-authority"

export const rootStyles = cva(
  "flex items-center gap-[15px] transition-colors group",
  {
    variants: {
      variant: {
        solid: "",
        transparent: "",
      },
      background: {
        dark: "text-dark",
        "alternative-dark": "text-dark",

        light: "text-white",
        "alternative-light": "text-white",

        green: "text-green",
        "alternative-green": "text-green",

        transparent: "text-current",
      },
    },
    compoundVariants: [
      {
        variant: "transparent",
        background: "dark",
        className: "text-black",
      },
      {
        variant: "transparent",
        background: "alternative-dark",
        className: "text-black",
      },
      {
        variant: "transparent",
        background: "light",
        className: "text-white",
      },
      {
        variant: "transparent",
        background: "alternative-light",
        className: "text-white",
      },
      {
        variant: "transparent",
        background: "green",
        className: "text-green",
      },
      {
        variant: "transparent",
        background: "alternative-green",
        className: "text-green",
      },
    ],
  }
)