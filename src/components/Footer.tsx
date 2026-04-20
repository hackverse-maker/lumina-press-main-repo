"use client";

import { Logo } from "./Logo";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";

const social = [
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Twitter, href: "#" },
];

const footerLinks = [
  { 
    title: "Services", 
    links: [
      { label: "New Roof Installation", href: "#" },
      { label: "Roof Repair", href: "#" },
      { label: "Maintenance Plans", href: "#" },
      { label: "Emergency Services", href: "#" }
    ] 
  },
  { 
    title: "Company", 
    links: [
      { label: "About Us", href: "#about" },
      { label: "Our Team", href: "#" },
      { label: "Testimonials", href: "#" },
      { label: "Contact", href: "#contact" }
    ] 
  },
];

export const Footer = () => {
  return (
    <footer id="contact" className="relative bg-footer text-footer-foreground pt-20 pb-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      <div className="container-tight">
        <div className="grid lg:grid-cols-12 gap-12 mb-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-5 text-sm text-footer-foreground/70 max-w-sm leading-relaxed">
              Professional roofing services with integrity and quality craftsmanship. Serving the community for over 25 years with licensed and insured expertise.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-semibold text-footer-foreground">Call Us</p>
                  <p className="text-footer-foreground/70">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-semibold text-footer-foreground">Email</p>
                  <p className="text-footer-foreground/70">info@maharoofing.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-semibold text-footer-foreground">Address</p>
                  <p className="text-footer-foreground/70">123 Main Street, City, State 12345</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-8">
            {footerLinks.map((col) => (
              <div key={col.title}>
                <h4 className="font-display font-semibold text-sm tracking-wider uppercase text-white">{col.title}</h4>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="text-sm text-footer-foreground/70 hover:text-accent transition-colors">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-footer-foreground/60">
            © {new Date().getFullYear()} Maha Roofing. All rights reserved. Licensed & Insured.
          </p>
          <div className="flex items-center gap-2">
            {social.map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-footer-foreground/80 hover:text-accent-foreground hover:bg-accent hover:border-accent hover:-translate-y-1 transition-all duration-300"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
