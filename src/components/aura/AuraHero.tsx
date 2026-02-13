const AuraHero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{ background: "linear-gradient(180deg, hsl(220 20% 18%) 0%, hsl(220 22% 16%) 40%, hsl(220 25% 14%) 70%, hsl(220 25% 12%) 100%)" }}
    >
      {/* Spinning orbital ring with 4 cardinal dots */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] border border-white/10 rounded-full animate-spin-slow relative">
            {/* Top dot - gradient primary */}
            <div className="absolute -top-2 sm:-top-3 md:-top-4 left-1/2 transform -translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full animate-pulse gradient-primary" />
            {/* Right dot - orange */}
            <div className="absolute top-1/2 -right-2 sm:-right-3 md:-right-4 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-orange-500 rounded-full animate-pulse animation-delay-400" />
            {/* Bottom dot - purple */}
            <div className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 left-1/2 transform -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 bg-purple-500 rounded-full animate-pulse animation-delay-800" />
            {/* Left dot - green */}
            <div className="absolute top-1/2 -left-2 sm:-left-3 md:-left-4 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-green-400 rounded-full animate-pulse animation-delay-200" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="relative mb-6">
          <div className="flex flex-col items-center opacity-0 animate-fade-up animation-delay-200">
            {/* iBloov AURA badge */}
            <div className="mb-6 sm:mb-8">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-5 shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-transparent bg-clip-text gradient-rainbow">
                  iBloov AURA
                </h1>
              </div>
            </div>

            {/* Main headline */}
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-center opacity-0 animate-fade-up animation-delay-300 hover:scale-105 transition-transform duration-300">
              <span className="hidden sm:block">Explore . Experience . Empower</span>
              <span className="sm:hidden">Explore . Experience . Empower</span>
            </h1>
          </div>
        </div>

        {/* Subtitle */}
        <p className="font-display text-gray-300 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto mb-6 sm:mb-8 opacity-0 animate-fade-up animation-delay-500 text-sm sm:text-base hover:text-white transition-colors duration-300 leading-relaxed italic">
          Work, Travel, and Play — All in One Orbital Platform.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 opacity-0 animate-fade-up animation-delay-700">
          <button className="w-full sm:w-auto text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 rounded-full text-base sm:text-lg font-semibold shadow-2xl relative overflow-hidden group animate-pulse gradient-primary min-w-[200px] hover:scale-105 transition-transform">
            <span className="relative z-10">Enter Orbit</span>
            <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
          </button>
          <a
            href="#products"
            className="w-full sm:w-auto bg-white/5 backdrop-blur-sm text-white border border-white/30 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 rounded-full text-base sm:text-lg font-medium relative overflow-hidden group min-w-[200px] text-center hover:scale-105 transition-transform"
          >
            <span className="relative z-10">Explore Universe</span>
          </a>
        </div>

        {/* Additional orbital rings below */}
        <div className="mt-8 sm:mt-12 md:mt-16 opacity-0 animate-fade-up animation-delay-800">
          <div className="relative mx-auto max-w-xs sm:max-w-sm">
            <div className="absolute inset-0 -m-8 sm:-m-12 md:-m-16">
              <div className="w-full h-full border border-white/10 rounded-full animate-spin-slow" />
            </div>
            <div className="absolute inset-0 -m-12 sm:-m-18 md:-m-24">
              <div className="w-full h-full border border-white/5 rounded-full animate-reverse-spin" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuraHero;
