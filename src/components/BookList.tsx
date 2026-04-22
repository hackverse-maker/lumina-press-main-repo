"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, ShoppingCart } from "lucide-react";
import { useAppState } from "@/context/AppStateContext";
import { Book } from "@/lib/data";
import { motion } from "framer-motion";

interface BookListProps {
  books: Book[];
}

export const BookList = ({ books }: BookListProps) => {
  const { addToCart, toggleFavorite, isFavorite } = useAppState();

  return (
    <div className="space-y-40">
      {books.map((book) => (
        <div
          key={book.id}
          className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start"
        >
          {/* Book Cover */}
          <div className="w-full md:w-[340px] shrink-0">
            <div className="relative aspect-[2/3] shadow-premium rounded-sm overflow-hidden bg-secondary/20 group cursor-pointer">
              <Image
                src={book.image}
                alt={book.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              
              {/* Over-image actions */}
              <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    toggleFavorite(book);
                  }}
                  className={`h-10 w-10 rounded-full flex items-center justify-center transition-all ${
                    isFavorite(book.id) ? "bg-primary text-white" : "bg-white/90 text-foreground hover:bg-primary hover:text-white"
                  }`}
                >
                  <Heart className={`h-5 w-5 ${isFavorite(book.id) ? "fill-current" : ""}`} />
                </button>
              </div>
            </div>
          </div>

          {/* Book Details */}
          <div className="flex-1 space-y-8">
            <div className="space-y-3">
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs block">
                {book.genre || "Featured Publication"}
              </span>
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] uppercase italic">
                {book.title}
              </h2>
              <div className="text-lg font-bold text-foreground/80">
                By {book.author}
              </div>
            </div>

            <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-3xl">
              {book.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <Link
                href={`/books/${book.id}`}
                className="inline-flex items-center gap-3 border-b-2 border-primary pb-2 text-lg font-bold hover:gap-5 transition-all"
              >
                READ ANALYSIS <ArrowRight className="h-5 w-5" />
              </Link>
              
              <button 
                onClick={() => addToCart(book)}
                className="btn-primary flex items-center gap-3 px-8 py-3 rounded-full"
              >
                <ShoppingCart className="h-5 w-5" />
                ADD TO CART
              </button>

              <button 
                onClick={() => toggleFavorite(book)}
                className={`h-12 w-12 rounded-full flex items-center justify-center border-2 transition-all ${
                  isFavorite(book.id) 
                    ? "border-primary bg-primary text-white" 
                    : "border-border text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                <Heart className={`h-5 w-5 ${isFavorite(book.id) ? "fill-current" : ""}`} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
