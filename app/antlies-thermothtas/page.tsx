"use client";

import AntliesThermothtasPage from "@/components/services/antlies-thermothtas";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function AntliesThermothtasRoute() {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        <AntliesThermothtasPage />
      </motion.div>
    </AnimatePresence>
  );
}
