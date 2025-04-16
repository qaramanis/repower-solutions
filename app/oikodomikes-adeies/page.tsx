"use client";

import OikodomikesAdeiesPage from "@/components/services/oikodomikes-adeies";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function OikodomikesAdeiesRoute() {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        <OikodomikesAdeiesPage />
      </motion.div>
    </AnimatePresence>
  );
}
