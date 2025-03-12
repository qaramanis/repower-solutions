"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import RepowerLogoLoader from "./repower-logo-loader";

interface PageLoaderProps {
  children: React.ReactNode;
  initialDelay?: number; // Time in ms before starting to hide the loader
  transitionDuration?: number; // Duration of the fade out animation
}

export default function PageLoader({
  children,
  initialDelay = 2000,
  transitionDuration = 600,
}: PageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set a timeout to hide the loader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, initialDelay);

    return () => clearTimeout(timer);
  }, [initialDelay]);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, transitionDuration);

      return () => clearTimeout(timer);
    }
  }, [isLoading, transitionDuration]);

  return (
    <>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#1c1b2a]"
          style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
          initial={{ opacity: 1 }}
          animate={{
            opacity: isLoading ? 1 : 0,
          }}
          transition={{
            duration: transitionDuration / 1000,
            ease: [0.23, 1, 0.32, 1],
          }}
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{
              scale: isLoading ? 1 : 2,
              opacity: isLoading ? 1 : 0,
            }}
            transition={{
              duration: transitionDuration / 1000,
              ease: [0.19, 1, 0.22, 1],
            }}
          >
            <RepowerLogoLoader />
          </motion.div>
        </motion.div>
      )}
      <div className={isLoading ? "invisible" : "visible"}>{children}</div>
    </>
  );
}
