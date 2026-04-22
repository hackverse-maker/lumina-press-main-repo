"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import type { Article } from "@/lib/data";

interface ArticleCardProps {
  article: Article;
  index?: number;
}

export const ArticleCard = ({ article, index = 0 }: ArticleCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group flex flex-col md:flex-row gap-8 py-12 border-b border-border last:border-0"
    >
      <div className="w-full md:w-[40%] aspect-[16/10] overflow-hidden rounded-2xl bg-secondary shrink-0">
        <img
          src={article.thumb}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      
      <div className="flex flex-col justify-center flex-1">
        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-accent uppercase tracking-widest mb-4">
          <span className="flex items-center gap-1.5"><User className="h-3.5 w-3.5" /> {article.author}</span>
          <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {article.publishDate}</span>
          <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {article.readTime}</span>
        </div>
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold leading-tight group-hover:text-accent transition-colors duration-300 text-foreground">
          {article.title.split(' ').slice(0, -1).join(' ')} <span className="text-gradient-accent">{article.title.split(' ').pop()}</span>
        </h2>
        
        <p className="mt-4 text text-muted-foreground leading-relaxed line-clamp-3">
          {article.preview}
        </p>
        
        <div className="mt-8">
          <button className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide group/btn">
            Read Article 
            <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.article>
  );
};
