"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { articles } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
  const router = useRouter();

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!searchQuery.trim()) return;

    // Find the best match (simple case-insensitive title search)
    const match = articles.find(article => 
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (match) {
      router.push(`/articles/${match.slug}`);
    } else {
      alert("No article found with that name. Please try another search.");
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
            Welcome to hundreds of the best articles on self-improvement, productivity, relationships, and living a better life. You can browse the articles <span className="italic underline underline-offset-4 decoration-black/20">by topic</span>, <span className="italic underline underline-offset-4 decoration-black/20">by date</span>, or search by keyword below.
          </motion.p>
        </div>
      </section>

      {/* Orange Search Bar Section */}
      <section className="bg-[#FF5F1F] py-6 px-6 border-b-[3px] border-black flex items-center">
        <div className="container-tight flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-black font-bold text-lg md:text-xl tracking-tight uppercase mb-0">
            Looking for something specific?
          </h2>
          <form 
            onSubmit={handleSearch}
            className="relative w-full md:w-[400px] group"
          >
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Type to search..." 
              className="w-full bg-white rounded-full py-3 px-6 pr-24 outline-none border-2 border-transparent focus:border-black transition-all text-black font-medium"
            />
            <button 
              type="submit"
              className="absolute right-1 top-1 bottom-1 bg-[#111] text-white px-6 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors"
            >
              Search
            </button>
          </form>
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
                  href={`/topics/${category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#111] hover:text-black transition-all group"
                >
                  <div className="w-8 h-8 rounded-full bg-[#111] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                  Read more about {category}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
