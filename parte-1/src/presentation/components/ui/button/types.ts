import type { VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

import type { buttonVariants } from "./styles";

export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}
