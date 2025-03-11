"use client";

import Hero from "./hero";
import Services from "./services";
import Contact from "./contact";
import RepowerSolutionsLogo from "../repower-solutions-logo";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Hero />
      <Services />
      <Contact />
    </div>
  );
}
