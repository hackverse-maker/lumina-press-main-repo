"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { CinematicBackground } from "./CinematicBackground";

export const Hero = () => {
  const words = "Empowering the Next Generation of Tech Visionaries";
  
  return (
    <section
      id="home"
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden mt-[90px]"
    >
      <CinematicBackground />

      <div className="container-tight relative z-10 text-center px-6 mt-16 md:mt-24">
        {/* Typing Headline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="max-w-6xl mx-auto">
            {words.split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className={`inline-block mr-[0.25em] ${
                  word === "Tech" || word === "Visionaries" ? "text-primary" : ""
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        {/* Sharp Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="max-w-3xl mx-auto font-medium"
        >
          Discover cutting-edge articles, master deep technical concepts, and join 
          a community of world-class writers and developers.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
          className="mt-12 flex items-center justify-center gap-6 flex-wrap"
        >
          <Link
            href="/articles"
            className="btn-primary flex items-center gap-3 px-10 py-4 text-base"
          >
            Explore Platform
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/books"
            className="btn-outline flex items-center gap-3 px-10 py-4 text-base bg-background/50 backdrop-blur-sm"
          >
            <BookOpen className="h-5 w-5" />
            Learn More
          </Link>
        </motion.div>

        {/* Typing indicator mimic */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: 2 }}
          className="inline-block w-1 h-12 bg-primary ml-2 align-middle md:h-16 lg:h-20"
        />
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40">Scroll to discover</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};
