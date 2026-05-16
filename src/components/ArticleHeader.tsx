"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Share2 } from "lucide-react";

interface ArticleHeaderProps {
  category: string;
  title: string;
  subtitle?: string;
  author: string;
  authorImage: string;
  publishDate: string;
  readTime: string;
}

export const ArticleHeader = ({
  category,
  title,
  subtitle,
  author,
  authorImage,
  publishDate,
  readTime,
}: ArticleHeaderProps) => {
  return (
    <header className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-primary mb-6">
          {category}
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-black mb-6 leading-[1.1]">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-3xl">
            {subtitle}
          </p>
        )}

        <div className="flex flex-wrap items-center justify-between gap-6 pt-10 border-t border-border/50">
          <div className="flex items-center gap-4">
            <div>
              <div className="text-sm font-bold text-black uppercase tracking-widest">{author}</div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                <span className="flex items-center gap-1.5 uppercase tracking-wider font-medium">
                  <Calendar className="w-3 h-3" /> {publishDate}
                </span>
                <span className="flex items-center gap-1.5 uppercase tracking-wider font-medium">
                  <Clock className="w-3 h-3" /> {readTime}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-black hover:text-white transition-all">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </header>
  );
};
