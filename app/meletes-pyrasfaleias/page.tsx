"use client";

import MeletesPyrasfaleiasPage from "@/components/services/meletes-pyrasfaleias";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function MeletesPyrasfaleiasRoute() {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        <MeletesPyrasfaleiasPage />
      </motion.div>
    </AnimatePresence>
  );
}