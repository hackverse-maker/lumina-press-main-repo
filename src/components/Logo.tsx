"use client";

import Link from "next/link";
import logo from "@/assets/logo_white.png";
import { motion } from "framer-motion";

interface LogoProps {
  variant?: "light" | "dark";
}

export const Logo = ({ variant = "light" }: LogoProps) => (
  <Link href="/" className="flex justify-center overflow-visible items-center group transition-transform hover:scale-105 active:scale-95 duration-300">
    <motion.img
      src={logo.src}
      alt="Twelve Lords Logo"
      className="h-[140px] w-[180px] object-cover"
      animate={{
        y: [0, -2, 0]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  </Link>
);
