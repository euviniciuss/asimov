import type React from "react";
import { styles } from "./styles";
import type { IFeatureCardProps } from "./types";

export const FeatureCard: React.FC<IFeatureCardProps> = ({
	icon,
	title,
	subtitle,
	iconColorClass = "text-primary",
}) => {
	return (
		<div className={styles.card}>
			<div className={iconColorClass}>{icon}</div>
			<div className={styles.contentWrapper}>
				<p className={styles.title}>{title}</p>
				<p className={styles.subtitle}>{subtitle}</p>
			</div>
		</div>
	);
};
