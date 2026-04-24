import type { ReactNode } from "react";

export type TVariant = "default" | "active";

export interface ICustomLinkProps {
	href: string;
	children: ReactNode;
	variant?: TVariant;
	className?: string;
}
