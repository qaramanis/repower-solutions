"use client";

import TexnikosAsfaleiasPage from "@/components/services/texnikos-asfaleias";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function TexnikosAsfaleiasRoute() {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        <TexnikosAsfaleiasPage />
      </motion.div>
    </AnimatePresence>
  );
}
