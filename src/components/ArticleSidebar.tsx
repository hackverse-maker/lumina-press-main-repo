"use client";

import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook, Mail } from "lucide-react";

interface ArticleSidebarProps {
  author: string;
  authorImage: string;
  authorBio: string;
}

export const ArticleSidebar = ({ author, authorImage, authorBio }: ArticleSidebarProps) => {
  return (
    <aside className="hidden lg:block lg:w-80 space-y-12 sticky top-32 self-start h-fit">
      {/* About Author Section */}
      <section>
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">
              About the Author
            </h3>
            <div className="text-sm font-bold text-black uppercase tracking-widest mb-3">{author}</div>
            <p className="text-sm text-muted-foreground leading-relaxed italic">
              "{authorBio}"
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center hover:bg-black hover:text-white transition-all">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center hover:bg-black hover:text-white transition-all">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-black p-8 rounded-3xl text-white">
        <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-white/60 mb-4">
          Newsletter
        </h3>
        <h4 className="text-lg font-bold mb-4">Get the weekly deep-dives.</h4>
        <p className="text-sm text-white/70 mb-6">
          Join 50,000+ readers who receive our latest insights on technology and philosophy.
        </p>
        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 outline-none focus:border-white/50 transition-all text-sm"
          />
          <button className="w-full py-3 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-white/90 transition-all">
            Subscribe
          </button>
        </form>
      </section>
    </aside>
  );
};
