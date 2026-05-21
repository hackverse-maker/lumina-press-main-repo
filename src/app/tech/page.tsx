"use client";

import { PageHero } from "@/components/PageHero";
import { CyberCableSection } from "@/components/CyberCableSection";
import { CableFeatures } from "@/components/CableFeatures";

export default function TechPage() {
  return (
    <main className="min-h-screen pb-20 bg-[#FAF9F6]">
      <PageHero 
        title="Innovation & Security" 
        subtitle="Bridging the gap between timeless wisdom and modern hardware-level protection."
        type="tech" 
      />

      {/* Cyber Cable Section */}
      <CyberCableSection />

      {/* Cable Features */}
      <CableFeatures />


    </main>
  );
}
