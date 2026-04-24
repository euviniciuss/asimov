import type React from "react";
import type { TFeatureCardProps } from "../types";

export const FeatureCard: React.FC<TFeatureCardProps> = ({
	icon,
	title,
	subtitle,
	iconColorClass = "text-primary",
}) => {
	return (
		<div className="glass-card p-6 rounded-2xl flex items-start gap-4">
			<div className={iconColorClass}>{icon}</div>
			<div>
				<p className="font-body-md font-bold text-on-surface">{title}</p>
				<p className="font-caption text-on-surface-variant text-sm">{subtitle}</p>
			</div>
		</div>
	);
};
