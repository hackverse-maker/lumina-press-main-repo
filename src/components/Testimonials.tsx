import { Quote, Star } from "lucide-react";

const testimonials = [
  { name: "Olivia Hart", role: "Essayist", text: "Inkwell completely changed how I think about publishing. The editor feels like writing in a notebook." },
  { name: "Marcus Lee", role: "Engineer", text: "The cleanest reading experience on the web. I finally read full essays again." },
  { name: "Sara Okafor", role: "Designer", text: "Beautiful typography, thoughtful defaults, and a community that actually reads." },
  { name: "Theo Martin", role: "Founder", text: "We grew our blog 4x in two months after switching. The analytics are excellent." },
  { name: "Elena Rossi", role: "Journalist", text: "It feels premium without trying too hard. Every detail is considered." },
  { name: "Jordan Park", role: "Author", text: "I publish weekly here and the engagement is unlike any other platform." },
];

const Card = ({ t }: { t: typeof testimonials[number] }) => (
  <div className="w-[340px] shrink-0 card-premium mx-3 flex flex-col justify-between">
    <div>
      <Quote className="h-6 w-6 text-primary mb-6" />
      <p className="text-foreground/80 text-base leading-relaxed italic">"{t.text}"</p>
    </div>
    <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
      <div>
        <div className="font-bold text-[15px]">{t.name}</div>
        <div className="text-xs font-semibold text-primary/70 uppercase tracking-wider">{t.role}</div>
      </div>
      <div className="flex gap-0.5 text-primary">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-3 w-3 fill-current" />
        ))}
      </div>
    </div>
  </div>
);

export const Testimonials = () => {
  const row = [...testimonials, ...testimonials];
  return (
    <section className="section-padding bg-secondary/10 overflow-hidden scale-95 sm:scale-100">
      <div className="container-tight text-center mb-16">
        <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
          Client Success
        </span>
        <h2 className="text-balance">Trusted by world-class security professionals.</h2>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-secondary/10 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-secondary/10 to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee-slow overflow-x-auto scroll-smooth">
          {row.map((t, i) => <Card key={i} t={t} />)}
        </div>
        <div className="flex animate-marquee-slow mt-8 overflow-x-auto scroll-smooth" style={{ animationDirection: "reverse" }}>
          {row.map((t, i) => <Card key={`b-${i}`} t={t} />)}
        </div>
      </div>
    </section>
  );
};
