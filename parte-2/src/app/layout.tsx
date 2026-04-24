import type { Metadata } from "next";
import { Orbitron, Space_Grotesk } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
	subsets: ["latin"],
	variable: "--font-display",
	display: "swap",
	weight: ["400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	variable: "--font-body",
	display: "swap",
	weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Python AI Hero — Aprenda Python com IA",
	description:
		"O curso mais prático do Brasil para quem quer dominar Python e Inteligência Artificial. +40 horas de conteúdo, projetos reais desde o módulo 1.",
	keywords: ["python", "inteligência artificial", "IA", "programação", "curso", "tecnologia"],
	openGraph: {
		title: "Python AI Hero — Aprenda Python com IA",
		description:
			"O curso mais prático do Brasil. +40 horas, projetos reais e +20.000 alunos ativos.",
		type: "website",
	},
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="pt-BR" className={`${orbitron.variable} ${spaceGrotesk.variable}`}>
			<body className="antialiased">{children}</body>
		</html>
	);
}
