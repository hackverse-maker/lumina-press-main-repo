"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";

export const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-32 md:pt-40"
    >
      {/* Clean Background matching the planet image */}
      <div className="absolute inset-0 bg-[#FAF9F6] dark:bg-[#0A0A0A] -z-10" />
      
      {/* Orbit Lines (SVG) */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[60%] aspect-square -z-5 opacity-20 pointer-events-none">
        <svg viewBox="0 0 800 800" className="w-full h-full animate-pulse-slow">
          <circle cx="400" cy="400" r="150" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
          <circle cx="400" cy="400" r="250" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 6" />
          <circle cx="400" cy="400" r="350" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 8" />
        </svg>
      </div>

      <div className="container-tight relative z-10 w-full px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Content Left */}
          <div className="max-w-4xl relative z-20 w-full text-center lg:text-left">
            {/* Subheader with Line */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <div className="w-12 h-[2px] bg-primary hidden sm:block" />
              <span className="text-[10px] sm:text-[12px] font-black tracking-[0.4em] uppercase text-foreground/60">
                Awareness. Perspective. Wisdom.
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-black leading-[1.1] text-foreground mb-10 tracking-tighter"
            >
              Where Modern <br className="hidden sm:block" />
              <span className="text-primary italic">Technology</span> Meets <br className="hidden sm:block" />
              Timeless Wisdom
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-foreground/70 leading-relaxed max-w-2xl mb-12 mx-auto lg:mx-0"
            >
              We explore the deeper questions behind today's digital world—AI, systems, 
              and complexity—through principles that don't change.
            </motion.p>
            
            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6"
            >
              <Link
                href="/articles"
                className="btn-primary flex items-center justify-center gap-3 px-10 py-4 text-base bg-primary hover:bg-primary/90 text-primary-foreground rounded-full transition-all w-full sm:w-auto"
              >
                Explore Insights
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/about"
                className="px-10 py-4 text-base border-2 border-foreground rounded-full font-bold hover:bg-foreground hover:text-background transition-all w-full sm:w-auto flex items-center justify-center"
              >
                Our Philosophy
              </Link>
            </motion.div>

            {/* Bottom Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-16 flex items-center justify-center lg:justify-start gap-3 text-foreground/50"
            >
              <Sparkles className="h-4 w-4 text-primary fill-primary" />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                Clarity in a world of noise.
              </span>
            </motion.div>
          </div>

          {/* Planet Graphic - Now visible on mobile but smaller */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative flex items-center justify-center w-full lg:w-auto"
          >
            <div className="relative w-full aspect-square max-w-[300px] sm:max-w-[400px] lg:max-w-[450px] pointer-events-none">
              <img 
                src="/planet.png" 
                alt="Saturn" 
                className="w-full h-full object-contain drop-shadow-[0_0_60px_rgba(253,181,17,0.15)] animate-float mix-blend-multiply dark:mix-blend-screen"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40">Scroll to discover</span>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="h-5 w-5 text-primary" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
