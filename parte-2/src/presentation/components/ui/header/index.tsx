import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { Button } from "@/presentation/components/ui/Button";
import { CustomLink } from "./components/CustomLink";

export const Header: React.FC = () => {
	return (
		<nav className="fixed top-0 w-full border-b border-white/10 z-50 bg-[#0a0a0c]/80 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]">
			<div className="flex justify-between items-center w-full h-20 mx-auto max-w-[1440px] px-8 lg:px-[112px]">
				<Link href="/">
					<div className="relative w-[120px] h-[40px]">
						<Image src="/assets/logo.svg" alt="Asimov" fill className="object-contain" />
					</div>
				</Link>
				<div className="flex items-center gap-12">
					<div className="hidden md:flex items-center gap-8">
						<CustomLink href="#" variant="active">
							Início
						</CustomLink>
						<CustomLink href="#">Cursos</CustomLink>
						<CustomLink href="#">Depoimentos</CustomLink>
						<CustomLink href="#">Sobre</CustomLink>
					</div>
					<Button
						variant="primary"
						size="sm"
						className="font-body uppercase text-[10px] tracking-[0.1em]"
					>
						Matricule-se
					</Button>
				</div>
			</div>
		</nav>
	);
};
