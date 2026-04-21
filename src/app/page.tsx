import { Hero } from "@/components/Hero";
import { ArticleHighlight } from "@/components/ArticleHighlight";
import { Knowledge } from "@/components/Knowledge";
import { Testimonials } from "@/components/Testimonials";
import { Tech } from "@/components/Tech";

export default function Home() {
  return (
    <main>
      <Hero />
      <ArticleHighlight
        heading="Featured Article"
        articleTitle="As Cyber Threats Accelerate, Human Awareness Remains the Critical Weakness"
        description="Despite multi-billion dollar investments in firewall technology and AI-driven defense systems, the human factor remains the most exploited link in the security chain. Real-world awareness is the front line."
        imagePath="/cybersecurity-featured.png"
        link="/articles/cyber-threats-awareness"
        showMoreLink={true}
      />
      <Knowledge />
      <Testimonials />
      <Tech />
    </main>
  );
}
