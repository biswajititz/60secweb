"use client";
import { motion } from "framer-motion";
import { Zap, Globe } from "lucide-react";
import { StoreButtons } from "./StoreButtons";
import appMockup from "../public/assets/mobile1.png";
import Image from "next/image";
import ShapeGrid from "./animation/ShapeGrid ";


const floatingCards = [
  { label: "BREAKING", title: "Markets hit record high", color: "bg-[#fdc604] text-black", pos: "top-4 -left-6 md:-left-16", delay: 0, r: -6 },
  { label: "TECH", title: "AI changes the way we work", color: "bg-white text-blue-950", pos: "top-1/3 -right-6 md:-right-20", delay: 0.4, r: 5 },
  { label: "SPORTS", title: "Champions crowned tonight", color: "bg-blue-950 text-white", pos: "bottom-12 -left-4 md:-left-20", delay: 0.8, r: 4 },
];

export function Hero() {
  return (
    <section className=" container mx-auto relative overflow-hidden bg-blue-950 text-primary-foreground mt-5 rounded-4xl ">
      <div className="relative mx-auto grid px-12 gap-12  md:grid-cols-2 md:items-center py-10 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left pl-12"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-white">
            <Zap className="h-3.5 w-3.5 text-accent" />
            Stay Informed in 60 Seconds
          </span>
          <h1 className="mt-6 text-balance text-6xl font-bold leading-[1.05]  w-full">
            News That Matters.
            <br />
            <span className="text-accent">In Just 60 Seconds.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-white/80 md:mx-0 md:text-lg">
            Breaking news, business, politics, sports, technology, health and entertainment —
            summarized into quick, easy-to-read updates from around the world.
          </p>
          <div className="mt-8 flex justify-center md:justify-start">
            <StoreButtons variant="light" />
          </div>
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-white/70 md:justify-start">
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-accent" />
              50+ trusted sources
            </div>
            <div>★ 4.9 rating</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto"
        >
          {/* <div className="absolute inset-0 -m-10 rounded-full bg-accent/20 blur-3xl" /> */}
            <div className="relative ">
              <Image
                  src={appMockup}
                  alt="60Sec app interface"
                  className="object-cover w-[280px]  "
                  priority
              />
            </div>

          {floatingCards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + c.delay, duration: 0.6 }}
              style={{ ["--r" as never]: `${c.r}deg` }}
              className={`absolute ${c.pos} animate-float hidden sm:block`}
            >
              <div className={`w-44 rounded-2xl ${c.color} p-3 shadow-elegant`}>
                <div className="text-[10px] font-bold tracking-wider">{c.label}</div>
                <div className="mt-1 text-sm font-semibold leading-tight">{c.title}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
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