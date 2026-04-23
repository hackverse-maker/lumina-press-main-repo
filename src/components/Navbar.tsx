"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, Heart, Instagram, Facebook, Music2, Music, Podcast } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { useAppState } from "@/context/AppStateContext";

const social = [
  { icon: Instagram, href: "https://www.instagram.com/twelvelords", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/share/1CRfTGwmLb/", label: "Facebook" },
  { icon: Music2, href: "https://www.tiktok.com/@twelvelords", label: "TikTok" },
  { icon: Music, href: "https://open.spotify.com/episode/0DncvmZNsruO4zWw4KHB76", label: "Spotify" },
  { icon: Podcast, href: "https://podcasts.apple.com/gb/podcast/the-weakest-link/id1895144412", label: "Apple Podcast" },
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
      {/* Social Top Bar */}
      <div className="w-full py-1.5 bg-background/50 backdrop-blur-sm border-b border-border/30 flex justify-center items-center gap-6">
        {social.map((s, i) => (
          <a
            key={i}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="text-foreground/60 hover:text-primary transition-colors duration-300 flex items-center"
          >
            <s.icon className="h-4 w-4" />
          </a>
        ))}
      </div>

      <div className={`container-tight px-4 sm:px-6 flex items-center transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}>
        {/* LEFT: Logo */}
        <div className="flex-shrink-0 w-auto lg:w-48">
          <Logo />
        </div>

        {/* CENTER: Navigation Links */}
        <nav className="hidden sm:flex items-center gap-10 mx-auto">
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
        <div className="flex items-center gap-3 sm:gap-6 w-auto sm:w-48 justify-end">
          <div className="hidden sm:flex items-center gap-2">
            <button 
              onClick={() => setIsFavoritesOpen(true)}
              className="relative text-foreground/70 hover:text-primary transition-colors p-2 group"
            >
              <Heart className="h-5 w-5" />
              {favorites.length > 0 && (
                <span className="absolute top-0 right-0 h-4 w-4 bg-primary text-white text-[9px] font-black rounded-full flex items-center justify-center border border-background">
                  {favorites.length}
                </span>
              )}
            </button>
            <ThemeToggle />
          </div>
          

          {/* Mobile Menu Toggle */}
          <button
            className="sm:hidden h-10 w-10 flex items-center justify-center rounded-full bg-secondary text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container-tight px-6 py-8 flex flex-col gap-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-semibold text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-6 border-t border-border flex items-center justify-between">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
