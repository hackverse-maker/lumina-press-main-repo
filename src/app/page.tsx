import { Hero } from "@/components/Hero";
import { Articles } from "@/components/Articles";
import { Knowledge } from "@/components/Knowledge";
import { Testimonials } from "@/components/Testimonials";
import { Tech } from "@/components/Tech";

export default function Home() {
  return (
    <main>
      <Hero />
      <Articles />
      <Knowledge />
      <Testimonials />
      <Tech />
    </main>
  );
}
