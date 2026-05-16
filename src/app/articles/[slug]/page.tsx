"use client";

import { use } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { articles } from "@/lib/data";
import { notFound } from "next/navigation";
import { ArticleHeader } from "@/components/ArticleHeader";
import { AudioPlayer } from "@/components/AudioPlayer";
import { ArticleSidebar } from "@/components/ArticleSidebar";
import { AuthorCard } from "@/components/AuthorCard";
import { motion } from "framer-motion";

export default function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const article = articles.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background pt-44 pb-24 sm:pt-52 mt-[10px]">
      <div className="container-tight px-6 mb-12">
        <Link 
          href="/articles" 
          className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-xs hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          BACK TO ARTICLES
        </Link>
      </div>

      <article className="container-tight px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="flex-1 max-w-4xl mx-auto lg:mx-0">
            <ArticleHeader
              category={article.category}
              title={article.title}
              subtitle={article.subtitle}
              author={article.author}
              authorImage={article.authorImage}
              publishDate={article.publishDate}
              readTime={article.readTime}
            />

            <AudioPlayer content={article.content} />

            {/* Article Content Area */}
            <div className="prose prose-lg prose-black max-w-none">
              <div className="space-y-8 text-[#111] leading-[1.8] text-lg md:text-xl font-medium">
                {article.content.map((block, index) => {
                  if (block.startsWith("## ")) {
                    return (
                      <h2 key={index} className="text-3xl md:text-4xl font-bold text-black mt-16 mb-8 uppercase tracking-tight">
                        {block.replace("## ", "")}
                      </h2>
                    );
                  }
                  if (block.startsWith("> ")) {
                    return (
                      <blockquote key={index} className="border-l-4 border-primary pl-8 py-4 my-12 italic text-2xl md:text-3xl text-muted-foreground font-semibold">
                        {block.replace("> ", "")}
                      </blockquote>
                    );
                  }
                  return (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                    >
                      {block}
                    </motion.p>
                  );
                })}
              </div>
            </div>

            <AuthorCard 
              author={article.author} 
              authorImage={article.authorImage} 
              authorBio={article.authorBio} 
            />
          </div>

          <ArticleSidebar 
            author={article.author} 
            authorImage={article.authorImage} 
            authorBio={article.authorBio} 
          />
        </div>
      </article>
    </main>
  );
}
