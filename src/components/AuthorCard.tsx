"use client";

import { Instagram, Twitter, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

interface AuthorCardProps {
  author: string;
  authorImage: string;
  authorBio: string;
}

export const AuthorCard = ({ author, authorImage, authorBio }: AuthorCardProps) => {
  return (
    <section className="mt-20 pt-16 border-t border-border/50">
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
        <div className="flex-1">
          <div className="text-xs font-bold tracking-[0.4em] uppercase text-primary mb-4">
            Writer & Contributor
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-black mb-6 uppercase tracking-tighter">
            {author}
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            {authorBio}
          </p>
          
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-4">
              <a href="#" className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-black hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-black hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-black hover:text-white transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            
            <Link 
              href="/about" 
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black hover:gap-3 transition-all"
            >
              More by {author} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
