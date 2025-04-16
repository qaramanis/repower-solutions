"use client";

import PistopoihtikoPage from "@/components/services/pistopoihtiko";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PistopohtikoRoute() {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        <PistopoihtikoPage />
      </motion.div>
    </AnimatePresence>
  );
}
