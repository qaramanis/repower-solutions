"use client";

import React from "react";
import { motion } from "motion/react";

interface MapProps {
  isVisible: boolean;
}

export default function GoogleMapsIframe({ isVisible }: MapProps) {
  return (
    <motion.div
      className="w-full rounded-lg overflow-hidden shadow-md mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 1.5,
        ease: [0.23, 1, 0.32, 1],
        delay: 0.6,
      }}
    >
      <div className="aspect-video w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d318.4398371251662!2d22.98027079274951!3d40.59619526278169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a838b7ac8ba733%3A0xfa0c95a252243e5a!2zzpjOtc-Dz4POsc67zr_Ovc6vzrrOt8-CIDQsIM6gz4XOu86xzq_OsSA1NTUgMzU!5e0!3m2!1sel!2sgr!4v1743757016082!5m2!1sel!2sgr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Repower Solutions Location"
          className="w-full h-full"
        />
      </div>
    </motion.div>
  );
}
