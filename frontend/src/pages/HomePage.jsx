import React from 'react';

const fontFamily = "'Helvetica Neue', Helvetica, Arial, sans-serif";

const HomePage = () => {
  return (
    <div className="w-full" style={{ fontFamily }}>
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://customer-assets.emergentagent.com/job_blank-home/artifacts/byoc6d5m_New%20Project.jpg')`,
          }}
        >
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/70 via-[#0a1628]/50 to-[#0a1628]/80" />
          {/* Blue tint overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#041225]/80 via-transparent to-[#0a1a35]/40" />
        </div>

        {/* Navigation Header */}
        <header className="relative z-10 flex items-center justify-between px-8 py-6">
          {/* Empty div for spacing */}
          <div className="flex-1" />
          
          {/* Logo - Center */}
          <div className="border-2 border-white px-4 py-2 rounded-lg">
            <span className="text-white font-bold text-xl tracking-wider">ADX</span>
          </div>
          
          {/* Navigation Links - Right */}
          <nav className="flex-1 flex items-center justify-end gap-10">
            <a href="#" className="text-white text-sm tracking-widest font-medium hover:text-cyan-400 transition-colors duration-300">
              HOME
            </a>
            <a href="#" className="text-white text-sm tracking-widest font-medium hover:text-cyan-400 transition-colors duration-300">
              LETTER FROM US TO YOU
            </a>
            <a href="#" className="text-white text-sm tracking-widest font-medium hover:text-cyan-400 transition-colors duration-300">
              ADX PROMISE
            </a>
            <a href="#" className="text-white text-sm tracking-widest font-medium hover:text-cyan-400 transition-colors duration-300">
              CONTACT US
            </a>
          </nav>
        </header>

        {/* Main Content */}
        <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-180px)] px-8 -mt-28">
          {/* Logo Image */}
          <img 
            src="https://customer-assets.emergentagent.com/job_blank-home/artifacts/gbn9wxfo_logo%202.png"
            alt="Anahata Design X"
            className="max-w-5xl w-full h-auto"
          />
          
          {/* Tagline - Solitreo font */}
          <h2 
            className="text-[#0891b2] text-4xl md:text-5xl tracking-wide uppercase -mt-4"
            style={{ fontFamily: "'Solitreo', cursive" }}
          >
            FIND YOUR MADNESS
          </h2>
        </main>

        {/* Sign Up Button - Bottom Left */}
        <div className="absolute bottom-16 left-8 z-10">
          <button className="bg-white text-black font-bold px-8 py-4 text-lg tracking-wider hover:bg-gray-100 transition-colors duration-300">
            SIGN UP
          </button>
          <p className="text-white text-sm mt-2 tracking-widest">FOR EARLY ACCESS</p>
        </div>

        {/* Scroll Down Indicator - Bottom Center */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <div className="w-8 h-12 border-2 border-white rounded-full flex items-start justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
          </div>
          <span className="text-white text-xs tracking-[0.25em] uppercase">SCROLL DOWN</span>
        </div>
      </section>

      {/* Shop Section - Men's & Women's */}
      <section className="w-full">
        <div className="grid grid-cols-2">
          {/* Men's Section */}
          <div className="relative h-[100vh] overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1935&auto=format&fit=crop')`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/80 via-[#0a1628]/70 to-[#041225]/90" />
            </div>
            <div className="relative z-10 p-12 h-full flex flex-col">
              <h3 className="text-white text-lg font-bold tracking-widest mb-6">LAUNCHING 2026</h3>
              <button className="border border-white/60 text-white px-8 py-3 text-sm tracking-widest font-medium hover:bg-white hover:text-black transition-all duration-300 w-fit">
                SHOP MEN'S
              </button>
            </div>
          </div>

          {/* Women's Section */}
          <div className="relative h-[100vh] overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=1980&auto=format&fit=crop')`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/80 via-[#0a1628]/70 to-[#041225]/90" />
            </div>
            <div className="relative z-10 p-12 h-full flex flex-col">
              <h3 className="text-white text-lg font-bold tracking-widest mb-6">LAUNCHING 2026</h3>
              <button className="border border-white/60 text-white px-8 py-3 text-sm tracking-widest font-medium hover:bg-white hover:text-black transition-all duration-300 w-fit">
                SHOP WOMEN'S
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
