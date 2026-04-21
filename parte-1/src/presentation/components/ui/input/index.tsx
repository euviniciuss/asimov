import { cn } from "@/lib/utils";

import { inputStyles } from "./styles";
import type { IInputProps } from "./types";

export function Input({ className, type = "text", ...props }: IInputProps) {
  return <input className={cn(inputStyles(), className)} type={type} {...props} />;
}
