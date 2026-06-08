"use client";

import { motion } from "framer-motion";
import { ShoppingCart, CheckCircle2, Shield, Zap, Lock, Cpu } from "lucide-react";
import { useState } from "react";

interface CyberCableShowcaseProps {
  onAddToCart: () => void;
  isInCart: boolean;
  added: boolean;
}

export const CyberCableShowcase = ({ onAddToCart, isInCart, added }: CyberCableShowcaseProps) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    { icon: Shield, title: "Default Mode", subtitle: "Charge-Only", color: "from-cyan-500/20 to-transparent" },
    { icon: Zap, title: "Power Delivery", subtitle: "Up to 60W", color: "from-teal-500/20 to-transparent" },
    { icon: Lock, title: "Data Protection", subtitle: "Secure Transfer", color: "from-blue-500/20 to-transparent" },
    { icon: Cpu, title: "Shielded Access", subtitle: "Hardware Security", color: "from-indigo-500/20 to-transparent" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-slate-950 to-black overflow-hidden pt-16 sm:pt-24 pb-16 sm:pb-24">
      {/* Animated background grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,200,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,200,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-40" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex justify-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-cyan-400 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">Hardware-Level Security</span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-center mb-12 sm:mb-16 space-y-4 sm:space-y-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tighter">
            Twelve Lords <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Cyber Cable</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-cyan-300/80 font-semibold mx-auto max-w-3xl">Secure Charging. Controlled Data. Total Protection.</p>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-24">
          {/* Product Image Section */}
          <motion.div variants={itemVariants} className="relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden">
            {/* Glowing background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 opacity-20 blur-2xl animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent opacity-50" />

            {/* Main container */}
            <div className="relative h-full bg-gradient-to-br from-slate-900/50 to-black/80 backdrop-blur-xl border border-cyan-500/20 flex items-center justify-center p-4 sm:p-8">
              {/* Cyber lines animation */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
              <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-teal-500/50 to-transparent" />

              <motion.img initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }} src="/images/cablepost.jpg.jpeg" alt="Twelve Lords Cyber Cable" className="w-3/4 h-3/4 object-contain filter drop-shadow-[0_0_30px_rgba(0,255,200,0.3)]" />

              {/* Status display */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="absolute top-4 sm:top-6 left-4 sm:left-6 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400/60 text-[10px] sm:text-xs font-mono">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                  <span>SYSTEM ACTIVE</span>
                </div>
                <div className="flex items-center gap-2 text-teal-400/60 text-[10px] sm:text-xs font-mono">
                  <div className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <span>SECURITY VERIFIED</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Description Section */}
          <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-300/90 leading-relaxed font-medium">
                The Cyber Cable introduces a hardware‑enforced security architecture that separates charging from data communication, ensuring your device only exchanges data when explicitly authorized.
              </p>

              {/* Feature Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {features.map((feature, index) => (
                  <motion.div key={index} variants={itemVariants} onMouseEnter={() => setHoveredCard(index)} onMouseLeave={() => setHoveredCard(null)} className="group relative">
                    <div className={`relative p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.color} border border-cyan-500/20 backdrop-blur-md transition-all duration-300 cursor-pointer overflow-hidden`}
                      style={{
                        borderColor: hoveredCard === index ? 'rgba(0, 255, 200, 0.5)' : 'rgba(0, 255, 200, 0.2)',
                        boxShadow: hoveredCard === index ? '0 0 20px rgba(0, 255, 200, 0.2)' : 'none'
                      }}>
                      {/* Hover glow */}
                      <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl" />

                      <div className="relative space-y-2 sm:space-y-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                        </div>
                        <div>
                          <p className="text-[10px] sm:text-xs font-black text-cyan-400/80 uppercase tracking-widest">{feature.title}</p>
                          <p className="text-xs sm:text-sm font-semibold text-gray-300">{feature.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="pt-4 sm:pt-6">
              <button onClick={onAddToCart} className="w-full group relative px-6 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-500 text-black font-black text-base sm:text-lg transition-all duration-300 overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(0,255,200,0.4)] hover:scale-105 active:scale-95">
                {/* Shine effect */}
                <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                <span className="relative flex items-center justify-center gap-2">
                  {added ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                      <span>Added to Cart</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
                      <span>{isInCart ? "In Your Cart" : "Add to Cart"}</span>
                    </>
                  )}
                </span>
              </button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-16 sm:mb-24" />
      </div>
    </section>
  );
};
