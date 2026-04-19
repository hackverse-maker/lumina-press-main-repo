"use client";

import React from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Simple Hero */}
      <section className="relative w-full py-16 flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-4">
            Get in <span className="text-gradient-accent">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            We're here to help you anytime.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="container-tight max-w-5xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <div className="p-6 rounded-2xl bg-secondary/30 border border-border flex items-start gap-4">
                <Mail className="h-6 w-6 text-accent shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Email Us</h3>
                  <p className="text-sm text-muted-foreground">hello@luminapress.com</p>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-secondary/30 border border-border flex items-start gap-4">
                <MapPin className="h-6 w-6 text-accent shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Visit Us</h3>
                  <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-secondary/30 border border-border flex items-start gap-4">
                <Clock className="h-6 w-6 text-accent shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Working Hours</h3>
                  <p className="text-sm text-muted-foreground">Mon - Fri, 9AM - 6PM</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <form className="glass rounded-3xl p-8 border border-border" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent transition-colors outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent transition-colors outline-none"
                      placeholder="Email address"
                    />
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent transition-colors outline-none resize-none"
                    placeholder="How can we help?"
                  />
                </div>
                <button className="w-full py-4 rounded-xl bg-accent text-accent-foreground font-bold hover:shadow-accent-glow transition-all">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
