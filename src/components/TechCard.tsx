"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LucideIcon, Cpu, Zap, Code2, Box, ArrowRight } from "lucide-react";
import type { TechItem } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  cpu: Cpu,
  zap: Zap,
  "code-2": Code2,
  box: Box,
};

interface TechCardProps {
  item: TechItem;
  index?: number;
}

export const TechCard = ({ item, index = 0 }: TechCardProps) => {
  const Icon = item.icon ? iconMap[item.icon] : Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-10 rounded-[2.5rem] bg-white border-2 border-black/5 hover:border-black/10 transition-all duration-500 shadow-sm hover:shadow-xl group"
    >
      <div className="flex flex-col h-full">
        <div className="h-20 w-20 rounded-2xl bg-[#f8f9fa] flex items-center justify-center border-2 border-black/5 mb-10 transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:border-[#00CFFF]/20 group-hover:shadow-[0_0_30px_rgba(0,207,255,0.2)]">
          <Icon className="h-10 w-10 text-[#00CFFF]" />
        </div>
        
        <div className="flex-1">
          <h3 className="font-black text-2xl tracking-tighter text-black uppercase mb-4">
            {item.title}
          </h3>
          
          <p className="text-black/60 leading-relaxed font-medium">
            {item.description}
          </p>
        </div>
        
        <div className="mt-10 pt-8 border-t border-black/5">
          <Link 
            href="/tech"
            className="text-xs font-black uppercase tracking-[0.2em] text-black hover:text-[#00CFFF] transition-colors inline-flex items-center gap-2 group/link"
          >
            Explore documentation 
            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
