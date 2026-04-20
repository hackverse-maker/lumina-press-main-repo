export const Logo = () => (
  <div className="flex items-center gap-2.5 group transition-transform hover:scale-105 active:scale-95 duration-300">
    <img 
      src="/maha-roofing-logo.jpg" 
      alt="Maha Roofing Logo" 
      className="h-10 w-auto object-contain"
    />
    <span className="hidden sm:inline text-lg font-bold text-foreground">Maha Roofing</span>
  </div>
);
