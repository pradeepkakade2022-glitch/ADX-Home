import React from 'react';
import { Link } from 'react-router-dom';

const fontFamily = "'Helvetica Neue', Helvetica, Arial, sans-serif";

const AdxPromisePage = () => {
  return (
    <div className="w-full min-h-screen bg-black" style={{ fontFamily }}>
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
      <main className="relative z-10 flex flex-col items-center justify-start min-h-[calc(100vh-100px)] px-8 pt-16">
        <h1 
          className="text-white text-2xl md:text-3xl font-bold uppercase tracking-wide text-center"
          style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
        >
          We don't outsource excellence - we build it.
        </h1>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full bg-black py-6 border-t border-white/10">
        <p className="text-white text-center text-sm tracking-wide">
          Copyright © 2025 Anahata Design X, All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default AdxPromisePage;
