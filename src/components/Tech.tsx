"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Cpu, Zap, Code2, ArrowUpRight } from "lucide-react";
const techVideo = "/videos/tech-video.mp4";

const items = [
  { icon: Cpu, title: "AI-assisted editor", text: "Smart suggestions that respect your voice." },
  { icon: Zap, title: "Instant publish", text: "From draft to live in under a second." },
  { icon: Code2, title: "Developer friendly", text: "API and embeds for your own stack." },
];

export const Tech = () => {
  return (
    <section id="tech" className="relative py-28 md:py-36 bg-secondary/40 overflow-hidden">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">Blog Tech</span>
            <h2 className="mt-3 font-display font-bold text-4xl md:text-5xl leading-tight text-foreground">
              Learn the tech behind <span className="text-gradient-accent">great writing</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Deep dives, tutorials, and insights into the tools and ideas shaping the modern web — written for the curious mind.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6"
            >
              <Link
                href="/tech"
                className="inline-flex items-center gap-2 text-sm font-semibold hover:text-accent transition-colors"
              >
                Discover more tech <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <div className="mt-8 space-y-5">
              {items.map((it, i) => (
                <motion.div
                  key={it.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-gradient-accent flex items-center justify-center shadow-accent-glow group-hover:rotate-6 group-hover:scale-110 transition-transform duration-500">
                    <it.icon className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                      {it.title.split(' ').slice(0, -1).join(' ')} <span className="text-gradient-accent">{it.title.split(' ').slice(-1).join(' ')}</span>
                    </h3>
                    <p className="mt-1 text-muted-foreground text-sm leading-relaxed">{it.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Video */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-gradient-accent opacity-20 blur-3xl rounded-[2rem]" />
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-card-hover aspect-[4/5]">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={techVideo} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-white">
                  <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                  Live coding session
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
