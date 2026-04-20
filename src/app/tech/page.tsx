"use client";

import { PageHero } from "@/components/PageHero";
import { TechCard } from "@/components/TechCard";
import { techItems } from "@/lib/data";

export default function TechPage() {
  return (
    <main className="min-h-screen pb-20">
      <PageHero 
        title="Stack & Insights" 
        subtitle="Exploring the tools, frameworks, and architecture behind the modern web."
        type="tech" 
      />

      <section className="py-20">
        <div className="container-tight">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techItems.map((item, i) => (
              <TechCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
