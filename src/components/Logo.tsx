import { PenTool } from "lucide-react";

export const Logo = () => (
  <a href="#home" className="flex items-center gap-3 group">
    <div className="relative h-10 w-10 flex items-center justify-center">
      <span className="absolute inset-0 rounded-full border border-dashed border-accent/60 animate-spin-slow" />
      <span className="absolute inset-1 rounded-full bg-gradient-accent opacity-90 group-hover:opacity-100 transition-opacity" />
      <PenTool className="relative h-4 w-4 text-accent-foreground" strokeWidth={2.5} />
    </div>
    <span className="font-display font-extrabold text-lg tracking-tight">
      Twelve <span className="text-accent">Lords</span>
    </span>
  </a>
);
