"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, ArrowUpRight, ShoppingCart, Heart } from "lucide-react";
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
  const { favorites, cart } = useAppState();
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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container-tight">
        <nav
          className={`relative rounded-2xl px-4 md:px-6 py-4 transition-all duration-500 backdrop-blur-xl ${
            scrolled
              ? "glass shadow-glass border border-white/10"
              : "bg-background/30 border border-white/5"
          }`}
        >
          {/* Top row: logo left on mobile, centered on desktop with action buttons */}
          <div className="flex items-center justify-between md:flex-col md:gap-4">
            {/* Logo - left on mobile, centered on desktop */}
            <div className="flex-shrink-0">
              <Logo />
            </div>

            {/* Right side buttons - always on the right */}
            <div className="flex items-center gap-2 md:gap-3">
              <Link
                href="/articles"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-accent text-accent-foreground px-5 py-2.5 text-sm font-semibold shadow-accent-glow hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--accent)/0.6)] transition-all duration-300"
              >
                Explore <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/favorites"
                className="relative h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                title="Favorites"
              >
                <Heart className={`h-5 w-5 ${favorites.length > 0 ? "fill-accent text-accent" : ""}`} />
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white shadow-accent-glow">
                    {favorites.length}
                  </span>
                )}
              </Link>
              <button
                className="relative h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                title="Cart"
              >
                <ShoppingCart className={`h-5 w-5 ${cart.length > 0 ? "text-accent" : ""}`} />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white shadow-accent-glow">
                    {cart.length}
                  </span>
                )}
              </button>
              <ThemeToggle />
              <button
                className="lg:hidden h-10 w-10 rounded-full border border-border flex items-center justify-center"
                onClick={() => setOpen(!open)}
                aria-label="Menu"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Desktop navigation: centered below logo */}
          <ul className="hidden lg:flex items-center justify-center gap-2 mt-4 pt-4 border-t border-border">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="relative px-4 py-1.5 text-sm font-medium uppercase tracking-wide text-foreground/80 hover:text-foreground transition-colors group"
                >
                  {l.label}
                  <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile dropdown menu */}
        {open && (
          <div className="lg:hidden mt-2 glass rounded-2xl p-4 animate-fade-in">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-lg text-sm font-medium uppercase tracking-wide hover:bg-secondary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
