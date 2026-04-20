"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Lock } from "lucide-react";

const features = [
  {
    title: "Secure Charging Mode",
    description: "Military-grade encryption protects every charge session",
    icon: Shield,
  },
  {
    title: "User Control Button",
    description: "Complete control over data flow and charging parameters",
    icon: Zap,
  },
  {
    title: "Guard Against Cyber Attacks",
    description: "Real-time threat detection and automatic protection",
    icon: Lock,
  },
];

export const CableFeatures = () => {
  return (
    <section className="relative py-16 md:py-24 px-4">
      <div className="container-tight">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="h-14 w-14 rounded-xl bg-gradient-accent/20 flex items-center justify-center mb-4 group-hover:bg-gradient-accent/30 transition-colors duration-300"
              >
                <feature.icon className="h-7 w-7 text-accent" />
              </motion.div>

              <h3 className="text-lg md:text-xl font-display font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover glow effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute -inset-4 bg-accent/5 rounded-2xl -z-10 blur-xl"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
