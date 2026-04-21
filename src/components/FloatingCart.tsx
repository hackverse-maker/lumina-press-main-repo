"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useAppState } from "@/context/AppStateContext";

export const FloatingCart = () => {
  const { cart, setIsCartOpen } = useAppState();
  
  if (cart.length === 0) return null;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0, opacity: 0, y: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100]"
    >
      <button
        onClick={() => setIsCartOpen(true)}
        className="relative group p-6 rounded-[2rem] bg-accent text-white shadow-[0_15px_40px_rgba(34,211,238,0.4)] border border-white/20 transition-all duration-300"
      >
        <ShoppingCart className="w-7 h-7" />
        
        {/* Pulsing Badge */}
        <AnimatePresence>
          {cart.length > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-background text-[10px] font-black shadow-lg border-2 border-accent"
            >
              {cart.length}
            </motion.span>
          )}
        </AnimatePresence>

        {/* Glow Halo */}
        <div className="absolute inset-0 rounded-[2rem] bg-accent/20 blur-xl -z-10 animate-pulse" />
      </button>
    </motion.div>
  );
};
