"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Lock, Cpu, Activity } from "lucide-react";

export const CyberCableSection = () => {
  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden bg-slate-950" id="cyber-cable">
      {/* Background Digital Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--accent)) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="container-tight relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-24 items-center">
          {/* Left: Enhanced Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-[0.2em]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Security Hardware-Level</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-black leading-tight text-foreground tracking-tighter">
                Twelve Lords <span className="text-accent italic">Cyber Cable</span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                Secure Charging. Controlled Data. <span className="text-accent underline decoration-accent/20 underline-offset-8">Total Protection.</span>
              </p>

              <p className="text-muted-foreground leading-relaxed text-lg font-medium">
                Our team of engineers developed the Cyber Cable to eliminate "Juice Jacking" and data theft at the physical layer. By hardware-enforcing a charge-only default, we ensure your privacy is never compromised in public charging environments.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
               <div className="space-y-2">
                 <div className="flex items-center gap-2 text-foreground font-bold text-sm">
                   <Lock className="w-4 h-4 text-accent" />
                   <span>HID Protection</span>
                 </div>
                 <p className="text-xs text-muted-foreground">Blocks malicious keyboard injection attacks via USB.</p>
               </div>
               <div className="space-y-2">
                 <div className="flex items-center gap-2 text-foreground font-bold text-sm">
                   <Zap className="w-4 h-4 text-accent" />
                   <span>60W Fast Charge</span>
                   </div>
                 <p className="text-xs text-muted-foreground">High-speed power delivery without security compromise.</p>
               </div>
            </div>

            <div className="pt-6">
              <button 
                onClick={() => window.location.href = '/books/cyber-cable'}
                className="group relative px-10 py-5 rounded-2xl bg-accent text-white font-black text-lg transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
              >
                Learn More
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-2xl" />
              </button>
            </div>
          </motion.div>

          {/* Right: Live Animation Product View */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[500px] md:h-[650px] flex items-center justify-center"
          >
            {/* Animated Glow Rings */}
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute w-[80%] aspect-square rounded-full border border-accent/20 blur-[2px]"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-[95%] aspect-square rounded-full border border-accent/5 border-dashed"
            />

            {/* The Product Image */}
            <div className="relative w-full h-full z-10">
               <motion.div
                 animate={{ y: [0, -15, 0] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                 className="w-full h-full relative"
               >
                 <img
                    src="/images/cable-new.png"
                    alt="Cyber Cable"
                    className="w-full h-full object-contain filter drop-shadow-[0_0_50px_rgba(34,211,238,0.3)]"
                  />
                  
                  {/* LIVE ANIMATION ELEMENTS */}
                  
                  {/* Status Pulse on Connector */}
                  <motion.div
                    animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-[45%] left-[51%] w-4 h-4 bg-accent rounded-full blur-[8px] z-20"
                  />

                  {/* Horizontal Scanning Laser */}
                  <motion.div
                    animate={{ top: ['20%', '80%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent shadow-[0_0_15px_hsl(var(--accent))] z-30 opacity-50"
                  />

                  {/* Floating Digital Nodes */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: [0, 0.4, 0],
                        y: [-20, -60],
                        x: Math.random() * 40 - 20
                      }}
                      transition={{ 
                        duration: 3 + Math.random() * 2, 
                        repeat: Infinity, 
                        delay: i * 0.8 
                      }}
                      className="absolute top-1/2 left-1/2 text-accent"
                    >
                      <Activity className="w-4 h-4" />
                    </motion.div>
                  ))}
               </motion.div>
            </div>

            {/* UI Overlays */}
            <div className="absolute top-12 left-12 font-mono text-[9px] text-accent/40 space-y-1">
               <div className="flex items-center gap-2"><span className="h-1 w-1 bg-accent rounded-full animate-pulse"/> SECURE_LINK_ACTIVE</div>
               <div>VOLTAGE_FLUX: STABLE</div>
            </div>
            
            <div className="absolute bottom-12 right-12 font-mono text-[9px] text-accent/40 text-right space-y-1">
               <div>PROTO: XII_LORDS_V1</div>
               <div className="text-accent/60">ENCRYPTION: HARDWARE_FORCED</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
