"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube, Music } from "lucide-react";

const XIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24h-2.19L17.61 20.644Z" />
  </svg>
);

const SpotifyIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.02.24-2.82-1.74-6.36-2.13-10.56-1.17-.42.09-.84-.18-.93-.6-.09-.42.18-.84.6-.93 4.62-1.05 8.52-.6 11.7 1.35.36.18.48.63.21 1.11zm1.44-3.3c-.3.42-.84.6-1.26.3-3.24-1.98-8.16-2.58-11.94-1.44-.48.15-.96-.12-1.11-.6-.15-.48.12-.96.6-1.11 4.38-1.32 9.78-.66 13.5 1.62.42.24.54.78.21 1.23zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.3c-.6.18-1.2-.18-1.38-.78-.18-.6.18-1.2.78-1.38 4.26-1.29 11.28-1.02 15.96 1.74.54.3.72 1.02.42 1.56-.3.48-1.02.72-1.56.42z"/>
  </svg>
);

const ThreadsIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.62 12.52c-.67 0-1.19-.19-1.54-.56-.36-.37-.53-.88-.53-1.52 0-.62.17-1.13.52-1.52.35-.39.87-.58 1.55-.58.68 0 1.2.19 1.55.57.36.38.53.88.53 1.53 0 .64-.17 1.15-.53 1.53-.35.37-.87.55-1.55.55zm0-5.32c-1.3 0-2.34.38-3.1 1.13-.77.75-1.15 1.76-1.15 3.03s.38 2.29 1.15 3.04c.77.75 1.8 1.13 3.1 1.13s2.33-.38 3.1-1.13c.77-.75 1.16-1.77 1.16-3.04 0-1.28-.39-2.28-1.16-3.03-.77-.75-1.8-1.13-3.1-1.13zm6.31 9.07c-.49 1.34-1.3 2.4-2.42 3.17-1.13.78-2.47 1.16-4.04 1.16-2.11 0-3.83-.69-5.16-2.07C7 17.15 6.33 15.18 6.33 12.6c0-2.6.67-4.57 2.02-5.91 1.35-1.34 3.06-2.01 5.16-2.01 1.93 0 3.52.57 4.77 1.7 1.25 1.13 1.89 2.66 1.92 4.59h-2.31c-.04-1.36-.45-2.41-1.24-3.14-.79-.73-1.83-1.1-3.14-1.1-1.44 0-2.58.46-3.41 1.38-.83.92-1.25 2.29-1.25 4.12 0 1.8.42 3.15 1.25 4.07.83.91 1.97 1.37 3.41 1.37 1.05 0 1.91-.25 2.58-.75.67-.5.1.09.81-.72V12.1H13.5v-1.92h5.11c.06.39.09.84.09 1.35 0 2-.62 3.63-1.85 4.89-1.23 1.26-2.86 1.89-4.89 1.89-2.49 0-4.48-.82-5.96-2.47-1.48-1.65-2.22-3.95-2.22-6.9 0-2.92.74-5.21 2.22-6.86C7.52 2.42 9.51 1.6 12 1.6s4.48.82 5.96 2.47c1.48 1.65 2.22 3.95 2.22 6.9v1.27c0 1.31-.22 2.43-.65 3.36z"/>
  </svg>
);

