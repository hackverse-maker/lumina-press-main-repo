"use client";

import { useState } from "react";
import Link from "next/link";
import { books as allBooks } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Filter out hardware/non-book items
const bookData = allBooks.filter(book => book.id === "self-as-witness");

export default function BooksPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-[#DBDAD8] text-black pb-24">
      {/* Hero Section - Updated with requested text */}
      <section className="bg-[#DBDAD8] pt-44 pb-24 md:pt-52 md:pb-32 px-6 border-b-[3px] border-black mt-[10px]">
        <div className="container-tight text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl md:text-8xl font-bold text-black mb-8 tracking-tighter"
          >
            Books
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto text-lg md:text-xl text-black leading-relaxed font-medium"
          >
            With over 20 million books sold in 65 languages, and number-one bestsellers in over a dozen countries, I can confidently say that my mom is very proud.
          </motion.p>
        </div>
      </section>

      {/* Books Grid Section - Mark Manson Inspired */}
      <section className="py-24 px-6 bg-[#DBDAD8]">
        <div className="container-tight">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0 relative">
            
            {/* Vertical Line for 2-column layout on desktop */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-black/20 hidden lg:block -translate-x-1/2" />

            {bookData.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center text-center px-12 pb-24 relative"
              >
                {/* Book Image */}
                <div className="relative w-full max-w-[320px] aspect-[3/4.5] mb-16 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:scale-[1.02]">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Horizontal Line above title */}
                <div className="w-[80%] h-[1px] bg-black/40 mb-10" />

                {/* Content */}
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-black leading-tight uppercase tracking-tight max-w-sm">
                  {book.title}
                </h3>

                <p className="text-black/80 leading-relaxed font-medium text-base md:text-lg mb-10 max-w-md">
                  {book.description.split('. ')[0]}. {book.description.split('. ')[1]}.
                </p>

                {/* Expandable Details */}
                <div className="w-full max-w-md">
                  <AnimatePresence>
                    {expandedId === book.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-black/70 leading-relaxed font-medium text-sm mb-8 text-left">
                          {book.description}
                        </p>
                        {book.benefits && (
                          <div className="mb-10 space-y-3 text-left">
                            <h4 className="text-xs font-black uppercase tracking-widest text-black">Key Takeaways:</h4>
                            {book.benefits.map((benefit, i) => (
                              <div key={i} className="flex items-start gap-2 text-sm font-medium text-black/60">
                                <div className="w-1.5 h-1.5 rounded-full bg-black mt-1.5 shrink-0" />
                                <span>{benefit}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex flex-col items-center gap-4">
                    <button
                      onClick={() => toggleExpand(book.id)}
                      className="bg-[#111] text-white px-12 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:bg-black transition-all shadow-lg active:scale-95"
                    >
                      {expandedId === book.id ? "Hide Details" : "Learn More"}
                    </button>
                    
                    <Link
                      href={`/books/${book.id}`}
                      className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40 hover:text-black transition-colors"
                    >
                      View the book archive
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Empty slots for visual balance if only one book */}
            {bookData.length === 1 && (
              <div className="hidden lg:flex flex-col items-center justify-center p-24 opacity-10 grayscale pointer-events-none">
                 <div className="w-full max-w-[320px] aspect-[3/4.5] border-2 border-dashed border-black mb-16" />
                 <div className="w-[80%] h-[1px] bg-black mb-10" />
                 <div className="h-8 w-48 bg-black mb-8" />
                 <div className="h-20 w-full bg-black" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer / Newsletter */}
      <section className="bg-white py-24 border-t-[3px] border-black">
        <div className="container-tight px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tighter">Stay Notified</h2>
          <p className="text-black/60 max-w-xl mx-auto mb-12 font-medium">
            Join our mailing list to receive updates on new releases and exclusive content.
          </p>
          <form className="max-w-md mx-auto flex gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email address"
              className="flex-1 border-[3px] border-black px-6 py-4 outline-none font-bold"
            />
            <button className="bg-black text-white px-8 py-4 font-black uppercase text-xs tracking-widest hover:bg-black/80 transition-all">
              Join
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
