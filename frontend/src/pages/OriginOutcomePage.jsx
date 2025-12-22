import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const fontFamily = "'Helvetica Neue', Helvetica, Arial, sans-serif";

const OriginOutcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen relative" style={{ fontFamily }}>
      {/* Full Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1932&auto=format&fit=crop')`,
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Fixed Sign Up Button - Bottom Left */}
      <div className="fixed bottom-12 left-8 z-50">
        <button className="bg-white text-black font-bold px-10 py-2.5 text-sm tracking-wider hover:bg-gray-100 transition-colors duration-300 min-w-[160px]">
          SIGN UP
        </button>
        <p className="text-white text-xs mt-1.5 tracking-widest text-center">FOR EARLY ACCESS</p>
      </div>

      {/* Back Button - Bottom Right */}
      <div className="fixed bottom-12 right-8 z-50">
        <button 
          onClick={() => navigate('/adx-promise')}
          className="bg-gray-500 text-white font-bold px-10 py-2.5 text-sm tracking-wider hover:bg-gray-600 transition-colors duration-300"
        >
          BACK
        </button>
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
          <Link to="/letter" className="text-white text-sm tracking-widest font-medium hover:text-cyan-400 transition-colors duration-300">
            LETTER FROM US TO YOU
          </Link>
          <Link to="/adx-promise" className="text-cyan-400 text-sm tracking-widest font-medium">
            ADX PROMISE
          </Link>
          <a href="#" className="text-white text-sm tracking-widest font-medium hover:text-cyan-400 transition-colors duration-300">
            CONTACT US
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex min-h-[calc(100vh-150px)] px-8 py-8">
        {/* Left Sidebar - Numbered Steps */}
        <div className="flex flex-col items-start mr-16 ml-8">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <span className="text-white text-sm font-bold">01</span>
              <span className="text-white text-xs tracking-widest uppercase">Sourcing</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-white/40 text-sm font-bold">02</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-white/40 text-sm font-bold">03</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-white/40 text-sm font-bold">04</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-white/40 text-sm font-bold">05</span>
            </div>
          </div>
          {/* Vertical Line */}
          <div className="absolute left-16 top-32 w-px h-48 bg-white/30"></div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col justify-center max-w-3xl">
          <h1 
            className="text-white text-3xl md:text-4xl font-bold uppercase tracking-wide mb-8"
            style={{ fontFamily }}
          >
            Nothing Wasted, Everything Respected.
          </h1>
          
          <div className="space-y-6">
            <p 
              className="text-white/90 leading-relaxed"
              style={{ fontFamily, fontSize: '18px' }}
            >
              We source hides ethically from verified suppliers where animal welfare and land practices meet responsible standards.
            </p>
            
            <p 
              className="text-white/90 leading-relaxed"
              style={{ fontFamily, fontSize: '18px' }}
            >
              We use hides that are a natural by-product of the food industry — not farmed for fashion. Every year, hundreds of millions of hides risk ending up in landfills, releasing methane — a greenhouse gas 25 times more potent than CO₂. By transforming them into long-lasting leather, we give new purpose to what already exists.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full py-6">
        <p className="text-white text-center text-sm tracking-wide">
          Copyright © 2025 Anahata Design X, All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default OriginOutcomePage;
