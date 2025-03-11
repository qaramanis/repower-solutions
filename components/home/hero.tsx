"use client";

import { Button } from "@/components/ui/button";
import { MoveDown } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "@/hooks/useInView";

export default function Hero() {
  const [heroRef, isInView] = useInView(0.3);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight - 45,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="hero"
      ref={heroRef as React.RefObject<HTMLElement>}
      className="relative w-screen h-screen flex flex-col items-center justify-center text-center px-4"
    >
      <motion.div
        className="max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 30,
        }}
        transition={{
          duration: 0.8,
          ease: [0.23, 1, 0.32, 1],
        }}
      >
        <h1 className="text-8xl font-bold tracking-tight mb-6">
          Τεχνικες
          <br />
          ενεργειακες λυσεις
        </h1>

        <p className="text-lg md:text-2xl mt-4 max-w-2xl mx-auto">
          εξοικονομηση ενεργειας και αναβαθμιση του χωρου σας
          <br />
          με τις πιο συγχρονες και αποδοτικες λυσεις
        </p>
      </motion.div>

      <motion.div
        className="absolute bottom-3/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 20,
        }}
        transition={{
          duration: 0.8,
          ease: [0.23, 1, 0.32, 1],
          delay: 0.2,
        }}
      >
        <Button
          onClick={scrollToNextSection}
          variant="secondary"
          className="rounded-full p-2 cursor-pointer"
          aria-label="Scroll down"
          size="lg"
        >
          <MoveDown size={64} />
        </Button>
      </motion.div>
    </section>
  );
}
