"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShoppingCart, Heart, Calendar, User, Check } from "lucide-react";
import type { Book } from "@/lib/data";
import { useAppState } from "@/context/AppStateContext";
import { useState } from "react";

interface FeaturedBookProps {
  book: Book;
}

export const FeaturedBook = ({ book }: FeaturedBookProps) => {
  const { toggleFavorite, addToCart, isFavorite, cart } = useAppState();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(book);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative glass rounded-[2.5rem] overflow-hidden border border-white/10 shadow-glass group"
        >
          <div className="absolute top-0 right-0 p-8">
            <span className="px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-bold uppercase tracking-widest shadow-accent-glow">
              Featured Release
            </span>
          </div>

          <div className="grid lg:grid-cols-2 lg:items-center">
            {/* Image side */}
            <div className="p-8 lg:p-16">
              <div className="relative aspect-[3/4] max-w-sm mx-auto rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 group">
                {book.image ? (
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-indigo-950 to-slate-900 flex flex-col items-center justify-center p-12 text-center text-white border-2 border-white/10">
                    <div className="text-4xl font-display font-bold leading-tight uppercase tracking-tighter">
                      {book.title}
                    </div>
                    <div className="mt-8 h-px w-24 bg-accent" />
                    <div className="mt-8 text-sm font-medium tracking-widest text-slate-400">
                      {book.author}
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Content side */}
            <div className="p-8 lg:p-16 lg:pl-0">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-4 text-sm text-accent font-medium mb-3">
                    <span className="flex items-center gap-1"><User className="h-4 w-4" /> {book.author}</span>
                    <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {book.publishDate}</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] text-foreground group-hover:text-accent transition-colors duration-300">
                    {book.title.split(' ').slice(0, -1).join(' ')} <span className="text-gradient-accent">{book.title.split(' ').pop()}</span>
                  </h2>
                  {book.subtitle && (
                    <p className="mt-4 text-xl md:text-2xl text-muted-foreground font-medium leading-tight">
                      {book.subtitle}
                    </p>
                  )}
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {book.description}
                </p>

                {book.benefits && (
                  <div className="space-y-3 pt-4">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">Key <span className="text-gradient-accent">Benefits:</span></h4>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {book.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                          <span className="text-sm font-medium">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-4 pt-8">
                  <button 
                    onClick={handleAddToCart}
                    disabled={cart.some(b => b.title === book.title)}
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-accent text-accent-foreground font-bold shadow-accent-glow hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {added ? <Check className="h-5 w-5" /> : <ShoppingCart className="h-5 w-5" />}
                    {cart.some(b => b.title === book.title) ? "In Cart" : "Buy Now"}
                  </button>
                  <button 
                    onClick={() => toggleFavorite(book)}
                    className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass border border-white/10 font-bold hover:bg-white/5 transition-all ${isFavorite(book.title) ? "bg-accent/10 text-accent" : ""}`}
                  >
                    <Heart className={`h-5 w-5 ${isFavorite(book.title) ? "fill-accent text-accent" : ""}`} />
                    {isFavorite(book.title) ? "Favorited" : "Add to Favorites"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
