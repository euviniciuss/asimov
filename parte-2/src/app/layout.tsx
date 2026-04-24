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

const siteUrl = "https://asimov.com.br";

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: "Asimov | Aprenda Python do zero e construa projetos reais com IA",
		template: "%s | Asimov",
	},
	description:
		"O curso mais prático do Brasil para quem quer entrar em tecnologia sem enrolação. +40 horas de conteúdo, projetos reais com IA.",
	applicationName: "Asimov",
	generator: "Next.js",
	referrer: "origin-when-cross-origin",
	keywords: [
		"python",
		"IA",
		"programação",
		"curso",
		"tecnologia",
		"Asimov",
		"inteligência artificial",
	],
	authors: [{ name: "Asimov", url: siteUrl }],
	creator: "Asimov",
	publisher: "Asimov",
	alternates: {
		canonical: siteUrl,
	},
	openGraph: {
		title: "Asimov | Aprenda Python do zero e construa projetos reais com IA",
		description:
			"O curso mais prático do Brasil para quem quer entrar em tecnologia sem enrolação. +40 horas de conteúdo, projetos reais com IA.",
		url: siteUrl,
		siteName: "Asimov",
		locale: "pt_BR",
		type: "website",
		images: [
			{
				url: "https://hub.asimov.academy/wp-content/uploads/2024/07/screenshot-1.png",
				width: 1200,
				height: 630,
				alt: "Asimov - Curso de Python",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Asimov | Aprenda Python do zero e construa projetos reais com IA",
		description:
			"O curso mais prático do Brasil para quem quer entrar em tecnologia sem enrolação. +40 horas de conteúdo.",
		images: ["https://hub.asimov.academy/wp-content/uploads/2024/07/screenshot-1.png"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
			"max-video-preview": -1,
		},
	},
	icons: {
		icon: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
	category: "education",
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
