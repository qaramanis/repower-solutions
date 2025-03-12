"use client";
import React, { useEffect, useState } from "react";
import DecayCard from "../decay-card";

export default function CardBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-0 overflow-hidden">
      <div className="relative w-full max-w-5xl h-screen">
        {/* Center card - show different versions based on device */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-75 blur-[4px]">
          {isMobile ? (
            <div className="w-[280px] h-[280px] relative">
              <img
                src="/rs-transparent-128-128.svg"
                alt="Repower Solutions"
                className="w-full h-full object-contain opacity-50 blur-[5px]"
              />
            </div>
          ) : (
            <DecayCard
              width={360}
              height={360}
              image="/rs-transparent-128-128.svg"
            />
          )}
        </div>
      </div>
    </div>
  );
}
