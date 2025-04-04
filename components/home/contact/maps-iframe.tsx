"use client";

import React from "react";
import { motion } from "motion/react";

interface MapProps {
  isVisible: boolean;
}

export default function GoogleMapsIframe({ isVisible }: MapProps) {
  return (
    <motion.div
      className="w-full overflow-hidden mt-8 p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 1.5,
        ease: [0.23, 1, 0.32, 1],
        delay: 0.6,
      }}
    >
      <div className="w-full h-96 md:h-[450px] rounded-lg overflow-hidden shadow-lg border-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d757.3800385372394!2d22.980239!3d40.596346!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a839f3704a0161%3A0x52631405b615e10d!2zUkVQT1dFUiBTT0xVVElPTlMgLSDOpM61z4fOvc65zrrOriDOms6xz4TOsc-DzrrOtc-FzrHPg8-EzrnOus6uIM6Vz4TOsc65z4HOtc6vzrEgLSDOoM-Bz4zOs8-BzrHOvM68zrEgzpXOvs6_zrnOus6_zr3Ov868z44gLSDOkc69zrHOus6xzrnOvc6vz4POtc65z4IgLSDOps-Jz4TOv86yzr_Ou8-EzrHPis66zqwgLSDOkc69z4TOu86vzrXPgiDOmM61z4HOvM-Mz4TOt8-EzrHPgg!5e0!3m2!1sel!2sgr!4v1743787009387!5m2!1sel!2sgr"
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
