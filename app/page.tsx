"use client";
import {Hero} from"../component/hero";
import {WhyChoose} from"../component/WhyChoose";
import {HowItWorks} from"../component/HowItWorks";
import {Gallery} from"../component/Gallery";
import {DownloadCTA} from"../component/DownloadCTA";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <WhyChoose />
      <HowItWorks />
      <Gallery />
      <DownloadCTA />
    </main>
  );
}
