"use client";

import React from "react";
import { useEffect, useRef, useState } from "react";
import ServiceCard from "./service-card";
import ServicesNavigation from "./service-navigation";
import { SERVICES_DATA } from "@/lib/services-data";

export default function Services() {
  const [activeSection, setActiveSection] = useState<string>(
    SERVICES_DATA[0].id
  );
  const sectionRefs = useRef<Record<string, React.RefObject<HTMLDivElement>>>(
    {}
  );

  useEffect(() => {
    SERVICES_DATA.forEach((service) => {
      sectionRefs.current[service.id] =
        sectionRefs.current[service.id] || React.createRef();
    });
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);

    const targetRef = sectionRefs.current[sectionId];

    if (targetRef?.current) {
      const rect = targetRef.current.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const targetPosition = rect.top + scrollTop;

      const offsetPosition = targetPosition - 90;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 200;

    const sectionPositions = SERVICES_DATA.map((service) => {
      const ref = sectionRefs.current[service.id];
      if (!ref?.current) return { id: service.id, top: 0, bottom: 0 };

      const rect = ref.current.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      return {
        id: service.id,
        top: rect.top + scrollTop - 500,
        bottom: rect.bottom + scrollTop - 100,
      };
    });

    for (const section of sectionPositions) {
      if (scrollPosition >= section.top && scrollPosition < section.bottom) {
        if (activeSection !== section.id) {
          setActiveSection(section.id);
        }
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <section
      id="services"
      className="relative w-full min-h-screen bg-transparent text-black py-20"
    >
      <div className="container mx-auto max-w-8xl px-4">
        <div className="flex flex-col md:flex-row gap-75">
          <ServicesNavigation
            services={SERVICES_DATA.map((service) => ({
              id: service.id,
              title: service.title,
            }))}
            activeSection={activeSection}
            onSectionChange={scrollToSection}
          />

          <div className="md:w-3/5 space-y-32 pb-20">
            {SERVICES_DATA.map((service) => (
              <ServiceCard
                key={service.id}
                ref={(ref) => {
                  if (ref) {
                    sectionRefs.current[service.id] = { current: ref };
                  }
                }}
                service={service}
                isActive={activeSection === service.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
