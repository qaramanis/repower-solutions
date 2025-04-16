"use client";

import AdeiesLeitourgiasPage from "@/components/services/adeies-leitourgias";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function AdeiesLeitourgiasRoute() {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        <AdeiesLeitourgiasPage />
      </motion.div>
    </AnimatePresence>
  );
}
