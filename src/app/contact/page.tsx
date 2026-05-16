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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! Our team will get back to you at the email provided.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <main className="min-h-screen bg-background pt-44">
      <section className="relative w-full py-16 sm:py-20 flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center px-4 sm:px-6">
          <h1 className="font-display font-bold mb-4 text-black">
            Get in <span className="">Touch</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
            We're here to help you anytime.
          </p>
        </div>
      </section>

      {/* Email Cards Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="container-tight">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
            {emails.map((item, i) => (
              <motion.a
                key={item.email}
                href={`mailto:${item.email}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative p-6 sm:p-8 rounded-2xl bg-white border border-black/5 hover:border-black/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              >
                <motion.div
                  animate={{ rotate: [0, 3, -3, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="h-12 w-12 rounded-lg bg-black/5 flex items-center justify-center mb-4 group-hover:bg-black group-hover:text-white transition-colors"
                >
                  <Mail className="h-6 w-6" />
                </motion.div>

                <h3 className="text-lg sm:text-xl font-display font-bold text-black mb-2 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-black/60 font-bold text-sm mb-2">
                  {item.email}
                </p>

                <p className="text-sm text-black/40 font-medium">
                  {item.description}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Contact Form - Updated to White Background */}
          <div className="max-w-3xl mx-auto mb-24">
            <form className="bg-white rounded-[2.5rem] p-10 md:p-16 border-2 border-black/5 shadow-2xl relative overflow-hidden" onSubmit={handleSubmit}>
              <h2 className="text-4xl md:text-5xl font-black mb-12 text-black text-center tracking-tighter uppercase">
                Send us a Message
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="space-y-3"
                >
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 ml-4">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-[#f8f9fa] border-2 border-transparent focus:border-black focus:bg-white transition-all outline-none font-bold text-black"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="space-y-3"
                >
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 ml-4">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-[#f8f9fa] border-2 border-transparent focus:border-black focus:bg-white transition-all outline-none font-bold text-black"
                    placeholder="Email address"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-3 mb-10"
              >
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 ml-4">Message</label>
                <textarea
                  rows={6}
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-[#f8f9fa] border-2 border-transparent focus:border-black focus:bg-white transition-all outline-none resize-none font-bold text-black"
                  placeholder="How can we help?"
                />
              </motion.div>

              <motion.button
                type="submit"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-full py-5 rounded-2xl bg-black text-white font-black uppercase text-sm tracking-[0.2em] transition-all duration-300 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] hover:-translate-y-1 active:scale-95"
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
