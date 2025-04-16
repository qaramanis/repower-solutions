"use client";

import ProgrammaExoikonomoPage from "@/components/services/programma-exoikonomo";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function ProgrammaExoikonomoRoute() {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        <ProgrammaExoikonomoPage />
      </motion.div>
    </AnimatePresence>
  );
}
