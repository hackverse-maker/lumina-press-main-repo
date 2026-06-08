"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { Menu, X, Heart, Instagram, Facebook, Twitter, Youtube, Music2, Music, Podcast, ChevronDown } from "lucide-react";
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
  { icon: XIcon, href: "https://twitter.com/twelvelords", label: "X / Twitter", color: "text-white" },
  { icon: Youtube, href: "https://youtube.com/@twelvelords", label: "YouTube", color: "text-[#FF0000]" },
  { icon: Music2, href: "https://www.tiktok.com/@twelvelords", label: "TikTok", color: "text-white" },
  { icon: Music, href: "https://open.spotify.com/episode/0DncvmZNsruO4zWw4KHB76", label: "Spotify", color: "text-[#1DB954]" },
  { icon: Podcast, href: "https://podcasts.apple.com/gb/podcast/the-weakest-link/id1895144412", label: "Apple Podcast", color: "text-[#872EC4]" },
];

const links = [
  { label: "Home", href: "/" },
  { label: "Study", href: "#", hasDropdown: true },
  { label: "Book", href: "/books" },
  { label: "Tech", href: "/tech" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export const Navbar = () => {
  const { favorites, setIsFavoritesOpen } = useAppState();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [studyDropdownOpen, setStudyDropdownOpen] = useState(false);
  const [mobileStudyOpen, setMobileStudyOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <header
      className="absolute top-0 inset-x-0 z-50 transition-all duration-500 flex flex-col bg-black shadow-sm"
    >
      <div className="w-full px-6 sm:px-12 flex items-center justify-between py-4">
        <div className="flex-shrink-0">
          <Logo />
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => {
            if (link.hasDropdown) {
              return (
                <div
                  key={link.label}
                  className="relative py-2"
                  onMouseEnter={() => setStudyDropdownOpen(true)}
                  onMouseLeave={() => setStudyDropdownOpen(false)}
                >
                  <button
                    className="flex items-center gap-1 text-[14px] font-[400] uppercase tracking-[0.2em] text-white hover:text-gray-300 transition-colors"
                  >
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${studyDropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                  
                  <AnimatePresence>
                    {studyDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 -translate-x-1/2 mt-3 w-52 bg-black border border-white/10 rounded-xl shadow-premium overflow-hidden z-[100]"
                      >
                        <div className="py-2 flex flex-col bg-black">
                          <Link
                            href="/articles"
                            className="px-5 py-3 text-[12px] font-[400] uppercase tracking-[0.2em] text-white hover:bg-white/10 hover:text-primary transition-all text-left flex items-center justify-between group/item"
                          >
                            <span>Articles</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-white scale-0 group-hover/item:scale-100 transition-transform" />
                          </Link>
                          <Link
                            href="/latest-uploads"
                            className="px-5 py-3 text-[12px] font-[400] uppercase tracking-[0.2em] text-white hover:bg-white/10 hover:text-primary transition-all text-left flex items-center justify-between group/item"
                          >
                            <span>Latest Uploads</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-white scale-0 group-hover/item:scale-100 transition-transform" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-[14px] font-[400] uppercase tracking-[0.2em] text-white hover:text-gray-300 transition-colors group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-full h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 sm:gap-6">
          <button
            onClick={() => setIsFavoritesOpen(true)}
            className="relative text-white hover:text-gray-300 transition-colors p-2.5 group"
            aria-label="Favorites"
          >
            <Heart className="h-5 w-5" />
            {favorites.length > 0 && (
              <span className="absolute top-1 right-1 h-4 w-4 bg-primary text-white text-[9px] font-black rounded-full flex items-center justify-center border-2 border-background">
                {favorites.length}
              </span>
            )}
          </button>

          <button
            className="lg:hidden h-11 w-11 flex items-center justify-center rounded-full bg-white/10 text-white z-[70] transition-all active:scale-95 hover:bg-white/20"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Modern Mobile Menu with Blur Effect */}
      <AnimatePresence>
        {open && (
          <>
            {/* Background Overlay with Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-background/60 lg:hidden"
            />

            {/* Slide-out Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-[85%] max-w-sm z-[65] bg-black shadow-2xl border-l border-white/10 lg:hidden flex flex-col overflow-hidden"
            >
              <div className="flex flex-col h-full pt-24 px-8 pb-12 overflow-y-auto">
                <div className="flex flex-col gap-6">
                  {links.map((link, i) => {
                    if (link.hasDropdown) {
                      return (
                        <div key={link.label} className="flex flex-col gap-3">
                          <button
                            onClick={() => setMobileStudyOpen(!mobileStudyOpen)}
                            className="text-[18px] font-[350] text-white hover:text-gray-200 transition-colors flex items-center justify-between w-full text-left"
                          >
                            <span>{link.label}</span>
                            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileStudyOpen ? "rotate-180" : ""}`} />
                          </button>
                          
                          <AnimatePresence>
                            {mobileStudyOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden flex flex-col gap-4 pl-4 pt-1"
                              >
                                <Link
                                  href="/articles"
                                  onClick={() => {
                                    setOpen(false);
                                    setMobileStudyOpen(false);
                                  }}
                                  className="text-[16px] font-[300] text-white/70 hover:text-white transition-colors"
                                >
                                  Articles
                                </Link>
                                <Link
                                  href="/latest-uploads"
                                  onClick={() => {
                                    setOpen(false);
                                    setMobileStudyOpen(false);
                                  }}
                                  className="text-[16px] font-[300] text-white/70 hover:text-white transition-colors"
                                >
                                  Latest Uploads
                                </Link>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="text-[18px] font-[350] text-white hover:text-gray-200 transition-colors flex items-center justify-between group"
                        >
                          {link.label}
                          <span className="h-1 w-0 bg-primary group-hover:w-8 transition-all duration-300" />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-auto pt-10 flex flex-col gap-8">
                  <div className="h-px w-full bg-gradient-to-r from-border to-transparent" />

                  <div className="space-y-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-white/60">Connect With Us</span>
                    <div className="flex flex-wrap gap-4">
                      {social.map((s, i) => (
                        <motion.a
                          key={i}
                          href={s.href}
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + (i * 0.05) }}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`h-10 w-10 rounded-full bg-white/10 flex items-center justify-center transition-transform hover:scale-110 ${s.color}`}
                        >
                          <s.icon className="h-5 w-5" />
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-white/60 font-bold text-sm uppercase tracking-widest">Twelve Lords</span>
                    <span className="text-white/40 text-xs">Crafted for thinkers and creators</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
