"use client";

import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
}

export const Logo = ({ variant = "light" }: LogoProps) => (
  <Link 
    href="/" 
    className="flex items-center group transition-all duration-300 hover:scale-[1.02] active:scale-95"
  >
    <span className="text-xl sm:text-2xl font-[350] tracking-[0.2em] text-white uppercase transition-colors group-hover:text-gray-300">
      Twelve Lords
    </span>
  </Link>
);

