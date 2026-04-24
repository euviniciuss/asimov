import Link from "next/link";
import type React from "react";

export const TopNavBar: React.FC = () => {
	return (
		<nav className="fixed top-0 w-full border-b border-white/10 z-50 bg-[#0a0a0c]/80 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]">
			<div className="flex justify-between items-center w-full h-20 mx-auto max-w-[1440px] px-8 lg:px-[112px]">
				<div className="flex items-center">
					{/* Asimov Logo */}
					<span className="font-h1 text-2xl font-black tracking-tighter text-white">ASIMOV</span>
				</div>
				<div className="flex items-center gap-12">
					<div className="hidden md:flex items-center gap-8">
						<Link
							className="font-body uppercase tracking-[0.2em] text-[10px] text-white font-bold border-b-2 border-secondary-fixed-dim pb-1"
							href="#"
						>
							Início
						</Link>
						<Link
							className="font-body uppercase tracking-[0.2em] text-[10px] text-slate-400 hover:text-white transition-colors font-bold"
							href="#"
						>
							Cursos
						</Link>
						<Link
							className="font-body uppercase tracking-[0.2em] text-[10px] text-slate-400 hover:text-white transition-colors font-bold"
							href="#"
						>
							Depoimentos
						</Link>
						<Link
							className="font-body uppercase tracking-[0.2em] text-[10px] text-slate-400 hover:text-white transition-colors font-bold"
							href="#"
						>
							Sobre
						</Link>
					</div>
					<button
						className="bg-primary-container text-on-primary-container px-6 rounded-lg font-body uppercase text-[10px] font-bold active:scale-95 transform transition-transform hover:bg-white/5 transition-all duration-300"
						style={{ height: "38px", letterSpacing: "0.1em" }}
						type="button"
					>
						Matricule-se
					</button>
				</div>
			</div>
		</nav>
	);
};
