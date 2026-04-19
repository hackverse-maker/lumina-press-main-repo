"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import a1 from "@/assets/article-1.jpg";
import a2 from "@/assets/article-2.jpg";
import a3 from "@/assets/article-3.jpg";

const articles = [
  {
    img: a1,
    cat: "Writing",
    title: "The Quiet Craft of Writing Every Day",
    desc: "Small daily rituals that turn writing from a chore into a craft you'll never want to stop refining.",
    author: "Maya Aldrin",
    date: "Apr 12, 2026",
    read: "6 min",
  },
  {
    img: a2,
    cat: "Tech",
    title: "Why Edge Computing Will Reshape The Web",
    desc: "How moving compute closer to users is rewriting the rules of performance, privacy, and product design.",
    author: "Daniel Cho",
    date: "Apr 09, 2026",
    read: "9 min",
  },
  {
    img: a3,
    cat: "Knowledge",
    title: "How Reading Slowly Changes Your Mind",
    desc: "The neuroscience of deep reading — and why slowing down may be the most radical productivity hack.",
    author: "Iris Bennett",
    date: "Apr 02, 2026",
    read: "5 min",
  },
];

export const Articles = () => {
  return (
    <section id="articles" className="relative py-28 md:py-36">
      <div className="container-tight">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-accent text-sm font-semibold tracking-widest uppercase"
            >
              Featured
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-3 font-display font-bold text-4xl md:text-5xl lg:text-6xl max-w-2xl"
            >
              Latest <span className="text-gradient-accent">Articles</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-muted-foreground max-w-xl"
            >
              Hand-picked stories from writers and thinkers across the web.
            </motion.p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold hover:text-accent transition-colors"
          >
            View all articles <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {articles.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border shadow-card-soft hover:shadow-card-hover hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={a.img.src || a.img}
                  alt={a.title}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                  {a.cat}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-xl leading-snug group-hover:text-accent transition-colors">
                  {a.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {a.desc}
                </p>
                <div className="mt-5 flex items-center justify-between text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">{a.author}</span>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {a.date}</span>
                    <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {a.read}</span>
                  </div>
                </div>
              </div>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
