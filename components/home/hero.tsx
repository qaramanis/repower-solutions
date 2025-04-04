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
      className="relative w-full min-h-screen flex flex-col items-center justify-center text-center"
    >
      {/* Main content - moved lower with margin-top */}
      <div className="mt-48 md:mt-64 mb-32 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold tracking-tight mb-4 md:mb-6">
          <span className="block">Τεχνικη</span>
          <span className="block">κατασκευαστικη εταιρεια</span>
        </h1>

        {/* <p className="text-base sm:text-lg md:text-2xl mt-2 md:mt-4 max-w-2xl mx-auto">
          <span className="block">και αναβαθμιση του χωρου σας</span>
          <span className="block mt-1 md:mt-0">
            με τις πιο συγχρονες και αποδοτικες λυσεις
          </span>
        </p> */}
      </div>

      {/* ScrollVelocity - keeping the same bottom margin */}
      <div className="w-full mt-auto mb-24">
        <ScrollVelocity
          texts={[
            "η/μ εργα | τεχνικοσ ασφαλειας | αδειοδοτησεισ | ανακαινισεισ | κουφωματα |",
            "repower solutions | repower solutions |",
          ]}
          velocity={50}
          className="text-3xl md:text-5xl font-semibold font-display"
        />
      </div>

      {/* Button at the very bottom */}
      <div className="absolute bottom-3/100">
        <Button
          onClick={scrollToNextSection}
          variant="secondary"
          className="rounded-full p-1 md:p-2 cursor-pointer transition-transform duration-200 hover:scale-110"
          aria-label="Scroll down"
          size="icon"
        >
          <MoveDown size={32} className="md:w-12 md:h-12" />
        </Button>
      </div>
    </section>
  );
}
