"use client";

import { motion } from "framer-motion";
import { articles } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

export const Articles = () => {
  // Showcase the first 3 articles on the landing page
  const featuredArticles = articles.slice(0, 3);

  return (
    <section id="articles" className="section-padding bg-[#DBDAD8] relative overflow-hidden">
      <div className="container-tight relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-black/85 text-xs font-bold tracking-[0.2em] uppercase mb-4"
          >
            Latest Insights
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-black mx-auto"
          >
            Thought, Technology & the Modern World
          </motion.h2>
        </div>
 
        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-left">
          {featuredArticles.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/60 border border-[#dcdcdc] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-sm hover:border-black/20 hover:bg-white"
            >
              <Link href={`/articles/${article.slug}`} className="block h-full flex flex-col justify-between group">
                <div>
                  <div className="flex items-center gap-4 text-[10px] font-bold text-black/70 uppercase tracking-widest mb-6">
                    <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-black/55" /> {article.author}</span>
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-black/55" /> {article.publishDate}</span>
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-bold text-black transition-colors duration-300 leading-tight mb-4 group-hover:underline underline-offset-4 decoration-black/25">
                    {article.title}
                  </h3>
                  
                  <p className="text-black leading-relaxed text-sm line-clamp-4 mb-6">
                    {article.preview}
                  </p>
                </div>
                
                <div className="mt-auto pt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black/75 group-hover:text-black transition-all">
                  Read More <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Read All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <Link href="/articles">
            <button className="bg-black text-white hover:bg-black/90 px-10 py-4 flex items-center justify-center gap-3 text-base font-bold rounded-full transition-all">
              Read Articles <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
