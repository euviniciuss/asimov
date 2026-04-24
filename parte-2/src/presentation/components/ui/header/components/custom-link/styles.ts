import { cva } from "class-variance-authority";

export const customLinkVariants = cva(
	"font-body uppercase tracking-[0.2em] text-[10px] font-bold transition-colors",
	{
		variants: {
			variant: {
				default: "text-slate-400 hover:text-white",
				active: "text-white border-b-2 border-secondary-fixed-dim pb-1",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);
