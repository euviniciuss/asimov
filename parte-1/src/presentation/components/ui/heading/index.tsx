import { cn } from "@/lib/utils";

import { headingVariants } from "./styles";
import type { IHeadingProps } from "./types";

export function Heading({
  className,
  variant = "green",
  size = "h2",
  children,
  ...props
}: IHeadingProps) {
  return (
    <span className={cn(headingVariants({ variant, size }), className)} {...props}>
      {children}
    </span>
  );
}
