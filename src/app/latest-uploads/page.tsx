"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowLeft, Youtube, Clock, User, ArrowUpRight, Play } from "lucide-react";
import Link from "next/link";

interface UploadItem {
  title: string;
  description: string;
  url: string;
  category: string;
  duration: string;
  date: string;
  speaker: string;
  color: string;
}

const uploads: UploadItem[] = [
  {
    title: "The Cost of Human Error – Episode 1: The Weakest Link | By Muhammad Raza",
    description: "In the debut episode of 'The Cost of Human Error' podcast series, Muhammad Raza breaks down how physical and psychological human vulnerabilities remain the primary targets in modern cybersecurity systems.",
    url: "https://youtu.be/of_NOdWJVZI?si=poMRy3u4OclrvagP",
    category: "Podcast Episode",
    duration: "15 min watch",
    date: "May 18, 2026",
    speaker: "Muhammad Raza",
    color: "from-zinc-900 to-stone-950",
  },
  {
    title: "The Dark Origins of Halloween | From Celtic Samhain to Modern Spooks",
    description: "Journey back thousands of years to discover Samhain—the ancient Celtic harvest festival where the veil between the living and dead blurred—and see how it evolved into the modern global holiday.",
    url: "https://youtu.be/F3tQPF4RcJM?si=uVrUzAsfVQLrj6xS",
    category: "History & Philosophy",
    duration: "12 min watch",
    date: "October 31, 2025",
    speaker: "Twelve Lords Editorial",
    color: "from-zinc-900 to-stone-950",
  },
  {
    title: "Why 9AM Exams Are Failing Students | The Truth About Morning Tests",
    description: "Backed by sleep science and circadian rhythm research, we explore the physiological bias early-morning testing imposes on teenage brains and natural late-chronotype individuals.",
    url: "https://youtu.be/wwAxHdIXmcg?si=qfgz6kxRaDrxKki9",
    category: "Educational Critique",
    duration: "10 min watch",
    date: "April 21, 2026",
    speaker: "Twelve Lords Editorial",
    color: "from-zinc-900 to-stone-950",
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 15 
    } 
  },
};

export default function LatestUploadsPage() {

  return (
    <main className="min-h-screen bg-[#DBDAD8] text-black pb-24">
      {/* Hero Section */}
      <section className="bg-[#DBDAD8] pt-32 pb-16 md:pt-36 md:pb-20 px-6 border-b-[3px] border-black mt-[10px]">
        <div className="container-tight relative flex flex-col items-center text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-red-600 text-xs font-bold tracking-[0.3em] uppercase mb-4"
            >
              Twelve Lords Studio
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-8xl font-black text-black mb-8 tracking-tighter uppercase leading-[0.95] text-center"
            >
              Latest <br />
              <span className="text-red-600">Uploads</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-black leading-relaxed font-light max-w-2xl font-serif italic text-center mx-auto"
            >
              Deep dives, podcasts, and historical critiques designed to bridge the gap between technical mastery and philosophical wisdom.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Grid Content Section */}
      <section className="py-12 px-6">
        <div className="container-tight">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {uploads.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative flex flex-col justify-between bg-white border-[3px] border-black rounded-2xl p-6 sm:p-8 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_rgba(0,0,0,1)] hover:-translate-x-1.5 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => window.open(item.url, "_blank", "noopener,noreferrer")}
              >
                {/* Background Accent Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  {/* Card Header Metadata */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="bg-black text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm">
                      {item.category}
                    </span>
                    <div className="h-8 w-8 rounded-full border-2 border-black flex items-center justify-center bg-red-600 text-white group-hover:scale-110 transition-transform shadow-sm">
                      <Play className="w-3.5 h-3.5 fill-white pl-0.5" />
                    </div>
                  </div>

                  {/* Playable Clickable Link Title */}
                  <h2 className="text-xl sm:text-2xl font-black text-black leading-tight tracking-tight mb-4 group-hover:text-red-600 transition-colors uppercase">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline focus:outline-none flex items-start gap-1 justify-between"
                      onClick={(e) => e.stopPropagation()} // Prevent double trigger since card is also clickable
                    >
                      <span>{item.title}</span>
                      <ArrowUpRight className="w-5 h-5 shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </h2>

                  {/* Description */}
                  <p className="text-black text-sm sm:text-base leading-relaxed mb-6 font-light font-serif line-clamp-4">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer Details */}
                <div className="pt-6 border-t border-black/10 flex flex-wrap items-center justify-between gap-4 text-xs font-light uppercase tracking-wider text-black">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-red-600" />
                    <span>{item.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-black" />
                    <span>{item.speaker}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Explore More CTA */}
      <section className="bg-[#DBDAD8] py-10 border-t-[3px] border-black">
        <div className="container-tight px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-black">
            <Youtube className="w-6 h-6 shrink-0 text-red-600" />
            <span className="text-sm font-light uppercase tracking-[0.25em]">Subscribed to Twelve Lords?</span>
          </div>
          <button
            onClick={() => window.open("https://youtube.com/@twelvelords", "_blank", "noopener,noreferrer")}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-black uppercase text-xs tracking-widest transition-all shadow-md active:scale-95 flex items-center gap-2 border-2 border-black"
          >
            Visit Our Main Channel <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </main>
  );
}
