"use client";

import React from "react";
import { Target, Eye, Rocket } from "lucide-react";
import { motion } from "framer-motion";

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

      {/* Split Layout Content */}
      <section className="py-16 md:py-24 px-4">
        <div className="container-tight">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-foreground">
                  Our <span className="text-gradient-accent">Purpose</span>
                </h2>
                
                <div className="space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg font-medium">
                  <p>
                    Twelve Lords is driven by a singular mission: to educate, inform, and elevate. We are committed to providing accurate, well-researched knowledge that empowers individuals with clarity, self-awareness, and a defined path toward personal and intellectual development.
                  </p>
                  
                  <p>
                    Our work spans across current affairs, history, philosophy, and technology, delivered through thoughtfully crafted articles, books, and video content. Whether through daily publications or long-form works, our goal is to translate complex ideas into accessible, practical insight that can be applied in everyday life.
                  </p>
                  
                  <p>
                    Beyond knowledge, Twelve Lords is also at the forefront of technological innovation. Our dedicated tech team is actively developing modern hardware solutions embedded with secure cybersecurity frameworks. We believe that security should not be an afterthought, but a fundamental component of every product.
                  </p>
                  
                  <p>
                    What sets us apart from contemporary industries is our unwavering emphasis on data protection and user safety, even in everyday technology. Through our products, we aim not only to provide functionality, but also to educate users on cybersecurity awareness, fostering a deeper understanding of digital risks and the importance of data integrity.
                  </p>
                  
                  <p>
                    At Twelve Lords, we do not simply create content or products—we build systems of knowledge and security designed to strengthen both the mind and the modern digital life.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right: Floating Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="relative h-[400px] md:h-[500px] group"
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full rounded-2xl overflow-hidden"
              >
                <img
                  src="/images/about.jpg"
                  alt="About us"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Blur to focus effect on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-accent/5 mix-blend-overlay"
                />
              </motion.div>
              {/* Decorative background glow */}
              <div className="absolute -inset-4 bg-gradient-accent opacity-10 blur-2xl rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
