"use client";
import React, { useEffect, useState, useRef } from "react";
import DecayCard from "../decay-card";
import { motion } from "motion/react";

export default function CardBackground() {
  const [isMobile, setIsMobile] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Simple parallax effect for mobile
  useEffect(() => {
    if (isMobile && logoRef.current) {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const opacity = Math.max(0.5 - scrollY / 2000, 0.05);
        const scale = Math.max(1 - scrollY / 5000, 0.9);

        if (logoRef.current) {
          logoRef.current.style.opacity = opacity.toString();
          logoRef.current.style.transform = `translate(-50%, -50%) scale(${scale})`;
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isMobile]);

  return (
    <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-0 overflow-hidden">
      <div className="relative w-full max-w-5xl h-screen">
        {/* Center card - show different versions based on device */}
        {isMobile ? (
          <div
            ref={logoRef}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-50 transition-all duration-300 ease-out"
            style={{ willChange: "transform, opacity" }}
          >
            <motion.div
              initial={{ filter: "blur(5px)" }}
              animate={{ filter: "blur(4px)" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="w-[280px] h-[280px] relative"
            >
              <img
                src="/rs-transparent-128-128.svg"
                alt="Repower Solutions"
                className="w-full h-full object-contain"
                style={{
                  filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))",
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              />
            </motion.div>
          </div>
        ) : (
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-65">
            <DecayCard
              width={360}
              height={360}
              image="/rs-transparent-128-128.svg"
            />
          </div>
        )}
      </div>
    </div>
  );
}
