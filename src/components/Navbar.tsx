"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
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
          className={`relative rounded-xl px-4 md:px-6 py-3 transition-all duration-500 backdrop-blur-xl ${
            scrolled
              ? "glass shadow-glass border border-border"
              : "bg-primary/5 border border-border/30"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo on the left */}
            <Link href="/" className="flex-shrink-0">
              <Logo />
            </Link>

            {/* Desktop navigation links in center */}
            <ul className="hidden lg:flex items-center gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="relative px-4 py-2 text-sm font-semibold text-foreground/80 hover:text-foreground transition-colors group"
                  >
                    {l.label}
                    <span className="absolute inset-x-2 -bottom-0.5 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right side: CTA button, theme toggle, and mobile menu */}
            <div className="flex items-center gap-2 md:gap-3">
              <Link
                href="#contact"
                className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-accent text-accent-foreground px-4 py-2.5 text-sm font-semibold shadow-accent-glow hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--accent)/0.6)] transition-all duration-300"
              >
                <Phone className="h-4 w-4" />
                Get Free Quote
              </Link>
              <ThemeToggle />
              <button
                className="lg:hidden h-10 w-10 rounded-lg border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                onClick={() => setOpen(!open)}
                aria-label="Menu"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {open && (
            <div className="lg:hidden mt-4 pt-4 border-t border-border animate-fade-in">
              <ul className="flex flex-col gap-1">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-secondary transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2.5 rounded-lg text-sm font-semibold bg-accent text-accent-foreground hover:opacity-90 transition-opacity"
                  >
                    Get Free Quote
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};
