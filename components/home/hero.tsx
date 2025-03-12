"use client";

import { Button } from "@/components/ui/button";
import { MoveDown } from "lucide-react";
import { ScrollVelocity } from "../scroll-velocity";

export default function Hero() {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight - 45,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="hero"
      className="relative w-screen h-screen flex flex-col items-center justify-center text-center px-4"
    >
      <div className="absolute max-w-4xl top-35/100">
        <h1 className="text-8xl font-extrabold tracking-tight mb-6">
          Τεχνικες
          <br />
          ενεργειακες λυσεις
        </h1>

        <p className="text-lg md:text-2xl mt-4 max-w-2xl mx-auto">
          εξοικονομηση ενεργειας και αναβαθμιση του χωρου σας
          <br />
          με τις πιο συγχρονες και αποδοτικες λυσεις
        </p>
      </div>
      <div className="absolute w-full bottom-1/10">
        <ScrollVelocity
          texts={[
            "repower solutions repower solutions",
            "repower solutions repower solutions",
          ]}
          velocity={50}
          className="text-5xl font-semibold font-display"
        />
      </div>
      <div className="absolute bottom-5/100">
        <Button
          onClick={scrollToNextSection}
          variant="secondary"
          className="rounded-full p-2 cursor-pointer transition-transform duration-200 hover:scale-110"
          aria-label="Scroll down"
          size="lg"
        >
          <MoveDown size={64} />
        </Button>
      </div>
    </section>
  );
}
