"use client";

import Hero from "./hero";
import Services from "./services/services";
import Contact from "./contact/contact";
import PageTransition from "../page-transition";

export default function Home() {
  return (
    <PageTransition toService={true}>
      <div className="relative min-h-screen">
        <Hero />
        <Services />
        <Contact />
      </div>
    </PageTransition>
  );
}
