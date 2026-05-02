"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { Menu, X, Heart, Instagram, Facebook, Music2, Music, Podcast, Twitter, Youtube } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { useAppState } from "@/context/AppStateContext";

const XIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24h-2.19L17.61 20.644Z" />
  </svg>
);

const social = [
  { icon: Instagram, href: "https://www.instagram.com/twelvelords", label: "Instagram", color: "stroke-[url(#ig-grad)] text-[#E4405F]" },
  { icon: Facebook, href: "https://www.facebook.com/share/1CRfTGwmLb/", label: "Facebook", color: "text-[#1877F2]" },
  { icon: XIcon, href: "https://twitter.com/twelvelords", label: "X / Twitter", color: "text-black dark:text-white" },
  { icon: Youtube, href: "https://youtube.com/@twelvelords", label: "YouTube", color: "text-[#FF0000]" },
  { icon: Music2, href: "https://www.tiktok.com/@twelvelords", label: "TikTok", color: "text-black dark:text-white" },
  { icon: Music, href: "https://open.spotify.com/episode/0DncvmZNsruO4zWw4KHB76", label: "Spotify", color: "text-[#1DB954]" },
  { icon: Podcast, href: "https://podcasts.apple.com/gb/podcast/the-weakest-link/id1895144412", label: "Apple Podcast", color: "text-[#872EC4]" },
];

const links = [
  { label: "Home", href: "/" },
  { label: "Articles", href: "/articles" },
  { label: "Books", href: "/books" },
  { label: "Tech", href: "/tech" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export const Navbar = () => {
  const { favorites, setIsFavoritesOpen } = useAppState();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 flex flex-col ${
        scrolled ? "bg-background/70 backdrop-blur-md shadow-glass border-b border-border/50" : "bg-transparent"
      }`}
    >
      {/* Social Top Bar - Hidden on small mobile to save space */}
      <div className="hidden sm:flex w-full py-1.5 bg-background/50 backdrop-blur-sm border-b border-border/30 justify-center items-center gap-6">
        {social.map((s, i) => (
          <a
            key={i}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className={`transition-colors duration-300 flex items-center hover:opacity-70 ${s.color}`}
          >
            <s.icon className="h-4 w-4" />
          </a>
        ))}
      </div>

      <div className={`container-tight px-4 sm:px-6 flex items-center transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}>
        {/* LEFT: Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* CENTER: Navigation Links - Desktop Only */}
        <nav className="hidden lg:flex items-center gap-10 mx-auto">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-[15px] font-semibold text-foreground/70 hover:text-foreground transition-colors group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </Link>
          ))}
        </nav>

        {/* RIGHT: Actions */}
        <div className="flex items-center gap-3 sm:gap-6 ml-auto">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsFavoritesOpen(true)}
              className="relative text-foreground/70 hover:text-primary transition-colors p-3 group"
              aria-label="Favorites"
            >
              <Heart className="h-5 w-5" />
              {favorites.length > 0 && (
                <span className="absolute top-1 right-1 h-4 w-4 bg-primary text-white text-[9px] font-black rounded-full flex items-center justify-center border border-background">
                  {favorites.length}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden h-11 w-11 flex items-center justify-center rounded-full bg-secondary text-foreground z-[60] transition-transform active:scale-90"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-background/98 backdrop-blur-2xl lg:hidden flex flex-col"
          >
            <div className="flex flex-col h-full pt-32 px-8 pb-12">
              <div className="flex flex-col gap-8">
                {links.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-4xl font-bold text-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-8">
                <div className="h-[1px] w-full bg-border" />
                
                {/* Mobile Socials */}
                <div className="flex flex-wrap gap-6">
                  {social.map((s, i) => (
                    <motion.a
                      key={i}
                      href={s.href}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 + 0.5 }}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`h-12 w-12 rounded-full bg-secondary flex items-center justify-center ${s.color}`}
                    >
                      <s.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-foreground/40 font-medium">Lumina Press</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
