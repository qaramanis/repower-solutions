"use client";

import { Button } from "@/components/ui/button";
import Aurora from "@/components/aurora";
import { MoveDown } from "lucide-react";

export function HomeHero() {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-screen h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Τεχνικες
          <br />
          ενεργειακες λυσεις
        </h1>

        <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto">
          εξοικονομηση ενεργειας και αναβαθμιση του χωρου σας
          <br />
          με τις πιο συγχρονες και αποδοτικες λυσεις
        </p>
      </div>

      <div className="absolute bottom-10">
        <Button
          onClick={scrollToNextSection}
          variant="secondary"
          className="rounded-full p-2 cursor-pointer"
          aria-label="Scroll down"
        >
          <MoveDown size={24} />
        </Button>
      </div>
    </section>
  );
}