const PrivacyChoicesIcon = () => (
  <svg className="h-[12px] w-[24px] inline-block mr-1.5 align-middle" viewBox="0 0 40 20" fill="none">
    <rect width="40" height="20" rx="10" fill="#0066CC" />
    <circle cx="10" cy="10" r="7" fill="white" />
    <path d="M7 10l2 2 4-4" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M26 7l6 6M32 7l-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Footer = () => {
  return (
    <footer id="footer" className="bg-[#1f1d1d] text-white pt-20 pb-12 border-t border-white/10 font-sans relative z-10 overflow-hidden">
      <div className="container-tight px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column - Brand, Bio, CTA, and Copyright */}
          <div className="lg:col-span-5 flex flex-col items-start text-left justify-between">
            <div>
              <Link href="/" className="flex items-center group mb-6">
                <span className="text-xl sm:text-2xl font-[800] tracking-[0.1em] text-white uppercase transition-colors group-hover:text-gray-300">
                  Twelve Lords
                </span>
              </Link>
              
              <p className="text-[14px] text-white/80 leading-relaxed font-normal max-w-sm font-serif">
                Twelve Lords is an innovative platform led by Muhammad Raza — a Cybersecurity Engineer, Author, and Entrepreneur. We bridge the gap between technical mastery and philosophical wisdom, helping you navigate the digital frontier with awareness and purpose.
              </p>

              <Link 
                href="/about" 
                className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-white hover:text-gray-300 transition-all group mt-8"
              >
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-all shrink-0">
                  <span className="text-sm font-[300] transform group-hover:translate-x-0.5 transition-transform">→</span>
                </div>
                LEARN MORE ABOUT RAZA
              </Link>
            </div>
            
            <p className="text-[11px] text-white/30 tracking-wider font-semibold mt-12 sm:mt-16">
              © {new Date().getFullYear()} Twelve Lords
            </p>
          </div>

          {/* Spacer Column with border */}
          <div className="lg:col-span-1 hidden lg:block border-l border-white/10 self-stretch my-2" />

          {/* Right Column - Navigation links & Compliance/Social block under them */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            
            {/* Top Navigation Links */}
            <div className="grid grid-cols-2 gap-8 text-[13px] uppercase tracking-[0.15em] text-left pt-2 font-serif mb-12">
              <div className="flex flex-col gap-6 items-start">
                <Link href="/articles" className="text-white hover:text-gray-300 transition-colors border-b border-white pb-0.5 font-bold tracking-[0.15em]">
                  Articles
                </Link>
                <Link href="/contact" className="text-white hover:text-gray-300 transition-colors">
                  Newsletter
                </Link>
                <Link href="/about" className="text-white hover:text-gray-300 transition-colors border-b border-white pb-0.5 font-bold tracking-[0.15em]">
                  About Raza
                </Link>
                <Link href="/contact" className="text-white hover:text-gray-300 transition-colors">
                  Contact
                </Link>
                <Link href="/tech" className="text-white hover:text-gray-300 transition-colors">
                  About Tech
                </Link>
              </div>
              
              <div className="flex flex-col gap-6 items-start">
                <Link href="/books" className="text-white hover:text-gray-300 transition-colors">
                  Books
                </Link>
                <Link href="/contact" className="text-white hover:text-gray-300 transition-colors">
                  Sign Up
                </Link>
              </div>
            </div>

            {/* Bottom Compliance & Social Links (Moved to Right Column Area) */}
            <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 mt-4">
              
              {/* Compliance links stacked vertically */}
              <div className="flex flex-col gap-3 text-[11px] font-bold uppercase tracking-[0.15em] text-white/50 text-left font-sans">
                <Link href="/contact" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <button className="hover:text-white transition-colors uppercase tracking-[0.15em] text-left">
                  Manage Cookie Settings
                </button>
                <button className="hover:text-white transition-colors uppercase tracking-[0.15em] flex items-center text-left">
                  <PrivacyChoicesIcon />
                  Your Privacy Choices
                </button>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Terms and Conditions
                </Link>
              </div>

              {/* Social links row */}
              <div className="flex items-center gap-5 text-white/70 pb-1">
                <a href="https://twitter.com/twelvelords" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all hover:scale-110" aria-label="X">
                  <XIcon className="h-[18px] w-[18px]" />
                </a>
                <a href="https://www.instagram.com/twelvelords" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all hover:scale-110" aria-label="Instagram">
                  <Instagram className="h-[18px] w-[18px]" />
                </a>
                <a href="https://youtube.com/@twelvelords" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all hover:scale-110" aria-label="YouTube">
                  <Youtube className="h-[18px] w-[18px]" />
                </a>
                <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all hover:scale-110" aria-label="Spotify">
                  <SpotifyIcon className="h-[18px] w-[18px]" />
                </a>
                <a href="https://www.facebook.com/share/1CRfTGwmLb/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all hover:scale-110" aria-label="Facebook">
                  <Facebook className="h-[18px] w-[18px]" />
                </a>
                <a href="https://threads.net" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all hover:scale-110" aria-label="Threads">
                  <ThreadsIcon className="h-[18px] w-[18px]" />
                </a>
                <a href="https://linkedin.com/company/twelvelords" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all hover:scale-110" aria-label="LinkedIn">
                  <Linkedin className="h-[18px] w-[18px]" />
                </a>
                <a href="https://www.tiktok.com/@twelvelords" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all hover:scale-110" aria-label="TikTok">
                  <Music className="h-[18px] w-[18px]" />
                </a>
              </div>

            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};
