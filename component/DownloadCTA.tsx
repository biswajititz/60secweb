"use client";
import { StoreButtons } from "./StoreButtons";
import ShapeGrid from "./animation/ShapeGrid ";
export function DownloadCTA() {
  return (
    <section id="download" className="relative overflow-hidden bg-gradient-hero py-24 text-primary-foreground md:py-32 bg-blue-950 w-[95%] lg:container mx-auto rounded-4xl mb-12 ">
      <div className="pointer-events-none absolute inset-0 z-10">
        {/* <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-accent/30 blur-3xl" /> */}
        <div className="absolute bottom-0 right-10 h-80 w-80 rounded-full bg-primary-glow/40 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8 z-10">
        <h2 className="text-balance text-3xl lg:text-[40px] font-bold leading-tight ">
          Get the news.<br />
          <span className="text-accent">Not the noise.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/85">
          Download 60Sec today and stay informed in just one minute.
        </p>
        <div className="mt-10 flex justify-center">
          <StoreButtons variant="light" />
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
