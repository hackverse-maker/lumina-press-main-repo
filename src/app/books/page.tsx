"use client";

import { PageHero } from "@/components/PageHero";
import { FeaturedBook } from "@/components/FeaturedBook";
import { BookCard } from "@/components/BookCard";
import { books } from "@/lib/data";

export default function BooksPage() {
  const featuredBook = books.find(b => b.featured) || books[0];
  const regularBooks = books.filter(b => !b.featured);

  return (
    <main className="min-h-screen pb-20">
      <PageHero 
        title="Knowledge Library" 
        subtitle="Deep dives into psychology, philosophy, and the human condition."
        type="books" 
      />
      
      <FeaturedBook book={featuredBook} />

      <section className="py-24">
        <div className="container-tight">
          <div className="flex flex-col items-center text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">More to <span className="text-gradient-accent">Explore</span></h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Curated reading for the curious mind. Each book is hand-picked for its depth and lasting impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularBooks.map((book, i) => (
              <BookCard key={book.title} book={book} index={i} showButtons={true} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
