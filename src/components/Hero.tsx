"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
const heroVideo = "/videos/hero-tech-v2.mp4";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      {/* Cinematic background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onError={(e) => console.error("Hero video failed to load", e)}
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/80" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-10 h-72 w-72 rounded-full bg-accent/30 blur-[120px] animate-float" />
      <div
        className="absolute bottom-1/4 right-10 h-80 w-80 rounded-full bg-accent-glow/20 blur-[140px] animate-float"
        style={{ animationDelay: "2s" }}
      />

      {/* Floating glass UI cards */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: -6 }}
        animate={{ opacity: 1, y: 0, rotate: -6 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="hidden md:block absolute top-32 left-12 glass rounded-2xl px-4 py-3 text-foreground/90 text-xs shadow-glass animate-float"
      >
        <div className="flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-accent" />
          <span className="font-medium">New article published</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30, rotate: 5 }}
        animate={{ opacity: 1, y: 0, rotate: 5 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="hidden md:block absolute bottom-40 right-14 glass rounded-2xl px-4 py-3 text-foreground/90 text-xs shadow-glass animate-float"
        style={{ animationDelay: "1.5s" }}
      >
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-accent" />
          <span className="font-medium">+128 readers today</span>
        </div>
      </motion.div>

      <div className="container-tight relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-8 text-foreground"
        >
          <Sparkles className="h-4 w-4 text-accent" />
          A premium platform for tech writers
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-foreground max-w-5xl mx-auto"
        >
          Publish Your Tech Ideas to the <span className="text-gradient-accent">World</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto"
        >
          Write articles, share knowledge, and publish your own books on our
          platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex items-center justify-center gap-4 flex-wrap"
        >
          <Link
            href="/articles"
            className="group inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-4 font-semibold shadow-accent-glow hover:scale-105 transition-transform animate-pulse-glow"
          >
            Explore Articles
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/books"
            className="inline-flex items-center gap-2 rounded-full glass text-foreground px-7 py-4 font-semibold hover:bg-foreground/10 transition-colors"
          >
            <BookOpen className="h-5 w-5" />
            Start Writing
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 grid grid-cols-3 gap-6 max-w-2xl mx-auto"
        >
          {[
            { n: "12k+", l: "Writers" },
            { n: "84k+", l: "Articles" },
            { n: "2M+", l: "Readers" },
          ].map((s) => (
            <div key={s.l} className="text-foreground">
              <div className="font-display text-3xl md:text-4xl font-bold">
                {s.n}
              </div>
              <div className="text-sm text-foreground/60 mt-1">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="hidden absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="h-10 w-6 rounded-full border-2 border-white/40 flex items-start justify-center p-1">
          <div className="h-2 w-1 bg-white rounded-full animate-float" />
        </div>
      </div>
    </section>
  );
};
