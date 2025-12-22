import React from 'react';
import { Link } from 'react-router-dom';

const fontFamily = "'Helvetica Neue', Helvetica, Arial, sans-serif";

const LetterPage = () => {
  return (
    <div className="w-full min-h-screen relative" style={{ fontFamily }}>
      {/* Full Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://customer-assets.emergentagent.com/job_blank-home/artifacts/9fen9fay_bg%20image%20p2-1.png')`,
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30" />
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
          <Link to="/adx-promise" className="text-white text-sm tracking-widest font-medium hover:text-cyan-400 transition-colors duration-300">
            ADX PROMISE
          </Link>
          <a href="#" className="text-white text-sm tracking-widest font-medium hover:text-cyan-400 transition-colors duration-300">
            CONTACT US
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col justify-center min-h-screen px-8 py-16">
        <div className="max-w-2xl ml-auto mr-16">
          <h1 
            className="text-[#0891b2] mb-8 font-bold uppercase tracking-wide"
            style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: '22px' }}
          >
            Find Your Madness
          </h1>
          
          <div 
            className="text-white/90 leading-relaxed space-y-4 text-left"
            style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontSize: '18px' }}
          >
            <p>
              Our father taped these words to our bathroom mirror when we were children. We grew up looking at them every single day for the next twenty-five years of our lives. At first, it simply meant chase what you love. But as we grew older, we understood that Find your madness means finding what makes you you — and that it can then express itself in many forms.
            </p>
            <p>
              Founded by Urvi Kalra, ADX is a design house — the fruit of our madness. It is rooted in our father Vikas Kalra's legacy of consummate craftsmanship; he spent over three decades manufacturing leather & suede garments for houses such as Versace, Zadig & Voltaire, Massimo Dutti, and Mango. It is the medium through which our madness takes form — expressed through excellence in every article we meticulously design, curate, and craft for you.
            </p>
            <p>
              For others, it may express itself in a different pursuit — in creativity, in relationships, or simply in a more intentional way of living. We believe Madness is the key. Excellence — in any endeavor — is the conduit. A fully and intensely lived life is the result.
            </p>
            <p>
              Anahata means unstruck sound — a paradox, a resonance already alive in the universe. Madness carries that same paradox — it may seem chaotic, but when tuned into, it makes your existence more graceful and the journey more enjoyable.
            </p>
            <p>
              ADX exists to nurture the journey of those who have found — or are still finding — their madness, and to inspire you to help others find theirs.
            </p>
            <p className="text-[#0891b2] font-semibold mt-6">
              Find your madness. Welcome to Anahata Design X.
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
