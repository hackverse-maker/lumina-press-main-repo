"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Lock, Cpu, Activity, ShoppingBag } from "lucide-react";
import { useAppState } from "@/context/AppStateContext";
import { books } from "@/lib/data";
import { useRouter } from "next/navigation";

export const CyberCableSection = () => {
  const router = useRouter();
  const { addToCart, cart, setIsCartOpen } = useAppState();
  const cyberCable = books.find(b => b.id === "cyber-cable");
  const isInCart = cart.some(item => item.id === "cyber-cable");

  if (!cyberCable) return null;

  const handleAddToCart = () => {
    if (!isInCart) {
      addToCart(cyberCable);
      setIsCartOpen(true);
    } else {
      setIsCartOpen(true);
    }
  };

  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden bg-[#0B121E]" id="cyber-cable">
      {/* Background Digital Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #00CFFF 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="container-tight relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-32 items-center">
          
          {/* LEFT SIDE: Image and Buttons below it */}
          <div className="flex flex-col gap-12 order-2 md:order-1 items-center md:items-start">
            
            {/* PRODUCT IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative w-full max-w-[450px]"
            >
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-[#00CFFF]/20 blur-[80px] rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
                
                <img
                  src="/images/cablepost.jpg.jpeg"
                  alt="Cyber Cable"
                  loading="lazy"
                  className="relative z-10 w-full h-auto object-contain filter drop-shadow-[0_0_50px_rgba(0,207,255,0.3)] transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Status Pulse on Connector */}
                <motion.div
                  animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-[48%] left-[50%] w-4 h-4 bg-[#00CFFF] rounded-full blur-[10px] z-20"
                />
              </div>
            </motion.div>

            {/* BUTTONS AREA: Moved under the image */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start w-full">
              <button 
                onClick={() => router.push('/products/cyber-cable')}
                className="group relative px-8 py-4 rounded-xl border-2 border-white/10 text-white font-bold text-base transition-all duration-300 hover:bg-[#00CFFF] hover:border-[#00CFFF] hover:text-black w-full sm:w-auto"
              >
                Learn More
              </button>

              <button 
                onClick={handleAddToCart}
                className="group relative px-8 py-4 rounded-xl bg-white text-black font-black text-base transition-all duration-300 hover:bg-[#00CFFF] hover:text-black hover:shadow-glow flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>{isInCart ? "In Cart" : "Add to Cart"}</span>
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-10 order-1 md:order-2"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.2em]">
                <span className="h-2 w-2 rounded-full bg-[#00CFFF] shrink-0" />
                <span>Hardware Security</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-sans font-black leading-[1.1] text-white tracking-tighter">
                Twelve Lords <br/>Cyber Cable
              </h2>
            </div>

            <div className="space-y-8">
              <p className="text-xl md:text-2xl font-bold text-white leading-tight">
                Secure Charging. Controlled Data. <br/><span className="text-white/60">Total Protection.</span>
              </p>

              <p className="text-white/70 leading-relaxed text-lg font-medium max-w-xl">
                Our team of engineers developed the Cyber Cable to eliminate "Juice Jacking" and data theft at the physical layer. By hardware-enforcing a charge-only default, we ensure your privacy is never compromised in public charging environments.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/5">
               <div className="space-y-3">
                 <div className="flex items-center gap-2 text-white font-bold text-sm">
                   <Lock className="w-4 h-4 text-[#00CFFF]" />
                   <span>HID Protection</span>
                 </div>
                 <p className="text-xs text-white/50 leading-relaxed">Blocks malicious keyboard injection attacks via USB.</p>
               </div>
               <div className="space-y-3">
                 <div className="flex items-center gap-2 text-white font-bold text-sm">
                   <Zap className="w-4 h-4 text-[#00CFFF]" />
                   <span>60W Fast Charge</span>
                   </div>
                 <p className="text-xs text-white/50 leading-relaxed">High-speed power delivery without security compromise.</p>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
