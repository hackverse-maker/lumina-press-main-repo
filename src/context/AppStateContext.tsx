"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Book } from "@/lib/data";

interface AppState {
  favorites: Book[];
  cart: Book[];
  toggleFavorite: (book: Book) => void;
  addToCart: (book: Book) => void;
  removeFromCart: (title: string) => void;
  isFavorite: (title: string) => boolean;
}

const AppStateContext = createContext<AppState | undefined>(undefined);

export const AppStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<Book[]>([]);
  const [cart, setCart] = useState<Book[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const savedFavs = localStorage.getItem("lumina_favs");
    const savedCart = localStorage.getItem("lumina_cart");
    if (savedFavs) setFavorites(JSON.parse(savedFavs));
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem("lumina_favs", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("lumina_cart", JSON.stringify(cart));
  }, [cart]);

  const toggleFavorite = (book: Book) => {
    setFavorites(prev => {
      const exists = prev.find(b => b.title === book.title);
      if (exists) {
        return prev.filter(b => b.title !== book.title);
      }
      return [...prev, book];
    });
  };

  const isFavorite = (title: string) => favorites.some(b => b.title === title);

  const addToCart = (book: Book) => {
    setCart(prev => {
      const exists = prev.find(b => b.title === book.title);
      if (exists) return prev;
      return [...prev, book];
    });
  };

  const removeFromCart = (title: string) => {
    setCart(prev => prev.filter(b => b.title !== title));
  };

  return (
    <AppStateContext.Provider value={{ favorites, cart, toggleFavorite, addToCart, removeFromCart, isFavorite }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error("useAppState must be used within an AppStateProvider");
  }
  return context;
};
