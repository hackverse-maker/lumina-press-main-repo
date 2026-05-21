"use client";

import { motion } from "framer-motion";
import { books } from "@/lib/data";
import Link from "next/link";
import { ShoppingCart, Download, Check } from "lucide-react";

export const BookSection = () => {
  const mainBook = books.find(book => book.id === "self-as-witness");

  if (!mainBook) return null;

  return (
    <section className="relative overflow-hidden bg-[#2B4A4A] py-12 lg:py-16" id="books">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/20 rounded-full animate-spin-slow opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/10 rounded-full animate-spin-slow opacity-10" style={{ animationDirection: 'reverse' }} />
      </div>

      <div className="container-tight relative z-10 px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-20 items-center">
          
          {/* LEFT: Book Information/Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-white space-y-6 sm:space-y-8 order-1"
          >
            <div>
              <h2 className="text-4xl sm:text-6xl lg:text-[72px] font-semibold font-sans mb-4 sm:mb-6 leading-[1.1] tracking-tighter uppercase text-orange-500">
                <span className="block">THE SELF</span>
                <span className="block">AS WITNESS</span>
              </h2>
              
              <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed font-medium max-w-xl">
                {mainBook.description}
              </p>
            </div>

            {/* Features/Details */}
            {mainBook.benefits && (
              <div className="space-y-4 pt-2">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#FF6B00]">Core Highlights</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {mainBook.benefits.map((benefit) => (
                    <li key={benefit.title} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-[#FF6B00] shrink-0" />
                      <span className="text-sm sm:text-base font-bold text-white/80">{benefit.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Buttons (Desktop only) */}
            <div className="hidden lg:flex pt-2 flex-col sm:flex-row items-center gap-4">
              <Link 
                href={`/books/${mainBook.id}`}
                className="w-full sm:w-auto bg-[#FF6B00] hover:bg-[#E65100] text-white px-8 py-4 lg:px-10 lg:py-5 text-lg font-black uppercase tracking-wider rounded-md transition-all shadow-lg hover:shadow-[#FF6B00]/40 hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 whitespace-nowrap"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* RIGHT: Book Image/Product Showcase Area */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -30 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 15 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative flex flex-col items-center justify-center perspective-[1000px] order-2"
          >
            <div className="relative group w-full flex justify-center">
              {/* Shadow behind book */}
              <div className="absolute -bottom-10 -right-10 w-full h-full bg-black/40 blur-3xl rounded-lg -z-10 group-hover:bg-black/50 transition-all duration-500" />
              
              <motion.div 
                whileHover={{ rotateY: 5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-full max-w-[340px] sm:max-w-[420px] aspect-[3/4.5] shadow-[40px_40px_80px_-15px_rgba(0,0,0,0.8)] rounded-r-sm overflow-hidden transform-gpu"
              >
                <img
                  src={mainBook.image}
                  alt={mainBook.title}
                  className="w-full h-full object-cover"
                />
                {/* Book Spine Edge effect */}
                <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-r from-black/40 to-transparent" />
                {/* Surface Shine */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
              </motion.div>
            </div>

            {/* Mobile Learn More button (under the image) */}
            <div className="flex lg:hidden pt-8 w-full justify-center">
              <Link 
                href={`/books/${mainBook.id}`}
                className="w-full sm:w-auto bg-[#FF6B00] hover:bg-[#E65100] text-white px-8 py-4 text-lg font-black uppercase tracking-wider rounded-md transition-all shadow-lg hover:shadow-[#FF6B00]/40 hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 whitespace-nowrap"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
