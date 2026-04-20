"use client";

import { motion } from "framer-motion";

export const Articles = () => {
  const article = {
    title: "As Cyber Threats Accelerate, Human Awareness Remains the Critical Weakness",
    author: "Muhammad Raza",
    date: "Apr 21, 2026",
    description: "Discover why human awareness is the most critical defense against evolving cyber threats and how organizations can build stronger security cultures.",
  };

  return (
    <section id="articles" className="relative min-h-screen flex items-center py-20 md:py-0">
      <div className="w-full">
        <div className="flex flex-col md:flex-row items-center gap-0">
          {/* LEFT SIDE - 40% */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full md:w-2/5 px-6 md:px-12 py-16 md:py-20 flex flex-col justify-center"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block text-accent text-sm font-semibold tracking-widest uppercase w-fit"
            >
              Featured Article
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 font-display font-bold text-4xl md:text-5xl leading-tight text-foreground"
            >
              {article.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-muted-foreground leading-relaxed text-lg max-w-md"
            >
              {article.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-col gap-2 text-sm"
            >
              <p className="text-foreground font-semibold">
                By <span className="text-accent">{article.author}</span>
              </p>
              <p className="text-muted-foreground">
                Published on {article.date}
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - 60% */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="w-full md:w-3/5 h-full min-h-[400px] md:min-h-screen relative overflow-hidden"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full relative"
            >
              <img
                src="/images/article.jpg"
                alt={article.title}
                className="w-full h-full object-cover"
              />
              {/* Glow overlay */}
              <motion.div
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-t from-accent/20 via-transparent to-transparent"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
