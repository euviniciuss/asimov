export const styles = {
	section: "min-h-screen flex items-start justify-center py-24 mx-auto relative max-w-full",
	leftAsset:
		"hidden lg:block absolute left-[-80px] top-1/4 w-[480px] h-[480px] floating opacity-90 z-10",
	leftAssetContainer: "w-full h-full flex items-center justify-center transform -rotate-12",
	leftAssetImage: "w-full h-auto drop-shadow-[0_0_50px_rgba(55,113,163,0.4)]",
	contentCanvas: "text-center max-w-4xl z-20 mt-[120px]",
	h1: "font-h1 text-[48px] text-white mb-8 leading-tight font-extrabold drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]",
	p: "font-body-lg text-on-surface-variant mb-12 max-w-2xl mx-auto leading-relaxed text-2xl font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]",
	buttonsWrapper: "flex flex-col sm:flex-row items-center justify-center gap-6 mb-16",
	primaryButton:
		"w-full sm:w-auto px-10 py-5 bg-[#3771a3] text-white rounded-lg font-h3 text-body-md font-bold shadow-[0_0_30px_rgba(55,113,163,0.4)] hover:shadow-[0_0_50px_rgba(55,113,163,0.6)] hover:scale-105 transform hover:-translate-y-1 transition-all duration-300",
	secondaryButton:
		"w-full sm:w-auto px-10 py-5 glass-card border border-white/10 text-white rounded-lg font-h3 text-body-md font-bold hover:bg-white/10 transition-all duration-300",
	featuresBento: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left",
	rightAsset:
		"hidden lg:block absolute right-[-60px] bottom-1/4 w-[320px] h-[320px] floating opacity-80 z-10",
	rightAssetContainer: "w-full h-full flex items-center justify-center transform rotate-12",
	rightAssetImage: "w-full h-auto drop-shadow-[0_0_30px_rgba(255,207,62,0.3)]",
};
