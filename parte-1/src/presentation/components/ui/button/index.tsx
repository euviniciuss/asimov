import { cn } from "@/lib/utils";

import { buttonVariants } from "./styles";
import type { IButtonProps } from "./types";

export function Button({
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: IButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} type={type} {...props} />
  );
}
