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
      const offsetPosition = sectionId === "hero" ? 0 : element.offsetTop - 90;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-row gap-2 ml-4 ">
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
        index={11}
        onClick={() => scrollToSection("services")}
      />
      <HeaderLink
        key="contact"
        text="επικοινωνια"
        href="#contact"
        isActive={activeSection === "contact"}
        isHovered={isHovered}
        setIsHovered={setIsHovered}
        index={22}
        onClick={() => scrollToSection("contact")}
      />
    </div>
  );
}
