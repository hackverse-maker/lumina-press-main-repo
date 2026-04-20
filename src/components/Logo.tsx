import Link from "next/link";
import logo from "@/assets/logo.png";

export const Logo = () => (
  <Link href="/" className="flex items-center group transition-transform hover:scale-105 active:scale-95 duration-300">
    <img 
      src={logo.src} 
      alt="Twelve Lords Logo" 
      className="h-24 w-auto object-contain logo-animated"
    />
  </Link>
);
