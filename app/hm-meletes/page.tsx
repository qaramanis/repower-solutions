"use client";

import HmMeletesPage from "@/components/services/hm-meletes";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function HmMeletesRoute() {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        <HmMeletesPage />
      </motion.div>
    </AnimatePresence>
  );
}
