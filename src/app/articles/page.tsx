"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { articles } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import Link from "next/link";

// Group articles by category
const groupedArticles = articles.reduce((acc, article) => {
  if (!acc[article.category]) {
    acc[article.category] = [];
  }
  acc[article.category].push(article);
  return acc;
}, {} as Record<string, typeof articles>);

export default function ArticlesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle Escape key to close suggestions
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Compute live suggestions based on searchQuery
  const suggestions = searchQuery.trim()
    ? articles.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.subtitle?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    // Do not redirect directly; instead keep suggestions visible for selection
    if (searchQuery.trim()) {
      setShowSuggestions(true);
    }
  };

  return (
    <main className="min-h-screen bg-[#DBDAD8] text-foreground pb-20">
      {/* Hero Section with 10px gap from navbar */}
      <section className="bg-[#DBDAD8] pt-44 pb-24 md:pt-52 md:pb-32 px-6 border-b-[3px] border-black mt-[10px]">
        <div className="container-tight text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl md:text-8xl font-bold text-black mb-8 tracking-tighter"
          >
            Articles
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-black/90 leading-relaxed font-medium"
          >
            Welcome to hundreds of the best articles on self-improvement, productivity, relationships, and living a better life. You can browse the articles or search by keyword below.
          </motion.p>
        </div>
      </section>

      {/* Orange Search Bar Section */}
      <section className="bg-[#FF5F1F] py-6 px-6 border-b-[3px] border-black flex items-center relative z-40">
        <div className="container-tight flex flex-col md:flex-row items-center justify-between gap-6 w-full">
          <h2 className="text-black font-bold text-lg md:text-xl tracking-tight uppercase mb-0">
            Looking for something specific?
          </h2>
          
          <div ref={searchRef} className="relative w-full md:w-[400px]">
            <form 
              onSubmit={handleSearchSubmit}
              className="relative w-full group"
            >
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                placeholder="Type to search..." 
                className="w-full bg-white rounded-full py-3 px-6 pr-24 outline-none border-2 border-transparent focus:border-black transition-all text-black font-medium placeholder:text-black/45"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setShowSuggestions(false);
                  }}
                  className="absolute right-24 top-1/2 -translate-y-1/2 p-1 text-black/40 hover:text-black transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button 
                type="submit"
                className="absolute right-1 top-1 bottom-1 bg-[#111] text-white px-6 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors"
              >
                Search
              </button>
            </form>

            {/* Premium Animated Suggestions Dropdown */}
            <AnimatePresence>
              {showSuggestions && searchQuery.trim() && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 right-0 mt-3 bg-white border-2 border-black rounded-2xl shadow-premium overflow-hidden z-50 text-left max-h-[380px] overflow-y-auto"
                >
                  <div className="px-4 py-2.5 border-b-2 border-black bg-gray-50 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-widest text-black/60">
                      Suggestions
                    </span>
                    <span className="text-[10px] font-bold text-black/50 bg-black/5 px-2 py-0.5 rounded-full">
                      {suggestions.length} {suggestions.length === 1 ? 'match' : 'matches'}
                    </span>
                  </div>

                  {suggestions.length > 0 ? (
                    <div className="py-1 divide-y divide-gray-100">
                      {suggestions.map((article) => (
                        <div
                          key={article.slug}
                          onClick={() => {
                            router.push(`/articles/${article.slug}`);
                            setShowSuggestions(false);
                          }}
                          className="flex items-center gap-4 px-4 py-3 hover:bg-[#FF5F1F]/10 cursor-pointer transition-all border-l-4 border-transparent hover:border-black group"
                        >
                          {article.thumb && (
                            <div className="w-14 h-10 rounded-lg overflow-hidden bg-secondary shrink-0 border border-black/10 shadow-sm">
                              <img
                                src={article.thumb}
                                alt={article.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-bold text-black group-hover:text-black transition-colors truncate">
                              {article.title}
                            </h4>
                            <div className="flex items-center gap-2 text-[10px] text-black/50 mt-1 font-semibold">
                              <span className="uppercase text-[9px] bg-black/5 px-1.5 py-0.5 rounded text-black/70 font-bold">
                                {article.category}
                              </span>
                              <span>•</span>
                              <span>{article.readTime}</span>
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-black/30 group-hover:text-black group-hover:translate-x-0.5 transition-all shrink-0" />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-6 text-center text-sm text-black/55 font-medium">
                      No articles found for <span className="font-bold text-black">"{searchQuery}"</span>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Articles by Topic Section */}
      <section className="py-24 px-6 bg-[#DBDAD8]">
        <div className="container-tight">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-black mb-20 tracking-tight"
          >
            Articles by Topic
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20 lg:gap-x-24">
            {Object.entries(groupedArticles).map(([category, categoryArticles], categoryIndex) => (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="flex flex-col"
              >
                {/* Category Header */}
                <div className="mb-6">
                  <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-black/65 mb-3">
                    {category}
                  </h3>
                  <div className="w-full h-[2px] bg-black" />
                </div>

                {/* Articles List */}
                <div className="flex flex-col gap-4 mb-8">
                  {categoryArticles.map((article) => (
                    <div 
                      key={article.slug}
                      className="bg-white/60 border border-[#dcdcdc] p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-sm hover:border-black/20 hover:bg-white text-left"
                    >
                      <Link href={`/articles/${article.slug}`} className="group flex flex-col justify-between h-full">
                        <div>
                          <div className="flex items-center gap-3 text-[10px] font-bold text-black/65 uppercase tracking-widest mb-3">
                            <span>{article.publishDate}</span>
                          </div>
                          
                          <h4 className="text-lg md:text-xl font-bold text-black leading-tight mb-2 group-hover:underline underline-offset-4 decoration-black/25">
                            {article.title}
                          </h4>
                          
                          <p className="text-black/90 text-xs sm:text-sm leading-relaxed line-clamp-2 mb-4">
                            {article.preview}
                          </p>
                        </div>
                        
                        <div className="text-[10px] font-bold uppercase tracking-wider text-black/75 group-hover:text-black transition-colors flex items-center gap-1.5">
                          Read Article <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>

                {/* Read More Link */}
                <Link 
                  href={`/articles/${categoryArticles[0]?.slug || ''}`}
                  className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#111] hover:text-black transition-all group"
                >
                  <span>Read Articles</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
