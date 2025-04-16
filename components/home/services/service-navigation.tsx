"use client";

import React from "react";
import { motion } from "motion/react";

interface ServicesNavigationProps {
  services: Array<{
    id: string;
    title: string;
  }>;
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

export default function ServicesNavigation({
  services,
  activeSection,
  onSectionChange,
}: ServicesNavigationProps) {
  return (
    <motion.div
      className="md:w-2/5 md:sticky md:top-32 h-fit"
      style={{ alignSelf: "flex-start" }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
    >
      <h2 className="text-6xl font-bold mb-8">Προσφερομενες Υπηρεσιες</h2>
      <div className="flex flex-col space-y-4">
        {services.map((service) => (
          <motion.button
            key={service.id}
            className={`text-left text-2xl text-black/90 transition-colors ${
              activeSection === service.id
                ? "text-primary font-semibold"
                : "hover:text-gray-600"
            }`}
            onClick={() => onSectionChange(service.id)}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.1 }}
          >
            {service.title}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
