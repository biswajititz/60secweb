"use client";
import { motion } from "framer-motion";
import ShapeGrid from "./animation/ShapeGrid ";
const steps = [
  { n: "01", title: "Open 60Sec", desc: "Download the app and create your account in seconds." },
  { n: "02", title: "Choose Your Interests", desc: "Pick the topics and sources that matter to you." },
  { n: "03", title: "Read News in 60 Seconds", desc: "Bite-sized summaries that respect your time." },
  { n: "04", title: "Stay Updated Anywhere", desc: "Real-time alerts, offline access, everywhere you go." },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-20 md:py-28 relative bg-blue-950 w-[95%] lg:container  mx-auto rounded-4xl overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-white">How it works</span>
          <h2 className="mt-3  text-white text-3xl lg:text-[40px] font-bold ">From install to informed in a minute</h2>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent md:block" />
          <div className="space-y-10 md:space-y-0">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className={`relative grid items-center gap-6 md:grid-cols-2 md:gap-16 ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}
              >
                <div className={`${i % 2 === 1 ? "md:[direction:ltr]" : ""}`}>
                  <div className="rounded-2xl bg-card p-6 shadow-card md:p-8">
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-[#ecdd04] px-3 py-1 text-xs font-bold tracking-wider text-accent-foreground">STEP {s.n}</span>
                    </div>
                    <h3 className="mt-4 text-2xl font-bold text-blue-950">{s.title}</h3>
                    <p className="mt-2 text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
                {/* <div className="relative hidden items-center justify-center md:flex">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-hero font-display text-3xl font-bold text-primary-foreground shadow-elegant">
                    {s.n}
                  </div>
                </div> */}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className=" w-full h-full absolute top-0 left-0 z-0">
        <ShapeGrid speed={0.3}
        squareSize={40}
        direction='diagonal' // up, down, left, right, diagonal
        borderColor="#1a2a5f"
        hoverFillColor='#222'
        shape='square' // square, hexagon, circle, triangle
        hoverTrailAmount={0} // number of trailing hovered shapes (0 = no trail)
        />    
      </div>
    </section>
  );
}
