import type React from "react";
import { Header } from "@/presentation/components/ui/header";
import { HeroSection } from "./components/hero-section";

export const LandingPage: React.FC = () => {
	return (
		<div className="bg-background text-on-background font-body overflow-x-hidden min-h-[1020px] relative z-0">
			{/* Background Layers */}
			<div className="fixed inset-0 pointer-events-none -z-10">
				{/* Grid Pattern */}
				<div className="absolute inset-0 bg-grid opacity-50" />
				{/* Large Glowing Orbs */}
				<div className="hero-glow-blue absolute top-1/4 -left-1/4 w-[1200px] h-[1200px] blur-[100px]" />
				<div className="hero-glow-yellow absolute bottom-1/4 -right-1/4 w-[1000px] h-[1000px] blur-[80px]" />
				{/* Particles/Dots */}
				<div
					className="float-particle w-1 h-1 top-[80%] left-[10%] opacity-20 blur-[1px] absolute bg-white rounded-full pointer-events-none"
					style={{ animationDelay: "0s" }}
				/>
				<div
					className="float-particle w-2 h-2 top-[60%] left-[80%] opacity-10 blur-[2px] absolute bg-white rounded-full pointer-events-none"
					style={{ animationDelay: "2s" }}
				/>
				<div
					className="float-particle w-1.5 h-1.5 top-[90%] left-[40%] opacity-15 blur-[1px] absolute bg-white rounded-full pointer-events-none"
					style={{ animationDelay: "5s" }}
				/>
				<div
					className="float-particle w-1 h-1 top-[30%] left-[70%] opacity-10 absolute bg-white rounded-full pointer-events-none"
					style={{ animationDelay: "7s" }}
				/>
				<div
					className="float-particle w-1.5 h-1.5 top-[50%] left-[15%] opacity-25 blur-[1px] absolute bg-white rounded-full pointer-events-none"
					style={{ animationDelay: "4s" }}
				/>
			</div>

			<Header />

			<main className="relative pt-20 max-w-[1440px] mx-auto min-h-[940px]">
				<HeroSection />
			</main>
		</div>
	);
};
