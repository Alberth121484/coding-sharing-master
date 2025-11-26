import Header from './Header';
import Hero from './Hero';

/**
 * Main layout component with gradient background
 * Responsive: Mobile (< 640px), Tablet (640-1024px), Desktop (> 1024px)
 */
function Layout({ children }) {
  return (
    <div className="min-h-screen relative overflow-hidden bg-notecode-white">
      {/* Top section with white background */}
      <div className="relative z-10">
        <Header />
        <Hero />
      </div>

      {/* Main content */}
      <main className="relative z-10 container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pb-8 md:pb-12">
        {children}
      </main>

      {/* Gradient background wave - responsive height */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[45%] sm:h-[40%] md:h-[35%] lg:h-[30%]"
        style={{
          background: 'linear-gradient(to bottom right, rgba(183, 135, 245, 1), rgba(116, 62, 228, 1))',
          clipPath: 'ellipse(85% 100% at 50% 100%)',
        }}
      />

      {/* Background decorative elements - hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top right decoration */}
        <div className="hidden sm:block absolute -top-10 -right-10 w-32 md:w-40 h-32 md:h-40 bg-purple-100 rounded-full opacity-50 blur-3xl" />
        {/* Bottom left decoration */}
        <div className="hidden sm:block absolute -bottom-20 -left-20 w-48 md:w-60 h-48 md:h-60 bg-purple-200 rounded-full opacity-30 blur-3xl" />
      </div>
    </div>
  );
}

export default Layout;
