"use client";

import { PageHero } from "@/components/PageHero";
import { ArticleHighlight } from "@/components/ArticleHighlight";
import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/lib/data";

export default function ArticlesPage() {
  return (
    <main className="min-h-screen pb-20">
      <ArticleHighlight
        heading="Latest Article"
        articleTitle="As Cyber Threats Accelerate, Human Awareness Remains the Critical Weakness"
        description="Despite massive investments in security technology, 90% of breaches still involve human error. Explore why organizational culture is your ultimate firewall."
        imagePath="/cybersecurity-featured.png"
        link="/articles/cyber-threats-awareness"
        showMoreLink={false}
      />
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
