"use client";

import AnakainiseisPage from "@/components/services/anakainiseis";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function AnakainiseisRoute() {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        <AnakainiseisPage />
      </motion.div>
    </AnimatePresence>
  );
}
