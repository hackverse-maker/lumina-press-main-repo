import React from "react";
import { Target, Eye, Rocket } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Simple Hero */}
      <section className="relative w-full py-20 flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-4 text-foreground">
            About <span className="text-gradient-accent">Us</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Empowering the next generation of tech writers and thinkers.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="container-tight max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-display font-bold mb-6 text-foreground">Our <span className="text-gradient-accent">Story</span></h2>
              <p className="text-muted-foreground leading-relaxed">
                Lumina Press started as a small project to help writers share complex ideas in a simple, beautiful format. Today, it grew into a global community of creators dedicated to high-quality knowledge sharing and modern publishing.
              </p>
            </div>
            <div className="grid gap-6">
              <div className="p-6 rounded-2xl bg-secondary/30 border border-border">
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
                    <Target className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">Our <span className="text-gradient-accent">Mission</span></h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  To turn the best ideas into compact, actionable frameworks that everyone can learn from.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-secondary/30 border border-border">
                <div className="flex items-center gap-4 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
                    <Eye className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">Our <span className="text-gradient-accent">Vision</span></h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  A world where deep knowledge is accessible, engaging, and beautiful by default.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
