"use client";

import { ArticleHero } from "@/components/ArticleHero";
import { MidArticleImage } from "@/components/MidArticleImage";

export default function ArticlePage() {
  // This would normally get the article from params, but for now showing a sample
  const article = {
    title: "As Cyber Threats Accelerate, Human Awareness Remains the Critical Weakness",
    author: "Muhammad Raza",
    date: "April 15, 2026",
    description: "Exploring how human vulnerability in cybersecurity remains the greatest risk factor in our increasingly digital world. Organizations invest heavily in technology, but the human element often becomes the weakest link.",
    imagePath: "/images/article.jpg",
  };

  return (
    <main className="min-h-screen bg-background pt-20">
      <ArticleHero
        title={article.title}
        author={article.author}
        date={article.date}
        description={article.description}
        imagePath={article.imagePath}
      />

      {/* Article Content */}
      <section className="py-12 md:py-16 px-4">
        <div className="container-tight max-w-3xl">
          <div className="prose prose-invert max-w-none">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                In today's rapidly evolving digital landscape, organizations face an unprecedented wave of cyber threats. From ransomware attacks to data breaches, the consequences have become increasingly severe. Yet, despite massive investments in cutting-edge security technology, one vulnerability remains consistently exploited: human awareness.
              </p>

              <p>
                The statistics paint a sobering picture. According to recent research, over 90% of successful data breaches involve some form of human error. Whether it's clicking a malicious link, using weak passwords, or inadvertently sharing sensitive information, the human element remains the weakest link in the security chain.
              </p>

              <p>
                This disconnect between technological sophistication and human preparedness represents a critical gap in our collective security posture. No amount of firewalls, encryption, or intrusion detection systems can fully compensate for an uninformed user base.
              </p>
            </div>
          </div>

          <MidArticleImage
            imagePath="/data-breach-alert.png"
            caption="A system alert indicating a critical data breach — the nightmare scenario for any organization."
          />

          <div className="space-y-6 text-muted-foreground leading-relaxed mt-12">
            <p>
              The challenge lies not just in the technical implementation of security measures, but in the cultural shift required to make cybersecurity awareness a fundamental part of organizational DNA.
            </p>

            <MidArticleImage
              imagePath="/phishing-example.png"
              caption="Phishing scams often use scare tactics and suspicious links to trick users into revealing sensitive data."
            />

            <p>
              This requires:
            </p>

            <ul className="list-disc list-inside space-y-3 ml-4">
              <li>Regular, ongoing training programs that evolve with emerging threats</li>
              <li>Clear communication of security policies and their rationale</li>
              <li>Creation of a psychological safety environment where users can report suspicious activity</li>
              <li>Incentivization of secure practices rather than punishment for honest mistakes</li>
            </ul>

            <p>
              Organizations that have successfully implemented comprehensive awareness programs report significantly lower breach rates. The investment in human-centered security often yields better returns than equivalent spending on technological solutions alone.
            </p>

            <p>
              As cyber threats continue to accelerate in sophistication and scale, the path forward is clear: we must place the human element at the center of our cybersecurity strategy. Not as a liability to be contained, but as the strongest asset we possess—when properly informed, empowered, and supported.
            </p>
          </div>

          {/* Detailed Threat Analysis Section */}
          <div className="mt-20 pt-12 border-t border-border/50">
            <h2 className="text-3xl font-display font-bold mb-8 text-foreground">
              Detailed Threat <span className="text-blue-500">Analysis</span>
            </h2>
            
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground">Visualizing a Data Breach</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    When a breach occurs, the immediate impact is often felt through system alerts. 
                    This visualization represents the critical moment a security perimeter is compromised, 
                    triggering organization-wide protocols.
                  </p>
                </div>
                <MidArticleImage
                  imagePath="/data-breach-detail.png"
                  caption="A high-intensity visualization of a data breach alert system."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <MidArticleImage
                  imagePath="/phishing-detail.png"
                  caption="Deconstructing a typical mobile phishing attack."
                />
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground">Anatomy of a Phishing Scam</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Modern phishing scams are meticulously designed to exploit psychology. 
                    By utilizing "Scare Tactics" and spoofed URLs, attackers create a false 
                    sense of urgency that leads even experienced users to make critical errors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
