"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import GoogleMapsIframe from "./maps-iframe";
import ContactInfo from "./contact-info";
import ContactForm from "./contact-form";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full min-h-[90vh] bg-transparent text-black py-20"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
        >
          <h2 className="text-6xl font-bold mb-8">Επικοινωνία</h2>
          <p className="text-2xl max-w-3xl">
            Επικοινωνήστε μαζί μας για να αξιολογήσουμε τις ανάγκες του έργου
            σας και να σας προτείνουμε την καλύτερη λύση!
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactInfo isVisible={isVisible} />
          <ContactForm isVisible={isVisible} />
        </div>
      </div>
      <GoogleMapsIframe isVisible={isVisible} />
    </section>
  );
}
