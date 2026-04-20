"use client";

import React from "react";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

const emails = [
  {
    title: "Tech Inquiries",
    email: "Tech@twelvelords.com",
    description: "Technical questions and support",
  },
  {
    title: "Books & Publications",
    email: "Books@twelvelords.com",
    description: "Book orders and inquiries",
  },
  {
    title: "General Information",
    email: "Info@twelvelords.com",
    description: "General questions and partnerships",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Simple Hero */}
      <section className="relative w-full py-16 flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-4 text-foreground">
            Get in <span className="text-gradient-accent">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            We're here to help you anytime.
          </p>
        </div>
      </section>

      {/* Email Cards Section */}
      <section className="py-20 px-4">
        <div className="container-tight">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20">
            {emails.map((item, i) => (
              <motion.a
                key={item.email}
                href={`mailto:${item.email}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-accent/50 hover:bg-secondary/30 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 cursor-pointer"
              >
                <motion.div
                  animate={{ rotate: [0, 3, -3, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="h-12 w-12 rounded-lg bg-gradient-accent/20 flex items-center justify-center mb-4 group-hover:bg-gradient-accent/30 transition-colors"
                >
                  <Mail className="h-6 w-6 text-accent" />
                </motion.div>

                <h3 className="text-lg md:text-xl font-display font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-accent font-semibold text-sm mb-2">
                  {item.email}
                </p>

                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>

                {/* Hover glow effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute -inset-4 bg-accent/5 rounded-2xl -z-10 blur-xl"
                />
              </motion.a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <form className="glass rounded-3xl p-8 border border-border" onSubmit={(e) => e.preventDefault()}>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 text-foreground text-center">
                Send us a <span className="text-gradient-accent">Message</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="space-y-2"
                >
                  <label className="text-sm font-medium">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent transition-colors outline-none"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="space-y-2"
                >
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent transition-colors outline-none"
                    placeholder="Email address"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-2 mb-6"
              >
                <label className="text-sm font-medium">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent transition-colors outline-none resize-none"
                  placeholder="How can we help?"
                />
              </motion.div>

              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-accent text-accent-foreground font-bold hover:shadow-accent-glow transition-all"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
