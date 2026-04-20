"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Check } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32"
    >
      {/* Animated logo video background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-radial opacity-60" />
        
        {/* Logo as animated background */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <img 
            src="/maha-roofing-logo.jpg" 
            alt="Background"
            className="w-96 h-96 object-contain opacity-20"
          />
        </motion.div>

        {/* Floating accent elements */}
        <div className="absolute top-20 right-20 h-96 w-96 rounded-full bg-accent/10 blur-[120px] animate-float" />
        <div
          className="absolute bottom-20 left-20 h-80 w-80 rounded-full bg-accent/5 blur-[140px] animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container-tight relative z-10 text-center">
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          Professional Roofing Solutions
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-foreground max-w-4xl mx-auto"
        >
          Trusted Roofing Experts for Your <span className="text-accent">Home</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed"
        >
          Premium roofing installation, repair, and maintenance services with over 15 years of industry experience. We deliver quality craftsmanship on every project.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex items-center justify-center gap-4 flex-wrap"
        >
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-accent text-accent-foreground px-7 py-4 font-semibold shadow-accent-glow hover:scale-105 transition-transform duration-300"
          >
            <Phone className="h-5 w-5" />
            Get Free Quote
          </Link>
          <Link
            href="#about"
            className="inline-flex items-center gap-2 rounded-lg glass text-foreground px-7 py-4 font-semibold hover:bg-foreground/10 transition-colors"
          >
            Learn More
          </Link>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          {[
            { label: "25+ Years Experience" },
            { label: "Licensed & Insured" },
            { label: "Satisfaction Guaranteed" },
          ].map((f) => (
            <div key={f.label} className="flex items-center justify-center gap-2 text-sm font-medium text-foreground">
              <Check className="h-5 w-5 text-accent flex-shrink-0" />
              {f.label}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="h-10 w-6 rounded-full border-2 border-foreground/30 flex items-start justify-center p-1">
          <div className="h-2 w-1 bg-foreground/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};
