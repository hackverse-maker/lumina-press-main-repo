"use client";

import Link from "next/link";
import logo from "@/assets/logo.png";
import { motion } from "framer-motion";

export const Logo = () => (
  <Link href="/" className="flex items-center group transition-transform hover:scale-105 active:scale-95 duration-300">
    <motion.img 
      src={logo.src} 
      alt="Twelve Lords Logo" 
      className="h-14 md:h-20 w-auto object-contain mix-blend-multiply dark:mix-blend-screen"
      animate={{
        x: [0, 2, 0, -2, 0],
        y: [-2, 0, 2, 0, -2]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  </Link>
);
