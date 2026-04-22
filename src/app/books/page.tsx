import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { books as localBooks } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Books | Twelve Lords Publishing",
  description: "Curated insights from philosophy, technology, and modern strategy.",
};

// Types for Google Books API
interface GoogleBook {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    description?: string;
    imageLinks?: {
      thumbnail: string;
    };
    infoLink: string;
  };
}

async function getExternalBooks() {
  try {
    // Fetching relevant books from Google Books API
    const res = await fetch(
      "https://www.googleapis.com/books/v1/volumes?q=subject:philosophy+cybersecurity&maxResults=10",
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );
    const data = await res.json();
    return data.items || [];
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
}

import { BookList } from "@/components/BookList";

export default async function BooksPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-[140px] pb-24">
      {/* Header */}
      <header className="container-tight px-6 mb-32 text-center">
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-8 uppercase">
          Bookshelf
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          The best ideas from philosophy, psychology, and modern strategy, 
          distilled into in-depth analysis and practical wisdom.
        </p>
      </header>

      {/* Books List Section */}
      <section className="container-tight px-6">
        <BookList books={localBooks} />
      </section>
    </main>
  );
}
