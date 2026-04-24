import Link from "next/link";
import { customLinkVariants } from "./styles";
import type { ICustomLinkProps } from "./types";

export function CustomLink({ href, children, variant = "default", className }: ICustomLinkProps) {
	return (
		<Link className={customLinkVariants({ variant, className })} href={href}>
			{children}
		</Link>
	);
}
