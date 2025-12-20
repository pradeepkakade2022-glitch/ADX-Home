import React from 'react';
import { Link } from 'react-router-dom';

const fontFamily = "'Helvetica Neue', Helvetica, Arial, sans-serif";

const LetterPage = () => {
  return (
    <div className="w-full h-screen flex flex-col relative" style={{ fontFamily }}>
      {/* Full Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://customer-assets.emergentagent.com/job_blank-home/artifacts/dzq9llwa_2nd%20page%20full%20bg.jpg')`,
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Fixed Sign Up Button - Bottom Left */}
      <div className="fixed bottom-12 left-8 z-50">
        <button className="bg-white text-black font-bold px-10 py-2.5 text-sm tracking-wider hover:bg-gray-100 transition-colors duration-300 min-w-[160px]">
          SIGN UP
        </button>
        <p className="text-white text-xs mt-1.5 tracking-widest text-center">FOR EARLY ACCESS</p>
      </div>

      {/* Navigation Header */}
      <header className="relative z-20 flex items-center justify-between px-8 py-6">
        {/* Empty div for spacing */}
        <div className="flex-1" />
        
        {/* Logo - Center */}
        <Link to="/" className="border-2 border-white px-4 py-2 rounded-lg">
          <span className="text-white font-bold text-xl tracking-wider">ADX</span>
        </Link>
        
        {/* Navigation Links - Right */}
        <nav className="flex-1 flex items-center justify-end gap-10">
          <Link to="/" className="text-white text-sm tracking-widest font-medium hover:text-cyan-400 transition-colors duration-300">
            HOME
          </Link>
          <Link to="/letter" className="text-cyan-400 text-sm tracking-widest font-medium">
            LETTER FROM US TO YOU
          </Link>
          <a href="#" className="text-white text-sm tracking-widest font-medium hover:text-cyan-400 transition-colors duration-300">
            ADX PROMISE
          </a>
          <a href="#" className="text-white text-sm tracking-widest font-medium hover:text-cyan-400 transition-colors duration-300">
            CONTACT US
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            className="text-white text-4xl md:text-5xl mb-8"
            style={{ fontFamily: "'Solitreo', cursive" }}
          >
            Letter From Us To You
          </h1>
          
          <div className="text-white/90 text-base leading-relaxed space-y-4 text-left">
            <p>
              Dear Friend,
            </p>
            <p>
              Welcome to Anahata Design X. We are more than just a brand – we are a movement, 
              a philosophy, and a commitment to excellence in craftsmanship.
            </p>
            <p>
              Every piece we create tells a story. A story of passion, dedication, and the 
              relentless pursuit of perfection. Our leather jackets are not just garments; 
              they are statements of individuality, crafted for those who dare to be different.
            </p>
            <p>
              As we prepare for our 2026 launch, we invite you to join us on this journey. 
              Be part of a community that values craftsmanship, embraces individuality, and 
              celebrates the madness within.
            </p>
            <p className="text-[#0891b2] font-semibold mt-4">
              Find Your Madness.
            </p>
            <p className="mt-4">
              With passion, <span className="text-[#0891b2]">The Anahata Design X Team</span>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full bg-black py-6">
        <p className="text-white text-center text-sm tracking-wide">
          Copyright © 2025 Anahata Design X, All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default LetterPage;
