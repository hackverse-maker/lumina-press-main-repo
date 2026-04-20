"use client";

import React from "react";
import { Target, Eye, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Simple Hero */}
      <section className="relative w-full py-20 flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-4 text-foreground">
            About <span className="text-gradient-accent">Us</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Empowering the next generation of tech writers and thinkers.
          </p>
        </div>
      </section>

      {/* Split Layout Content */}
      <section className="py-16 md:py-24 px-4">
        <div className="container-tight">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">
                  Our <span className="text-gradient-accent">Story</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  Lumina Press started as a small project to help writers share complex ideas in a simple, beautiful format. Today, it grew into a global community of creators dedicated to high-quality knowledge sharing and modern publishing.
                </p>
              </div>

              <div className="grid gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="p-6 rounded-2xl bg-secondary/30 border border-border hover:border-accent/50 hover:bg-secondary/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                      <Target className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">Our <span className="text-gradient-accent">Mission</span></h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    To turn the best ideas into compact, actionable frameworks that everyone can learn from.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="p-6 rounded-2xl bg-secondary/30 border border-border hover:border-accent/50 hover:bg-secondary/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                      <Eye className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">Our <span className="text-gradient-accent">Vision</span></h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    A world where deep knowledge is accessible, engaging, and beautiful by default.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Floating Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="relative h-[400px] md:h-[500px] group"
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full rounded-2xl overflow-hidden"
              >
                <img
                  src="/images/about.jpg"
                  alt="About us"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Blur to focus effect on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-accent/5 mix-blend-overlay"
                />
              </motion.div>
              {/* Decorative background glow */}
              <div className="absolute -inset-4 bg-gradient-accent opacity-10 blur-2xl rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
