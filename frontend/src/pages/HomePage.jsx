import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fontFamily = "'Helvetica Neue', Helvetica, Arial, sans-serif";

// Carousel images - leather detail shots
const carouselImages = [
  'https://customer-assets.emergentagent.com/job_blank-home/artifacts/dy8su7v0_product%201.jpg',
  'https://customer-assets.emergentagent.com/job_blank-home/artifacts/nmp9puzt_product%202.jpg',
  'https://customer-assets.emergentagent.com/job_blank-home/artifacts/10m2texo_product%203.jpg',
  'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop',
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleSlides = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + visibleSlides >= carouselImages.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? carouselImages.length - visibleSlides : prev - 1
    );
  };

  return (
    <div className="w-full" style={{ fontFamily }}>
      {/* Fixed Sign Up Button - Bottom Left */}
      <div className="fixed bottom-12 left-8 z-50">
        <button className="bg-white text-black font-bold px-10 py-2.5 text-sm tracking-wider hover:bg-gray-100 transition-colors duration-300 min-w-[160px]">
          SIGN UP
        </button>
        <p className="text-white text-xs mt-1.5 tracking-widest text-center">FOR EARLY ACCESS</p>
      </div>

      {/* Hero Section */}
      <section className="relative h-[95vh] w-full overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-top bg-no-repeat"
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
        <header className="relative z-20 flex items-center justify-between px-8 py-6">
          {/* Empty div for spacing */}
          <div className="flex-1" />
          
          {/* Logo - Center */}
          <div className="border-2 border-white px-4 py-2 rounded-lg">
            <span className="text-white font-bold text-xl tracking-wider">ADX</span>
          </div>
          
          {/* Navigation Links - Right */}
          <nav className="flex-1 flex items-center justify-end gap-10">
            <Link to="/" className="text-white text-sm tracking-widest font-medium hover:text-cyan-400 transition-colors duration-300">
              HOME
            </Link>
            <Link to="/letter" className="text-white text-sm tracking-widest font-medium hover:text-cyan-400 transition-colors duration-300">
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
        <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-180px)] px-8 -mt-48">
          {/* Logo Image */}
          <img 
            src="https://customer-assets.emergentagent.com/job_blank-home/artifacts/gbn9wxfo_logo%202.png"
            alt="Anahata Design X"
            className="max-w-5xl w-full h-auto"
          />
          
          {/* Tagline - Solitreo font */}
          <h2 
            className="text-[#0891b2] text-2xl md:text-3xl tracking-wide uppercase -mt-56"
            style={{ fontFamily: "'Solitreo', cursive" }}
          >
            FIND YOUR MADNESS
          </h2>
        </main>

        {/* Sign Up Button - Bottom Left - Removed from here, now fixed at page level */}

        {/* Scroll Down Indicator - Bottom Center */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <div className="w-8 h-12 border-2 border-white rounded-full flex items-start justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
          </div>
          <span className="text-white text-xs tracking-[0.25em] uppercase">SCROLL DOWN</span>
        </div>
      </section>

      {/* Shop Section - Men's & Women's */}
      <section className="w-full bg-white pt-4 pb-2 px-4">
        <div className="grid grid-cols-2 gap-4">
          {/* Men's Section */}
          <div className="relative h-[54vh] overflow-hidden">
            <div 
              className="absolute inset-0 bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('https://customer-assets.emergentagent.com/job_blank-home/artifacts/7ue44qzn_Shop%20Mens.jpg')`,
                backgroundColor: '#0a1628',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/60 via-transparent to-[#041225]/70" />
            </div>
            <div className="relative z-10 p-12 h-full flex flex-col">
              <h3 className="text-white text-lg font-bold tracking-widest mb-6">LAUNCHING 2026</h3>
              <button className="border border-white/60 text-white px-8 py-3 text-sm tracking-widest font-medium hover:bg-white hover:text-black transition-all duration-300 w-fit">
                SHOP MEN'S
              </button>
            </div>
          </div>

          {/* Women's Section */}
          <div className="relative h-[54vh] overflow-hidden">
            <div 
              className="absolute inset-0 bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('https://customer-assets.emergentagent.com/job_blank-home/artifacts/rskirn8r_Shop%20Womens.jpg')`,
                backgroundColor: '#0a1628',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/60 via-transparent to-[#041225]/70" />
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

      {/* Carousel Section */}
      <section className="w-full bg-white pt-2 pb-4 px-4">
        <div className="relative w-full">
          {/* Left Arrow */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-gray-200/80 hover:bg-gray-300 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex gap-4 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)` }}
            >
              {carouselImages.map((image, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-1/3 h-[43vh]"
                >
                  <img 
                    src={image}
                    alt={`Leather detail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-gray-200/80 hover:bg-gray-300 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-black py-6">
        <p className="text-white text-center text-sm tracking-wide">
          Copyright © 2025 Anahata Design X, All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
