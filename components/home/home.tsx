"use client";

import Hero from "./hero";
import Services from "./services/services";
import Contact from "./contact/contact";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Hero />
      <Services />
      <Contact />
    </div>
  );
}
