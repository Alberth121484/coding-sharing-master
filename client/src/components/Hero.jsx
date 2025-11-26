/**
 * Hero section with title and decorative elements
 * Responsive: Stars hidden on mobile, avatars hidden below md
 */
function Hero() {
  return (
    <section className="relative text-center py-4 sm:py-6 md:py-8 px-4">
      {/* Decorative stars - hidden on very small screens */}
      <Star className="hidden sm:block absolute top-0 left-[5%] md:left-[10%] text-yellow-400 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
      <Star className="hidden sm:block absolute top-2 md:top-4 right-[10%] md:right-[15%] text-purple-400 w-3 h-3 md:w-4 md:h-4" />
      <Star className="hidden sm:block absolute bottom-0 left-[3%] md:left-[5%] text-blue-400 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
      <Star className="hidden sm:block absolute bottom-2 md:bottom-4 right-[8%] md:right-[10%] text-green-400 w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
      
      {/* Decorative avatars - hidden on mobile and tablet */}
      <div className="hidden lg:block absolute top-1/2 left-[5%] xl:left-[8%] transform -translate-y-1/2">
        <div className="w-12 h-12 xl:w-16 xl:h-16 rounded-full bg-gradient-to-br from-cyan-300 to-cyan-500 flex items-center justify-center shadow-lg">
          <span className="text-2xl xl:text-3xl">🧑‍💻</span>
        </div>
      </div>
      <div className="hidden lg:block absolute top-1/2 right-[5%] xl:right-[8%] transform -translate-y-1/2">
        <div className="w-12 h-12 xl:w-16 xl:h-16 rounded-full bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center shadow-lg">
          <span className="text-2xl xl:text-3xl">👩‍💻</span>
        </div>
      </div>

      {/* Title - responsive font sizes */}
      <h1 className="text-2xl sm:text-heading-sm md:text-heading-lg text-notecode-dark mb-1">
        Create & Share
      </h1>
      <h2 className="text-heading-sm sm:text-heading-lg md:text-[2.5rem] font-semibold text-notecode-dark">
        Your Code easily
      </h2>
    </section>
  );
}

/**
 * Star decorative component
 */
function Star({ className }) {
  return (
    <svg 
      className={className}
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
    </svg>
  );
}

export default Hero;
