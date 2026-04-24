import Image from "next/image";
import type React from "react";
import { FeatureCard } from "./FeatureCard";

const ClockIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		aria-hidden="true"
	>
		<circle cx="12" cy="12" r="10" />
		<polyline points="12 6 12 12 16 14" />
	</svg>
);

const BrainIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		aria-hidden="true"
	>
		<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
		<path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
		<path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
		<path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
	</svg>
);

const UsersIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		aria-hidden="true"
	>
		<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
		<circle cx="9" cy="7" r="4" />
		<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
		<path d="M16 3.13a4 4 0 0 1 0 7.75" />
	</svg>
);

const VerifiedIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		aria-hidden="true"
	>
		<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
		<path d="m9 12 2 2 4-4" />
	</svg>
);

export const HeroSection: React.FC = () => {
	return (
		<section className="min-h-screen flex items-start justify-center py-24 mx-auto relative max-w-full">
			{/* Left 3D Asset */}
			<div className="hidden lg:block absolute left-[-80px] top-1/4 w-[480px] h-[480px] floating opacity-90 z-10">
				<div className="w-full h-full flex items-center justify-center transform -rotate-12">
					<Image
						src="/illustrations/python-3d.png"
						alt="3D Python Logo"
						width={480}
						height={480}
						className="w-full h-auto drop-shadow-[0_0_50px_rgba(55,113,163,0.4)]"
						priority
					/>
				</div>
			</div>

			{/* Content Canvas */}
			<div className="text-center max-w-4xl z-20 mt-[180px]">
				<h1 className="font-h1 text-[48px] text-white mb-8 leading-tight font-extrabold drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
					Aprenda Python do zero e <br />
					construa projetos reais com IA
				</h1>
				<p className="font-body-lg text-on-surface-variant mb-12 max-w-2xl mx-auto leading-relaxed text-2xl font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
					O curso mais prático do Brasil para quem quer entrar em tecnologia sem enrolação
				</p>

				<div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
					<button
						className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-primary-container to-[#256293] text-on-primary-container rounded-xl font-h3 text-body-md font-bold shadow-[0_0_30px_rgba(55,113,163,0.4)] hover:shadow-[0_0_50px_rgba(55,113,163,0.6)] transform hover:-translate-y-1 transition-all duration-300"
						type="button"
					>
						Quero começar agora
					</button>
					<button
						className="w-full sm:w-auto px-10 py-5 border border-white/20 glass-card text-on-surface rounded-xl font-h3 text-body-md font-bold hover:bg-white/5 transition-all duration-300"
						type="button"
					>
						Ver o que eu vou aprender
					</button>
				</div>

				{/* Features Bento */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
					<FeatureCard
						icon={<ClockIcon />}
						title="+40 horas"
						subtitle="Conteúdo direto ao ponto"
						iconColorClass="text-primary"
					/>
					<FeatureCard
						icon={<BrainIcon />}
						title="Python + IA"
						subtitle="Projetos desde o módulo 1"
						iconColorClass="text-secondary"
					/>
					<FeatureCard
						icon={<UsersIcon />}
						title="Comunidade"
						subtitle="+20.000 alunos ativos"
						iconColorClass="text-primary"
					/>
					<FeatureCard
						icon={<VerifiedIcon />}
						title="Certificado"
						subtitle="Reconhecido pelo mercado"
						iconColorClass="text-secondary"
					/>
				</div>
			</div>

			{/* Right 3D Asset */}
			<div
				className="hidden lg:block absolute right-[-60px] bottom-1/4 w-[320px] h-[320px] floating opacity-80 z-10"
				style={{ animationDelay: "-3s" }}
			>
				<div className="w-full h-full flex items-center justify-center transform rotate-12">
					<Image
						src="/illustrations/python-3d.png"
						alt="3D Python Logo"
						width={320}
						height={320}
						className="w-full h-auto drop-shadow-[0_0_30px_rgba(255,207,62,0.3)]"
					/>
				</div>
			</div>
		</section>
	);
};
