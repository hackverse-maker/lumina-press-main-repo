"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Lock, Activity, Cpu } from "lucide-react";

interface ArticleHighlightProps {
  heading: string;
  articleTitle: string;
  description: string;
  imagePath: string;
  link: string;
  showMoreLink?: boolean;
}

/**
 * CybersecurityAnimation Component
 * A high-tech digital network visualization with scanning lines and glowing nodes.
 */
const CybersecurityAnimation = () => {
  return (
    <div className="w-full h-full relative pointer-events-none bg-slate-950 overflow-hidden">
      {/* Dynamic Grid Background */}
      <motion.div 
        animate={{ 
          backgroundPosition: ['0px 0px', '40px 40px'] 
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--accent)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--accent)) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Pulsing Core Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.25, 0.1]
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className="w-[500px] h-[500px] bg-accent rounded-full blur-[120px]"
        />
      </div>

      {/* Floating UI Elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Main Shield Icon */}
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              filter: ["drop-shadow(0 0 5px hsl(var(--accent)/0.3))", "drop-shadow(0 0 20px hsl(var(--accent)/0.5))", "drop-shadow(0 0 5px hsl(var(--accent)/0.3))"]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-accent"
          >
            <ShieldCheck className="w-40 h-40 md:w-56 md:h-56 opacity-70" strokeWidth={0.75} />
          </motion.div>

          {/* Rotating Orbital Rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] border border-accent/20 rounded-full border-dashed"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] border border-accent/10 rounded-full"
          />
        </div>
      </div>

      {/* Descending Binary Matrix Effect */}
      <div className="absolute inset-0 flex justify-between px-4 opacity-5 pointer-events-none">
        {[...Array(6)].map((_, col) => (
          <div key={col} className="flex flex-col gap-2 py-2">
             {[...Array(15)].map((_, i) => (
              <motion.span
                key={i}
                className="font-mono text-[7px]"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 3 }}
              >
                {Math.random() > 0.5 ? "1" : "0"}
              </motion.span>
            ))}
          </div>
        ))}
      </div>

      {/* Horizontal Scanning Laser */}
      <motion.div
        animate={{ top: ['-5%', '105%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent/60 to-transparent shadow-[0_0_20px_hsl(var(--accent)/0.6)] z-20"
      />
    </div>
  );
};

export const ArticleHighlight = ({
  heading,
  articleTitle,
  description,
  imagePath,
  link,
  showMoreLink = true
}: ArticleHighlightProps) => {
  return (
    <section className="py-20 md:py-28 px-4 md:px-10 bg-background relative" id="article-highlight">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40 bg-[radial-gradient(circle_at_30%_30%,hsl(var(--accent)/0.08)_0%,transparent_60%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-row justify-between items-end mb-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter text-foreground uppercase italic scale-y-90 origin-left">
              {heading} <span className="text-accent underline decoration-accent/20 underline-offset-12">Detail</span>
            </h2>
          </motion.div>
          
          {showMoreLink && (
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Link href="/articles">
                <Button 
                  variant="ghost" 
                  className="group h-auto py-2 text-muted-foreground hover:text-accent hover:bg-accent/5 rounded-none border-b border-transparent hover:border-accent/40 transition-all duration-500 uppercase tracking-widest text-xs font-bold"
                >
                  More Articles 
                  <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-2" />
                </Button>
              </Link>
            </motion.div>
          )}
        </div>

        {/* Reusable Card Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="group relative bg-[#0a0f18]/80 backdrop-blur-xl border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl hover:border-accent/20 transition-all duration-700"
        >
          {/* Neon Border Glow Effect */}
          <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent,hsl(var(--accent)/0.1),transparent)] group-hover:animate-spin-slow pointer-events-none" />

          <div className="flex flex-col md:flex-row min-h-[600px] relative z-10">
            {/* LEFT: Article Content (Text) (60%) */}
            <div className="w-full md:w-[60%] p-8 md:p-16 flex flex-col justify-between border-r border-white/5 relative z-20">
              <div className="space-y-10">
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-[0.2em]"
                  >
                    <Lock className="w-3.5 h-3.5" />
                    <span>Highly Confidential</span>
                  </motion.div>

                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-3xl md:text-5xl font-display font-extrabold leading-[1.1] text-foreground tracking-tight group-hover:text-accent transition-colors duration-700"
                  >
                    {articleTitle}
                  </motion.h3>

                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl font-medium"
                  >
                    {description}
                  </motion.p>
                </div>
              </div>

              {/* Interaction Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-12 flex items-center gap-8"
              >
                <Link href={link}>
                  <Button className="group/btn relative bg-accent border border-accent/50 text-white px-12 py-8 rounded-full text-xl font-black transition-all duration-500 overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_50px_rgba(34,211,238,0.5)]">
                    <span className="relative z-10 flex items-center gap-4 group-hover/btn:tracking-widest transition-all">
                      VIEW IT <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* RIGHT: Visual Animation + Image (40%) */}
            <div className="w-full md:w-[40%] h-[400px] md:h-initial bg-slate-900/50 backdrop-blur-md relative overflow-hidden flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-white/5">
              <CybersecurityAnimation />
              
              {/* Overlay Image in Right Panel */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute inset-10 z-30 rounded-3xl overflow-hidden shadow-2xl border border-white/10 group-hover:scale-105 transition-transform duration-700"
              >
                <Image
                  src={imagePath}
                  alt={articleTitle}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </motion.div>

              <div className="absolute bottom-8 right-8 font-mono text-[10px] text-accent/30 hidden md:block tracking-[0.3em] font-bold z-40">
                ENCRYPTED_NODE_7X
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};
