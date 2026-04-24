import Image from "next/image";
import type React from "react";
import { Button } from "@/presentation/components/ui/Button";
import { FeatureCard } from "../feature-card";
import { styles } from "./styles";

export const HeroSection: React.FC = () => {
	return (
		<section className={styles.section}>
			{/* Left 3D Asset */}
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

			{/* Content Canvas */}
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

				{/* Features Bento */}
				<div className={styles.featuresBento}>
					<FeatureCard
						icon={<Image src="/icons/clock.svg" alt="Clock" width={24} height={24} />}
						title="+40 horas"
						subtitle="Conteúdo direto ao ponto"
						iconColorClass="text-primary"
					/>
					<FeatureCard
						icon={<Image src="/icons/brain.svg" alt="Brain" width={24} height={24} />}
						title="Python + IA"
						subtitle="Projetos desde o módulo 1"
						iconColorClass="text-secondary"
					/>
					<FeatureCard
						icon={<Image src="/icons/users.svg" alt="Users" width={24} height={24} />}
						title="Comunidade"
						subtitle="+20.000 alunos ativos"
						iconColorClass="text-primary"
					/>
					<FeatureCard
						icon={<Image src="/icons/verified.svg" alt="Verified" width={24} height={24} />}
						title="Certificado"
						subtitle="Reconhecido pelo mercado"
						iconColorClass="text-secondary"
					/>
				</div>
			</div>

			{/* Right 3D Asset */}
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
};
