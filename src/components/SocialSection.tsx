"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Music2 as TikTok, Music, Podcast, Twitter, Youtube } from "lucide-react";

const XIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24h-2.19L17.61 20.644Z" />
  </svg>
);

const socialLinks = [
  { 
    name: "Instagram", 
    icon: Instagram, 
    href: "https://www.instagram.com/twelvelords",
    color: "stroke-[url(#ig-grad)] text-[#E4405F]" 
  },
  { 
    name: "Facebook", 
    icon: Facebook, 
    href: "https://www.facebook.com/share/1CRfTGwmLb/",
    color: "text-[#1877F2]" 
  },
  { 
    name: "Twitter", 
    icon: XIcon, 
    href: "https://twitter.com/twelvelords",
    color: "text-black dark:text-white" 
  },
  { 
    name: "YouTube", 
    icon: Youtube, 
    href: "https://youtube.com/@twelvelords",
    color: "text-[#FF0000]" 
  },
  { 
    name: "TikTok", 
    icon: TikTok, 
    href: "https://www.tiktok.com/@twelvelords",
    color: "text-black dark:text-white" 
  },
  { 
    name: "Spotify", 
    icon: Music, 
    href: "https://open.spotify.com/episode/0DncvmZNsruO4zWw4KHB76",
    color: "text-[#1DB954]" 
  },
  { 
    name: "Apple Podcast", 
    icon: Podcast, 
    href: "https://podcasts.apple.com/gb/podcast/the-weakest-link/id1895144412",
    color: "text-[#872EC4]" 
  },
];

export const SocialSection = () => {
  return (
    <section className="py-20 bg-secondary/30 dark:bg-secondary/10 border-y border-border/50">
      <div className="container-tight text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Stay Connected
          </span>
          <h2 className="mb-12">Join Our Community</h2>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {socialLinks.map((social, i) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                aria-label={social.name}
                className={`group flex flex-col items-center gap-3 transition-all hover:scale-105 active:scale-95`}
              >
                <div className={`h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-background shadow-premium border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors ${social.color}`}>
                  <social.icon className="h-8 w-8 md:h-10 md:w-10" strokeWidth={1.5} />
                </div>
                <span className={`text-sm font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${social.color}`}>
                  {social.name}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
