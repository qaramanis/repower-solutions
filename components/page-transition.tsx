"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useNavigation } from "@/context/navigation-context";

interface PageTransitionProps {
  children: React.ReactNode;
  toService?: boolean;
}

export default function PageTransition({
  children,
  toService = true,
}: PageTransitionProps) {
  const [isClient, setIsClient] = useState(false);
  const { isTransitioning } = useNavigation();
  const pathname = usePathname();
  const isServicePage = pathname !== "/";

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>{children}</div>;
  }

  return (
    <motion.div
      initial={{
        x: isServicePage ? "100%" : "100%",
        opacity: 0,
      }}
      animate={{
        x: isTransitioning ? (isServicePage ? "-100%" : "100%") : 0,
        opacity: isTransitioning ? 0 : 1,
      }}
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
