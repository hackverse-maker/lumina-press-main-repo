"use client";

import { motion } from "framer-motion";
import { Book as BookIcon, Calendar, Heart, ShoppingCart, Check } from "lucide-react";
import type { Book } from "@/lib/data";
import { useAppState } from "@/context/AppStateContext";
import { useState } from "react";

interface BookCardProps {
  book: Book;
  index?: number;
  showButtons?: boolean;
}

export const BookCard = ({ book, index = 0, showButtons = false }: BookCardProps) => {
  const { toggleFavorite, addToCart, isFavorite, cart } = useAppState();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(book);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
        {book.image ? (
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <BookIcon className="h-12 w-12 text-muted-foreground/30" />
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-accent/90 text-accent-foreground text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
            {book.genre}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
          <Calendar className="h-3 w-3" />
          <span>{book.publishDate}</span>
        </div>
        <h3 className="font-display font-bold text-lg leading-tight group-hover:text-accent transition-colors duration-300 text-foreground">
          {book.title.split(' ').slice(0, -1).join(' ')} <span className="text-gradient-accent">{book.title.split(' ').pop()}</span>
        </h3>
        <p className="text-sm font-medium text-foreground/80 mt-1">{book.author}</p>
        <p className="mt-3 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {book.description}
        </p>

        {showButtons && (
          <div className="mt-6 flex items-center gap-3">
            <button 
              onClick={handleAddToCart}
              disabled={cart.some(b => b.title === book.title)}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-semibold hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {added ? <Check className="h-4 w-4" /> : <ShoppingCart className="h-4 w-4" />}
              {cart.some(b => b.title === book.title) ? "In Cart" : "Buy Now"}
            </button>
            <button 
              onClick={() => toggleFavorite(book)}
              className={`inline-flex items-center justify-center h-9 w-9 rounded-lg border border-border hover:bg-secondary transition-all ${isFavorite(book.title) ? "bg-accent/10 border-accent/30" : ""}`}
              title={isFavorite(book.title) ? "Remove from Favorites" : "Add to Favorites"}
            >
              <Heart className={`h-4 w-4 transition-colors ${isFavorite(book.title) ? "fill-accent text-accent" : "text-muted-foreground hover:text-accent"}`} />
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};
