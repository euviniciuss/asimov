import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
	"cursor-pointer inline-flex items-center justify-center rounded-md font-h3 text-base font-bold transition-all duration-300",
	{
		variants: {
			variant: {
				primary:
					"bg-gradient-to-r from-[#3771a3] to-[#256293] text-white shadow-[0_0_30px_rgba(55,113,163,0.4)] hover:shadow-[0_0_50px_rgba(55,113,163,0.6)] hover:scale-105 hover:-translate-y-1",
				secondary:
					"bg-white/[0.03] border border-white/20 backdrop-blur-md text-white hover:bg-white/[0.06] hover:scale-105",
			},
			size: {
				sm: "px-8 py-4 text-sm",
				md: "px-10 py-5",
				lg: "px-12 py-6 text-lg",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "md",
		},
	},
);

export function buttonStyles({ className }: { className?: string }) {
	return cn(buttonVariants({ className }));
}
