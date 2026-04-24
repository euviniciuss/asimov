import type { ReactNode } from "react";

export type TVariant = "primary" | "secondary";
export type TSize = "sm" | "md" | "lg";

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: TVariant;
	size?: TSize;
	children: ReactNode;
}
