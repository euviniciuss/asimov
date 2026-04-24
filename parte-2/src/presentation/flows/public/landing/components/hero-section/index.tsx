import { Button } from "../../../../../components/ui/button";
import Image from "next/image";
import { FeatureCard } from "../feature-card";
import { FEATURE_CARD_CONTENT } from "./constants";
import { styles } from "./styles";

export function HeroSection() {
	return (
		<section className={styles.section}>
			<div className={styles.leftAsset}>
				<div className={styles.leftAssetContainer}>
					<Image
						src="/illustrations/python-3d.png"
						alt="3D Python Logo"
						width={480}
						height={480}
						className={styles.leftAssetImage}
						priority
					/>
				</div>
			</div>

			<div className={styles.contentCanvas}>
				<h1 className={styles.h1}>
					Aprenda Python do zero e <br />
					construa projetos reais com IA
				</h1>
				<p className={styles.p}>
					O curso mais prático do Brasil para quem quer entrar em tecnologia sem enrolação
				</p>

				<div className={styles.buttonsWrapper}>
					<Button variant="primary">Quero começar agora</Button>
					<Button variant="secondary">Ver o que eu vou aprender</Button>
				</div>

				<div className={styles.featuresBento}>
					{FEATURE_CARD_CONTENT.map((feature) => (
						<FeatureCard
							key={feature.title}
							icon={<Image src={feature.icon} alt={feature.alt} width={24} height={24} />}
							title={feature.title}
							subtitle={feature.subtitle}
							iconColorClass={feature.iconColorClass}
						/>
					))}
				</div>
			</div>

			<div className={styles.rightAsset}>
				<div className={styles.rightAssetContainer}>
					<Image
						src="/illustrations/python-3d.png"
						alt="3D Python Logo"
						width={320}
						height={320}
						className={styles.rightAssetImage}
					/>
				</div>
			</div>
		</section>
	);
}
