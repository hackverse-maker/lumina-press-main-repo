"use client";

import { Hero } from "@/components/Hero";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, Hammer, Shield, Award } from "lucide-react";

const services = [
  {
    icon: CheckCircle,
    title: "New Installation",
    description: "Professional roof installation with premium materials and expert craftsmanship."
  },
  {
    icon: Hammer,
    title: "Repair Services",
    description: "Fast and reliable roof repairs for leaks, damage, and maintenance issues."
  },
  {
    icon: Shield,
    title: "Maintenance Plans",
    description: "Preventative maintenance to extend your roof's lifespan and prevent costly repairs."
  },
  {
    icon: Award,
    title: "Inspections",
    description: "Comprehensive roof inspections to identify potential issues before they become problems."
  },
];

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Services Section */}
      <section id="services" className="relative py-20 md:py-32 bg-gradient-to-b from-background to-secondary/20">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Comprehensive roofing solutions tailored to meet your specific needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-xl bg-card border border-border hover:border-accent hover:shadow-card-hover transition-all duration-300"
              >
                <service.icon className="h-12 w-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-foreground/70">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 md:py-32">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                Why Choose Maha Roofing?
              </h2>
              <p className="text-lg text-foreground/70 mb-6">
                With over 25 years of industry experience, we&apos;ve built our reputation on quality, reliability, and customer satisfaction. Our team of licensed and insured professionals is committed to delivering exceptional results on every project.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "25+ Years of Experience",
                  "Licensed and Insured",
                  "Free Inspections & Estimates",
                  "Warranty on All Work",
                  "Emergency Services Available",
                  "100% Customer Satisfaction Guarantee"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-accent text-accent-foreground px-6 py-3 font-semibold hover:scale-105 transition-transform"
              >
                Get Free Quote
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-xl overflow-hidden border border-border">
                <img
                  src="/maha-roofing-logo.jpg"
                  alt="Maha Roofing Team"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground rounded-xl p-6 max-w-xs">
                <p className="text-sm font-semibold">Trusted by Hundreds of Homeowners</p>
                <p className="text-2xl font-bold mt-2">500+</p>
                <p className="text-sm text-accent-foreground/80">Roofs Successfully Completed</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
