"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, ArrowUpRight, Heart } from "lucide-react";
import { useAppState } from "@/context/AppStateContext";

const links = [
  { label: "Home", href: "/" },
  { label: "Articles", href: "/articles" },
  { label: "Books", href: "/books" },
  { label: "Tech", href: "/tech" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export const Navbar = () => {
  const { favorites } = useAppState();
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
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container-tight px-4">
        <nav
          className={`relative rounded-3xl px-4 md:px-8 py-3 transition-all duration-500 backdrop-blur-xl ${
            scrolled
              ? "glass shadow-glass border border-white/10"
              : "bg-background/20 border border-white/5"
          }`}
        >
          <div className="flex items-center justify-between min-h-[60px]">
            {/* LEFT: Logo Positioning */}
            <div className="flex-1 flex justify-start">
              <Logo />
            </div>

            {/* CENTER: Navigation Links (Desktop) */}
            <div className="hidden lg:absolute lg:inset-0 lg:flex lg:items-center lg:justify-center pointer-events-none">
              <ul className="flex items-center gap-1 pointer-events-auto">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="relative px-5 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-foreground/70 hover:text-accent transition-all duration-300 group"
                    >
                      {l.label}
                      <span className="absolute left-5 right-5 -bottom-1 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT: Actions */}
            <div className="flex-1 flex justify-end items-center gap-2 md:gap-4">
              <Link
                href="/favorites"
                className="relative h-11 w-11 rounded-2xl border border-white/5 flex items-center justify-center hover:bg-white/5 transition-all text-foreground/80 hover:text-accent"
                title="Favorites"
              >
                <Heart className={`h-5 w-5 ${favorites.length > 0 ? "fill-accent text-accent" : ""}`} />
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[8px] font-black text-white shadow-accent-glow">
                    {favorites.length}
                  </span>
                )}
              </Link>
              
              <div className="hidden sm:block">
                <ThemeToggle />
              </div>

              <button
                className="lg:hidden h-11 w-11 rounded-2xl border border-white/5 flex items-center justify-center bg-white/5"
                onClick={() => setOpen(!open)}
                aria-label="Menu"
              >
                {open ? <X className="h-5 w-5 text-accent" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden mt-3 glass rounded-[2.5rem] p-6 animate-in slide-in-from-top-4 duration-500 border border-white/10">
            <ul className="flex flex-col gap-2">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-accent/10 hover:text-accent transition-all"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Appearance</span>
                <ThemeToggle />
              </div>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
