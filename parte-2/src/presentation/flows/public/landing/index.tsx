import type React from "react";
import { Header } from "@/presentation/components/ui/header";
import { HeroSection } from "./components/hero-section";
import { Particles } from "./components/particles";
import { ShadowsGlowingOrbs } from "./components/shadows-glowing-orbs";
import { Grid } from "./components/grid";

export const LandingPage = () => {
	return (
		<div className="bg-background text-on-background font-body overflow-x-hidden min-h-255 relative z-0">
			<div className="fixed inset-0 pointer-events-none -z-10">
				<Grid />
				<ShadowsGlowingOrbs />
				<Particles />
			</div>

			<Header />

			<main className="relative pt-10 max-w-360 mx-auto min-h-235">
				<HeroSection />
			</main>
		</div>
	);
};
