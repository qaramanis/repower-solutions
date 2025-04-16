"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

interface PageTransitionProps {
  children: React.ReactNode;
  toService?: boolean;
}

export default function PageTransition({
  children,
  toService = true,
}: PageTransitionProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>{children}</div>;
  }

  return (
    <motion.div
      initial={{
        x: toService ? "-100%" : "100%",
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
    //   exit={{
    //     x: toService ? "100%" : "-100%",
    //     opacity: 0,
    //   }}
      transition={{
        type: "tween",
        ease: [0.25, 1, 0.5, 1],
        duration: 0.6,
      }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}
