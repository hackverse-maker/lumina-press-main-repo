"use client";

import { motion } from "framer-motion";
import { ShoppingCart, CheckCircle2, Shield, Zap, Lock, Cpu, Heart } from "lucide-react";
import { useState } from "react";
import { useAppState } from "@/context/AppStateContext";
import { books } from "@/lib/data";

export default function CyberCableShowcase() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const { addToCart, cart, setIsCartOpen } = useAppState();
  const [added, setAdded] = useState(false);

  const product = books.find(b => b.id === "cyber-cable");
  const isInCart = cart.some(item => item.id === "cyber-cable");

  const handleAddToCart = () => {
    if (!isInCart && product) {
      addToCart(product);
      setAdded(true);
      setTimeout(() => {
        setAdded(false);
        setIsCartOpen(true);
      }, 1000);
    } else {
      setIsCartOpen(true);
    }
  };

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
    <div className="relative w-full">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex justify-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00D9FF]/10 border border-[#00D9FF]/30 backdrop-blur-sm">
            <div className="w-2 h-2 bg-[#00D9FF] rounded-full animate-pulse" />
            <span className="text-[#00D9FF] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">Hardware-Level Security</span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-center mb-12 sm:mb-16 space-y-4 sm:space-y-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tighter">
            Twelve Lords <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-[#4CC9F0]">Cyber Cable</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-[#4CC9F0]/80 font-semibold mx-auto max-w-3xl">Secure Charging. Controlled Data. Total Protection.</p>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-24">
          {/* Product Image Section */}
          <motion.div variants={itemVariants} className="relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden">
            {/* Glowing background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00D9FF] via-[#4CC9F0] to-[#12343B] opacity-20 blur-2xl animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#00D9FF]/10 to-transparent opacity-50" />

            {/* Main container */}
            <div className="relative h-full bg-gradient-to-br from-slate-900/50 to-black/80 backdrop-blur-xl border border-[#00D9FF]/20 flex items-center justify-center p-4 sm:p-8">
              {/* Cyber lines animation */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00D9FF]/50 to-transparent" />
              <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-[#4CC9F0]/50 to-transparent" />

              <motion.img initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }} src="/images/cablepost.jpg.jpeg" alt="Twelve Lords Cyber Cable" className="w-3/4 h-3/4 object-contain filter drop-shadow-[0_0_30px_rgba(0,217,255,0.3)]" />

              {/* Status display */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="absolute top-4 sm:top-6 left-4 sm:left-6 space-y-2">
                <div className="flex items-center gap-2 text-[#00D9FF]/60 text-[10px] sm:text-xs font-mono">
                  <div className="w-1.5 h-1.5 bg-[#00D9FF] rounded-full animate-pulse" />
                  <span>SYSTEM ACTIVE</span>
                </div>
                <div className="flex items-center gap-2 text-[#4CC9F0]/60 text-[10px] sm:text-xs font-mono">
                  <div className="w-1.5 h-1.5 bg-[#4CC9F0] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <span>SECURITY VERIFIED</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Description Section */}
          <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-[#A9B4C7] leading-relaxed font-medium">
                The Cyber Cable introduces a hardware-enforced security architecture that separates charging from data communication, ensuring your device only exchanges data when explicitly authorized.
              </p>

              {/* Feature Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {features.map((feature, index) => (
                  <motion.div key={index} variants={itemVariants} onMouseEnter={() => setHoveredCard(index)} onMouseLeave={() => setHoveredCard(null)} className="group relative">
                    <div className={`relative p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.color} border border-[#00D9FF]/20 backdrop-blur-md transition-all duration-300 cursor-pointer overflow-hidden`}
                      style={{
                        borderColor: hoveredCard === index ? 'rgba(0, 217, 255, 0.5)' : 'rgba(0, 217, 255, 0.2)',
                        boxShadow: hoveredCard === index ? '0 0 20px rgba(0, 217, 255, 0.2)' : 'none'
                      }}>
                      {/* Hover glow */}
                      <div className="absolute inset-0 bg-[#00D9FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl" />

                      <div className="relative space-y-2 sm:space-y-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#00D9FF]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#00D9FF]" />
                        </div>
                        <div>
                          <p className="text-[10px] sm:text-xs font-black text-[#00D9FF]/80 uppercase tracking-widest">{feature.title}</p>
                          <p className="text-xs sm:text-sm font-semibold text-gray-300">{feature.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Action Buttons */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                <button 
                  onClick={handleAddToCart}
                  className="group relative px-10 py-4 sm:px-12 sm:py-5 rounded-2xl text-white font-black text-lg sm:text-lg transition-all hover:scale-105 flex items-center justify-center gap-3"
                  style={{
                    background: 'linear-gradient(135deg, #12343B, #0A6C74)',
                    boxShadow: '0 0 20px rgba(0,217,255,0.25)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 30px rgba(0,217,255,0.45)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(0,217,255,0.25)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {added ? <CheckCircle2 className="w-6 h-6" /> : <ShoppingCart className="w-6 h-6" />}
                  <span>{isInCart ? "In Your Cart" : "Add to Cart"}</span>
                </button>
                <button 
                  className="group relative px-4 py-4 sm:px-5 sm:py-5 rounded-2xl border-2 border-[#00D9FF] text-[#00D9FF] font-black transition-all hover:scale-105 hover:bg-[#00D9FF]/10 flex items-center justify-center gap-2"
                >
                  <Heart className="w-5 h-5" />
                  <span className="hidden sm:inline">Favorite</span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className="h-px bg-gradient-to-r from-transparent via-[#00D9FF]/30 to-transparent mb-16 sm:mb-24" />
      </div>
    </div>
  );
}
