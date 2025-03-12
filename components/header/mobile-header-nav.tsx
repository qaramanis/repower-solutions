"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight } from "lucide-react";
import HeaderLink from "./header-link";

export default function MobileHeaderNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isOpen && !target.closest(".mobile-nav-container")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    const sections = ["hero", "services", "contact"];

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetPosition = sectionId === "hero" ? 0 : element.offsetTop - 45;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <div className="mobile-nav-container relative md:hidden">
      <motion.div
        animate={{ rotate: isOpen ? 90 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <button
          className="p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <ChevronRight size={24} />
        </button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 right-0 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 z-50 w-64"
          >
            <div className="flex flex-col gap-4">
              <div
                className="cursor-pointer"
                onClick={() => scrollToSection("hero")}
              >
                <HeaderLink
                  text="αρχικη"
                  href="#"
                  isActive={activeSection === "hero"}
                  isHovered={null}
                  setIsHovered={() => {}}
                  index={0}
                  onClick={() => scrollToSection("hero")}
                />
              </div>
              <div
                className="cursor-pointer"
                onClick={() => scrollToSection("services")}
              >
                <HeaderLink
                  text="υπηρεσιες"
                  href="#"
                  isActive={activeSection === "services"}
                  isHovered={null}
                  setIsHovered={() => {}}
                  index={1}
                  onClick={() => scrollToSection("services")}
                />
              </div>
              <div
                className="cursor-pointer"
                onClick={() => scrollToSection("contact")}
              >
                <HeaderLink
                  text="επικοινωνια"
                  href="#"
                  isActive={activeSection === "contact"}
                  isHovered={null}
                  setIsHovered={() => {}}
                  index={2}
                  onClick={() => scrollToSection("contact")}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
