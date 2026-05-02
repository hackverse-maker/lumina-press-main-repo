"use client";

import { Logo } from "./Logo";
import Link from "next/link";
import { Instagram, Facebook, Music2, Send, Linkedin, Twitter, Youtube } from "lucide-react";

const XIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24h-2.19L17.61 20.644Z" />
  </svg>
);

const social = [
  { icon: Facebook, href: "https://www.facebook.com/share/1CRfTGwmLb/", label: "Facebook", bgColor: "bg-[#1877F2]" },
  { icon: Instagram, href: "https://www.instagram.com/twelvelords", label: "Instagram", bgColor: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]" },
  { icon: XIcon, href: "https://twitter.com/twelvelords", label: "X / Twitter", bgColor: "bg-[#000000]" },
  { icon: Linkedin, href: "https://linkedin.com/company/twelvelords", label: "LinkedIn", bgColor: "bg-[#0A66C2]" },
  { icon: Youtube, href: "https://youtube.com/@twelvelords", label: "YouTube", bgColor: "bg-[#FF0000]" },
  { icon: Music2, href: "https://www.tiktok.com/@twelvelords", label: "TikTok", bgColor: "bg-[#000000]" },
];

const footerLinks = [
  { 
    title: "Product", 
    links: [
      { label: "Articles", href: "/articles" },
      { label: "Books", href: "/books" },
      { label: "Tech", href: "/tech" },
      { label: "About Us", href: "/about" }
    ] 
  },
  { 
    title: "Company", 
    links: [
      { label: "Our Story", href: "/about" },
      { label: "The Philosophy", href: "/about" },
      { label: "Latest News", href: "/articles" },
      { label: "Contact", href: "/contact" }
    ] 
  },
  { 
    title: "Resources", 
    links: [
      { label: "Help Center", href: "/contact" },
      { label: "Reading List", href: "/books" },
      { label: "Tech Specs", href: "/tech" },
      { label: "Privacy Policy", href: "#" }
    ] 
  },
];

export const Footer = () => {
  return (
    <footer id="footer" className="relative bg-background dark:bg-black text-foreground pt-16 sm:pt-20 pb-10 border-t border-border/50">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      <div className="container-tight px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <Logo />
            </div>
            <p className="mt-5 text-sm text-foreground/70 max-w-sm mx-auto lg:mx-0 leading-relaxed">
              A modern publishing platform for thinkers, writers and creators. Beautiful by design, fast by default.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 flex flex-col sm:flex-row items-center gap-3 p-1.5 sm:rounded-full bg-white/5 border border-white/10 max-w-md mx-auto lg:mx-0 backdrop-blur-md overflow-hidden rounded-2xl"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="w-full sm:flex-1 bg-transparent px-4 py-3 sm:py-2 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3 sm:py-2.5 text-sm font-semibold hover:scale-105 transition-transform"
              >
                Subscribe <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12">
            {footerLinks.map((col) => (
              <div key={col.title} className="text-center sm:text-left">
                <h4 className="font-display font-semibold text-xs sm:text-sm tracking-wider uppercase text-foreground">{col.title}</h4>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="text-sm text-foreground/70 hover:text-primary transition-colors">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col items-center justify-center gap-8 text-center">
          <div className="flex items-center justify-center flex-wrap gap-6 max-w-xs sm:max-w-none">
            {social.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={`h-11 w-11 sm:h-10 sm:w-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 text-white ${s.bgColor} shadow-md hover:shadow-lg`}
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <p className="text-xs text-foreground/60 max-w-xs">
            © {new Date().getFullYear()} Twelve Lords. Crafted for thinkers and creators.
          </p>
        </div>
      </div>
    </footer>
  );
};
