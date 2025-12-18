import React from 'react';
import { Mouse } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1935&auto=format&fit=crop')`,
        }}
      >
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/90 via-[#0a1628]/80 to-[#0a1628]/95" />
        {/* Blue tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#041225] via-transparent to-[#0a1a35]/60" />
      </div>

      {/* Navigation Header */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6">
        {/* Logo */}
        <div className="border-2 border-white px-4 py-2 rounded-lg">
          <span className="text-white font-bold text-xl tracking-wider">ADX</span>
        </div>
        
        {/* Navigation Links */}
        <nav className="flex items-center gap-10">
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
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-8">
        {/* Brand Name - Script Font */}
        <h1 
          className="text-white text-8xl md:text-9xl mb-2"
          style={{ fontFamily: "'Pinyon Script', cursive" }}
        >
          Anahata
        </h1>
        
        {/* Design X - Italic */}
        <p 
          className="text-white text-2xl md:text-3xl italic mb-8 tracking-wide"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Design X
        </p>
        
        {/* Tagline */}
        <h2 className="text-cyan-400 text-3xl md:text-4xl font-bold tracking-[0.3em] uppercase mb-16">
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
    </div>
  );
};

export default HomePage;
