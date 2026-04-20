"use client";

import { motion } from "framer-motion";

export const CyberCableSection = () => {
  return (
    <section className="relative py-20 md:py-28 px-4 overflow-hidden">
      <div className="container-tight">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8 md:gap-16 items-center min-h-[500px]">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <span className="text-accent text-sm font-semibold tracking-widest uppercase">Premium Technology</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight text-foreground">
                Twelve Lords <span className="text-gradient-accent">Cyber Cable</span>
              </h2>
            </div>

            <p className="text-lg font-semibold text-foreground">
              Secure Charging. Controlled Data. Total Protection.
            </p>

            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Experience the next generation of secure charging technology. Our Twelve Lords Cyber Cable combines military-grade protection with seamless connectivity, ensuring your data stays protected while you charge with confidence.
            </p>

            <div>
              <button className="px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:shadow-accent-glow transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Right: Product Image with Glow Ring */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="relative h-[400px] md:h-[550px]"
          >
            {/* Animated glow ring background */}
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.05, 1] }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute -inset-12 rounded-full border border-accent/20 blur-xl"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 rounded-full border border-accent/10"
            />

            {/* Floating animation for product */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full"
            >
              <img
                src="/images/cable.png"
                alt="Cyber Cable"
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/10 via-transparent to-transparent rounded-2xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
