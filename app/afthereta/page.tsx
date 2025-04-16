"use client";

import AftheretaPage from "@/components/services/afthereta";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function AftheretaRoute() {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        <AftheretaPage />
      </motion.div>
    </AnimatePresence>
  );
}
