"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Cpu, Zap, Code2, ArrowUpRight, ShieldCheck, MousePointer2, Lock } from "lucide-react";
const techImg = "/images/cyber-cable-hero.jpg";

const items = [
  { icon: ShieldCheck, title: "Secure Charging Mode", text: "Hardware-enforced protection that prevents juice jacking and unauthorized data access." },
  { icon: MousePointer2, title: "User Control Button", text: "A physical toggle that puts you in complete control of your device's data pathways." },
  { icon: Lock, title: "Guard Against Attacks", text: "Defends against HID injection and data interception at the physical layer." },
];

export const Tech = () => {
  return (
    <section id="tech" className="section-padding bg-background relative overflow-hidden">
      <div className="container-tight">
        <div className="grid sm:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              Hardware Security
            </span>
            <h2 className="text-balance">The Twelve Lords Cyber Cable. Total control over your data.</h2>
            <p className="max-w-xl">
              We've engineered security at the physical layer. Our Cyber Cable ensures your 
              devices remain protected from modern attack vectors while delivering peak performance.
            </p>
            
            <div className="pt-4">
              <Link
                href="/tech"
                className="btn-outline inline-flex items-center gap-2 text-sm"
              >
                View Specifications <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-12 space-y-8">
              {items.map((it, i) => (
                <motion.div
                  key={it.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-6 group"
                >
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                    <it.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{it.title}</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">{it.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Pulsing Background Glow */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"
            />

            <motion.div 
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative rounded-2xl overflow-hidden border border-border shadow-premium bg-black p-[10px] z-10"
            >
              <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden">
                <img
                  src={techImg}
                  alt="Twelve Lords Cyber Cable"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                
                {/* Scanning Light Effect */}
                <motion.div 
                  animate={{ 
                    top: ["-100%", "200%"],
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 1
                  }}
                  className="absolute left-0 right-0 h-[30%] bg-gradient-to-b from-transparent via-primary/20 to-transparent -rotate-12 pointer-events-none"
                />
              </div>

              <div className="absolute bottom-8 left-8 right-8">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-bold uppercase tracking-wider text-white border border-white/10"
                >
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  Physical Security Active
                </motion.div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-primary/30 rounded-tr-3xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-primary/30 rounded-bl-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
