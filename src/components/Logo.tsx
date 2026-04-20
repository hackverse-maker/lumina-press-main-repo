import Link from "next/link";
import logo from "@/assets/logo.svg";

export const Logo = () => (
  <Link href="/" className="flex items-center justify-start md:justify-center group transition-transform hover:scale-105 active:scale-95 duration-300">
    <img 
      src={logo.src} 
      alt="Twelve Lords Logo" 
      className="h-48 w-auto logo-animated"
    />
  </Link>
);
