"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, ChevronDown } from "lucide-react";
import HeaderLink from "./header-link";
import Link from "next/link";
import { SERVICES_DATA } from "@/lib/services-data";

export default function MobileHeaderNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isOpen && !target.closest(".mobile-nav-container")) {
        setIsOpen(false);
        setIsServicesOpen(false);
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
      setIsServicesOpen(false);
    }
  };

  const toggleServices = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsServicesOpen(!isServicesOpen);
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
                className="cursor-pointer flex justify-center"
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

              <div className="h-px w-full bg-gray-200"></div>

              <div className="relative">
                <div
                  className="flex items-center justify-center cursor-pointer"
                  onClick={toggleServices}
                >
                  <HeaderLink
                    text="υπηρεσιες"
                    href="#"
                    isActive={activeSection === "services"}
                    isHovered={null}
                    setIsHovered={() => {}}
                    index={1}
                  />
                  <motion.div
                    animate={{ rotate: isServicesOpen ? -180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-1"
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      ref={servicesRef}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pl-4 mt-2 flex flex-col gap-2 overflow-hidden"
                    >
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            ref={servicesRef}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="pl-4 mt-2 flex flex-col gap-2 overflow-hidden"
                          >
                            {SERVICES_DATA.map((service) => (
                              <Link href={service.url} key={service.id}>
                                <div className="text-sm p-2 hover:bg-gray-100 rounded cursor-pointer">
                                  {service.title}
                                </div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="h-px w-full bg-gray-200"></div>

              <div
                className="cursor-pointer flex justify-center"
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
