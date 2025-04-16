"use client";

import FotovoltaikaPage from "@/components/services/fotovoltaika";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function FotovoltaikaRoute() {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        <FotovoltaikaPage />
      </motion.div>
    </AnimatePresence>
  );
}
