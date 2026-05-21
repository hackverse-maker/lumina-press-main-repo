"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#DBDAD8] text-black pb-24">
      {/* Hero Section */}
      <section className="bg-[#DBDAD8] pt-44 pb-20 md:pt-52 md:pb-28 px-6 border-b-[3px] border-black mt-[10px]">
        <div className="container-tight text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-black/85 text-xs font-bold tracking-[0.2em] uppercase mb-4"
          >
            The Platform & The Founder
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-8xl font-black text-black mb-12 tracking-tighter uppercase"
          >
            Twelve Lords
          </motion.h1>

          {/* Featured Quote Block */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-3xl mx-auto my-12 flex flex-col items-center justify-center"
          >
            <p className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-black leading-snug tracking-tight text-center max-w-2xl">
              “Timeless wisdom for a world moving too fast.”
            </p>
            <span className="mt-6 text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-black/85">
              — Muhammad Raza, Cybersecurity Engineer
            </span>
          </motion.div>
        </div>
      </section>

      {/* Main Biography Section */}
      <section className="py-20 px-6 bg-white border-b border-black/10">
        <div className="max-w-3xl mx-auto">
          
          {/* Portrait Image Frame */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-20 flex flex-col items-center group w-full"
          >
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-transform duration-500 hover:scale-[1.005] overflow-hidden rounded-2xl">
              <img
                src="/about_profile.jpg"
                alt="Muhammad Raza"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="mt-4 text-xs font-semibold text-black/75 tracking-wider w-full text-left sm:text-center leading-relaxed">
              Muhammad Raza — Founder & Cybersecurity Engineer.
            </span>
          </motion.div>

          {/* Bio Text Blocks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg text-black font-[400] text-base sm:text-lg leading-relaxed sm:leading-loose space-y-8"
          >
            <p className="first-letter:text-5xl first-letter:font-black first-letter:text-black first-letter:float-left first-letter:mr-3 first-letter:mt-1">
              TwelveLords is an innovative platform led by Muhammad Raza — a Cybersecurity Engineer, Author, and Entrepreneur dedicated to advancing technology, strengthening cybersecurity awareness, and bringing timeless philosophical insights into the modern world.
            </p>
            
            <p>
              At TwelveLords, we believe that technology should not only drive progress but also promote security, responsibility, and meaningful impact. Our mission is to create a bridge between modern technological advancement and timeless wisdom, helping individuals and communities navigate the digital age with awareness and purpose.
            </p>
            
            <p>
              Our work is primarily focused on cybersecurity, data protection, and secure technological development. We actively promote awareness regarding the protection of personal information, digital assets, and cybersecurity best practices to help create a safer technological environment for everyone.
            </p>
            
            <p>
              Beyond technology, TwelveLords also explores how philosophical insights and timeless principles can be applied practically in today’s world. By combining philosophy with modern innovation, we aim to provide perspectives that encourage growth, ethical thinking, and purposeful use of technology.
            </p>
          </motion.div>

          {/* Divider */}
          <div className="w-full h-px bg-black/10 my-24" />

          {/* Vision Callout Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="border-3 border-black p-8 sm:p-14 bg-[#DBDAD8] text-center shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all duration-300 mb-24"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/85 block mb-4">
              Our Vision
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-black leading-tight uppercase tracking-tight max-w-xl mx-auto">
              To build a future where technology is secure, innovation is responsible, and timeless wisdom continues to guide the modern world.
            </h2>
          </motion.div>

          {/* Mission Bullet Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="text-center mb-10">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/85 block mb-2">
                Action & Purpose
              </span>
              <h2 className="text-3xl font-black text-black uppercase tracking-tight">
                Our Mission
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-5 bg-[#DBDAD8]/20 p-6 sm:p-10 border border-[#dcdcdc] rounded-lg">
              {[
                "Promote cybersecurity awareness and digital safety",
                "Encourage stronger protection of data and information",
                "Share insights on technological advancements and innovation",
                "Apply timeless philosophical principles to modern challenges",
                "Inspire secure, ethical, and meaningful technological progress"
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="h-6 w-6 rounded-full bg-black flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <CheckCircle2 className="h-3.5 w-3.5 text-white" />
                  </div>
                  <p className="text-black/85 text-base font-semibold leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Closing Statement Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-28 py-12 border-t border-black/10 text-center flex flex-col items-center justify-center"
          >
            <p className="text-xl sm:text-2xl font-serif italic text-black/95 max-w-2xl leading-relaxed">
              “At TwelveLords, we are committed to creating a world where technology and wisdom move forward together.”
            </p>
            <div className="w-12 h-0.5 bg-black mt-8" />
          </motion.div>

        </div>
      </section>

      {/* Bottom CTA Block matching other page flows */}
      <section className="bg-[#DBDAD8] py-16 border-t-[3px] border-black">
        <div className="container-tight px-6 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-8 text-black">
            <div className="text-center lg:text-left">
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-black/65 block mb-1">
                Explore More
              </span>
              <p className="text-xl sm:text-2xl font-black italic tracking-tight">
                Empowering minds. Securing progress.
              </p>
            </div>
            <div className="w-px h-12 bg-black/20 hidden lg:block" />
            <p className="max-w-sm text-black/85 text-sm leading-relaxed hidden lg:block font-medium italic">
              Read our modern insights or explore our technical products and secure engineering solutions.
            </p>
          </div>

          <div className="flex gap-4">
            <Link 
              href="/articles"
              className="bg-black hover:bg-black/90 text-white px-8 py-4 rounded-full font-black uppercase text-xs tracking-widest transition-all flex items-center gap-2.5 shadow-md active:scale-95"
            >
              Read Articles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
