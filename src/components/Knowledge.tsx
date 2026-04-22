"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, Lightbulb, Compass, ArrowUpRight } from "lucide-react";
import knowledgeImg from "@/assets/knowledge.jpg";

const blocks = [
  { icon: BookOpen, title: "Read deeper", text: "Long-form essays curated by editors who care about ideas." },
  { icon: Lightbulb, title: "Think clearer", text: "Frameworks, mental models, and notes from working creators." },
  { icon: Compass, title: "Explore further", text: "Discover voices and topics you didn't know you'd love." },
];

export const Knowledge = () => {
  return (
    <section id="knowledge" className="section-padding bg-secondary/20 relative overflow-hidden">
      <div className="container-tight relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-soft border border-border">
              <img
                src={typeof knowledgeImg === 'string' ? knowledgeImg : knowledgeImg.src}
                alt="Knowledge Repository"
                loading="lazy"
                width={1280}
                height={800}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
            {/* Minimal Stat Badge */}
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-6 shadow-premium">
              <div className="text-3xl font-extrabold text-primary tracking-tight">+240</div>
              <div className="text-xs font-bold text-foreground/60 uppercase tracking-widest mt-1">Deep Analysis</div>
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                Research & Development
              </span>
              <h2 className="text-balance">Security insights that build lasting resilience.</h2>
              <p className="max-w-xl">
                We distill complex security concepts and industry trends into actionable 
                knowledge blocks designed for modern technical teams and decision-makers.
              </p>
              
              <div className="pt-4">
                <Link
                  href="/books"
                  className="btn-outline inline-flex items-center gap-2 text-sm"
                >
                  Explore Knowledge Base <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {blocks.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-premium flex flex-col gap-6"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <b.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">{b.title}</h3>
                <p className="text-sm text-foreground/70 mb-0 leading-relaxed">{b.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
