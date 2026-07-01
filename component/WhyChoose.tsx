"use client";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, Sparkles, Radio, Layers, Bookmark } from "lucide-react";

const items = [
  { icon: Zap, title: "Fast News", desc: "Get important updates in under 60 seconds." },
  { icon: ShieldCheck, title: "Trusted Sources", desc: "Powered by reliable global news sources." },
  { icon: Sparkles, title: "Personalized Feed", desc: "Read topics that matter most to you." },
  { icon: Radio, title: "Real-Time Updates", desc: "Stay informed as stories develop." },
  { icon: Layers, title: "Clean Experience", desc: "No clutter. Just news." },
  { icon: Bookmark, title: "Save For Later", desc: "Bookmark stories to read anytime." },
];

export function WhyChoose() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-glow text-blue-950">Why 60Sec</span>
          <h2 className="mt-3 text-balance text-3xl font-bold md:text-5xl text-blue-950">Why choose 60Sec?</h2>
          <p className="mt-4 text-muted-foreground">Built for people who want news, not noise.</p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl bg-card p-6 shadow-card transition-all hover:bg-yellow-50 hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-950  transition-colors group-hover:bg-[#fdc604]  text-yellow-400 group-hover:text-accent-foreground">
                <it.icon className="h-6 w-6 " />
              </div>
              <h3 className="text-lg font-semibold text-blue-950">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
              <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-accent/10 opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
