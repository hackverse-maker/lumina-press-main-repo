"use client";

import { PageHero } from "@/components/PageHero";
import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/lib/data";

export default function ArticlesPage() {
  return (
    <main className="min-h-screen pb-20">
      <PageHero 
        title="Thinking Aloud" 
        subtitle="Insights, essays, and stories about building, thinking, and being."
        type="articles" 
      />

      <section className="py-12">
        <div className="container-tight">
          <div className="space-y-4">
            {articles.map((article, i) => (
              <ArticleCard key={article.title} article={article} index={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
