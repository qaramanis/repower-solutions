"use client";

import HlektronikTaytothtaPage from "@/components/services/hlektronikh-taytothta";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function HlektronikTaytothtaRoute() {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        <HlektronikTaytothtaPage />
      </motion.div>
    </AnimatePresence>
  );
}
