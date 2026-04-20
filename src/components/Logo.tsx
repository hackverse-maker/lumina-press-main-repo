import Link from "next/link";
import logo from "@/assets/logo.svg";

export const Logo = () => (
  <Link href="/" className="flex items-center group transition-transform hover:scale-105 active:scale-95 duration-300 sm:ml-0 md:absolute md:left-1/2 md:-translate-x-1/2">
    <img 
      src={logo.src} 
      alt="Twelve Lords Logo" 
      className="h-48 w-auto logo-animated"
    />
  </Link>
);
