"use client";

import login from "../public/assets/mobile1.png";
import explor from "../public/assets/mobile2.png";
import bookmark from "../public/assets/mobile4.png";
import profile from "../public/assets/mobile3.png";
import Image from "next/image";

export function Gallery() {
  return (
    <section className="overflow-hidden bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 text-center md:px-8">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary-glow">Gallery</span>
        <h2 className="mt-3 text-balance text-3xl font-bold md:text-5xl">A closer look at 60Sec</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">A clean, focused reading experience on every screen.</p>
      </div>

      <div className="relative mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface to-transparent" />
        <div className="flex flex-row gap-6 px-6 justify-center items-center">
          <Image
              src={login}
              alt="60Sec app interface"
              className="object-cover w-[280px]  "
              priority
          />
          <Image
              src={explor}
              alt="60Sec app interface"
              className="object-cover w-[280px]  "
              priority
          />
          <Image
              src={bookmark}
              alt="60Sec app interface"
              className="object-cover w-[280px]  "
              priority
          />
          <Image
              src={profile}
              alt="60Sec app interface"
              className="object-cover w-[280px]  "
              priority
          />
        </div>
      </div>
    </section>
  );
}
