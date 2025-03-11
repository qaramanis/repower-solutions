"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import HeaderLink from "./header-link";

export default function HeaderNav() {
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>("hero");

  // Track scroll position to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Define section breakpoints
      if (scrollPosition < windowHeight * 0.5) {
        setActiveSection("hero");
      } else if (scrollPosition < windowHeight * 2) {
        setActiveSection("services");
      } else {
        setActiveSection("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetPosition = sectionId === "hero" ? 0 : element.offsetTop - 90;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-row gap-2 ml-4">
      <HeaderLink
        key="hero"
        text="αρχικη"
        href="#hero"
        isActive={activeSection === "hero"}
        isHovered={isHovered}
        setIsHovered={setIsHovered}
        index={0}
        onClick={() => scrollToSection("hero")}
      />
      <HeaderLink
        key="services"
        text="υπηρεσιες"
        href="#services"
        isActive={activeSection === "services"}
        isHovered={isHovered}
        setIsHovered={setIsHovered}
        index={1}
        onClick={() => scrollToSection("services")}
      />
      <HeaderLink
        key="contact"
        text="επικοινωνια"
        href="#contact"
        isActive={activeSection === "contact"}
        isHovered={isHovered}
        setIsHovered={setIsHovered}
        index={2}
        onClick={() => scrollToSection("contact")}
      />
    </div>
  );
}
