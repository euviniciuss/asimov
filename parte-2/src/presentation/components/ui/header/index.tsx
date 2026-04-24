import { Button } from "@/presentation/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { CustomLink } from "./components/custom-link";

export function Header() {
	return (
		<nav className="fixed top-0 w-full border-b border-white/10 z-50 bg-[#0a0a0c]/80 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]">
			<div className="flex justify-between items-center w-full h-20 mx-auto max-w-360 px-8 lg:px-28">
				<Link href="/">
					<div className="relative w-40 h-15">
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
						className="font-body uppercase text-[10px] tracking-widest"
					>
						Matricule-se
					</Button>
				</div>
			</div>
		</nav>
	);
}
