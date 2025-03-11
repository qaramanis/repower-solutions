"use client";

import Hero from "./hero";
import Services from "./services";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Hero />
      <Services />
      <Hero />
    </div>
  );
}
