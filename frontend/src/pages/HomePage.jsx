import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef(null);
  const visibleSlides = 3;

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Handle scroll for slide change
  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrolling || isLoading) return;
      
      if (e.deltaY > 0 && currentSlide === 0) {
        // Scroll down - go to slide 2
        setIsScrolling(true);
        setCurrentSlide(1);
        setTimeout(() => setIsScrolling(false), 1000);
      } else if (e.deltaY < 0 && currentSlide === 1) {
        // Scroll up - go to slide 1
        setIsScrolling(true);
        setCurrentSlide(0);
        setTimeout(() => setIsScrolling(false), 1000);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentSlide, isScrolling, isLoading]);

  const nextCarouselSlide = () => {
    setCurrentIndex((prev) => 
      prev + visibleSlides >= carouselImages.length ? 0 : prev + 1
    );
  };

  const prevCarouselSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? carouselImages.length - visibleSlides : prev - 1
    );
  };

  // Loading Screen
  if (isLoading) {
    return (
      <motion.div 
        className="fixed inset-0 bg-black flex items-center justify-center z-[100]"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img 
              src="https://customer-assets.emergentagent.com/job_blank-home/artifacts/gbn9wxfo_logo%202.png"
              alt="Anahata Design X"
              className="max-w-md w-full h-auto mb-8"
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          <motion.div 
            className="w-48 h-1 bg-gray-800 mx-auto rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div 
              className="h-full bg-cyan-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </motion.div>
          <motion.p 
            className="text-white/60 text-sm mt-4 tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Loading...
          </motion.p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="w-full h-screen overflow-hidden" style={{ fontFamily }} ref={containerRef}>
      {/* Fixed Sign Up Button - Bottom Left */}
      <motion.div 
        className="fixed bottom-12 left-8 z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <button className="bg-white text-black font-bold px-10 py-2.5 text-sm tracking-wider hover:bg-gray-100 transition-colors duration-300 min-w-[160px]">
          SIGN UP
        </button>
        <p className="text-white text-xs mt-1.5 tracking-widest text-center">FOR EARLY ACCESS</p>
      </motion.div>

      {/* Slide Indicators */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        <button 
          onClick={() => setCurrentSlide(0)}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === 0 ? 'bg-white scale-150' : 'bg-white/40 hover:bg-white/60'}`}
        />
        <button 
          onClick={() => setCurrentSlide(1)}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === 1 ? 'bg-white scale-150' : 'bg-white/40 hover:bg-white/60'}`}
        />
      </div>

      {/* Slides Container */}
      <motion.div 
        className="relative w-full"
        animate={{ y: currentSlide === 0 ? 0 : '-100vh' }}
        transition={{ duration: 0.8, ease: [0.645, 0.045, 0.355, 1] }}
      >
        {/* Slide 1 - Hero Banner */}
        <section className="relative h-screen w-full overflow-hidden">
          {/* Background Image with Zoom Effect */}
          <motion.div 
            className="absolute inset-0 bg-cover bg-top bg-no-repeat"
            style={{
              backgroundImage: `url('https://customer-assets.emergentagent.com/job_blank-home/artifacts/byoc6d5m_New%20Project.jpg')`,
            }}
            initial={{ scale: 1.1 }}
            animate={{ scale: currentSlide === 0 ? 1 : 1.1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/70 via-[#0a1628]/50 to-[#0a1628]/80" />
            {/* Blue tint overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#041225]/80 via-transparent to-[#0a1a35]/40" />
          </motion.div>

          {/* Navigation Header */}
          <motion.header 
            className="relative z-20 flex items-center justify-between px-8 py-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {/* Empty div for spacing */}
            <div className="flex-1" />
            
            {/* Logo - Center */}
            <Link to="/" className="border-2 border-white px-4 py-2 rounded-lg hover:bg-white/10 transition-colors duration-300">
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
              <Link to="/adx-promise" className="text-white text-sm tracking-widest font-medium hover:text-cyan-400 transition-colors duration-300">
                ADX PROMISE
              </Link>
              <a href="#" className="text-white text-sm tracking-widest font-medium hover:text-cyan-400 transition-colors duration-300">
                CONTACT US
              </a>
            </nav>
          </motion.header>

          {/* Main Content */}
          <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-180px)] px-8 -mt-32">
            {/* Logo Image */}
            <motion.img 
              src="https://customer-assets.emergentagent.com/job_blank-home/artifacts/gbn9wxfo_logo%202.png"
              alt="Anahata Design X"
              className="max-w-5xl w-full h-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
            
            {/* Tagline */}
            <motion.h2 
              className="text-[#0891b2] text-2xl md:text-3xl tracking-wide uppercase -mt-56"
              style={{ fontFamily: "'Solitreo', cursive" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              FIND YOUR MADNESS
            </motion.h2>
          </main>

          {/* Scroll Down Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => setCurrentSlide(1)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="w-8 h-12 border-2 border-white rounded-full flex items-start justify-center pt-2">
              <motion.div 
                className="w-1 h-2 bg-white rounded-full"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
            <span className="text-white text-xs tracking-[0.25em] uppercase">SCROLL DOWN</span>
          </motion.div>
        </section>

        {/* Slide 2 - Shop Section + Carousel + Footer */}
        <section className="relative h-screen w-full overflow-y-auto bg-white">
          <div className="min-h-screen flex flex-col">
            {/* Shop Section - Men's & Women's */}
            <motion.div 
              className="w-full bg-white pt-4 pb-2 px-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: currentSlide === 1 ? 1 : 0, y: currentSlide === 1 ? 0 : 50 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {/* Men's Section */}
                <motion.div 
                  className="relative h-[40vh] overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url('https://customer-assets.emergentagent.com/job_blank-home/artifacts/7ue44qzn_Shop%20Mens.jpg')`,
                      backgroundColor: '#0a1628',
                    }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/60 via-transparent to-[#041225]/70" />
                  </motion.div>
                  <div className="relative z-10 p-12 h-full flex flex-col">
                    <h3 className="text-white text-lg font-bold tracking-widest mb-6">LAUNCHING 2026</h3>
                    <button className="border border-white/60 text-white px-8 py-3 text-sm tracking-widest font-medium hover:bg-white hover:text-black transition-all duration-300 w-fit">
                      SHOP MEN'S
                    </button>
                  </div>
                </motion.div>

                {/* Women's Section */}
                <motion.div 
                  className="relative h-[40vh] overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url('https://customer-assets.emergentagent.com/job_blank-home/artifacts/rskirn8r_Shop%20Womens.jpg')`,
                      backgroundColor: '#0a1628',
                    }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/60 via-transparent to-[#041225]/70" />
                  </motion.div>
                  <div className="relative z-10 p-12 h-full flex flex-col">
                    <h3 className="text-white text-lg font-bold tracking-widest mb-6">LAUNCHING 2026</h3>
                    <button className="border border-white/60 text-white px-8 py-3 text-sm tracking-widest font-medium hover:bg-white hover:text-black transition-all duration-300 w-fit">
                      SHOP WOMEN'S
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Carousel Section */}
            <motion.div 
              className="w-full bg-white pt-2 pb-4 px-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: currentSlide === 1 ? 1 : 0, y: currentSlide === 1 ? 0 : 50 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="relative w-full">
                {/* Left Arrow */}
                <button 
                  onClick={prevCarouselSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-gray-200/80 hover:bg-gray-300 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>

                {/* Carousel Container */}
                <div className="overflow-hidden">
                  <motion.div 
                    className="flex gap-4"
                    animate={{ x: `-${currentIndex * (100 / visibleSlides)}%` }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    {carouselImages.map((image, index) => (
                      <motion.div 
                        key={index}
                        className="flex-shrink-0 w-1/3 h-[35vh]"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img 
                          src={image}
                          alt={`Leather detail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Right Arrow */}
                <button 
                  onClick={nextCarouselSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-gray-200/80 hover:bg-gray-300 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </motion.div>

            {/* Footer */}
            <motion.footer 
              className="w-full bg-black py-6 mt-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: currentSlide === 1 ? 1 : 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <p className="text-white text-center text-sm tracking-wide">
                Copyright © 2025 Anahata Design X, All Rights Reserved.
              </p>
            </motion.footer>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default HomePage;
