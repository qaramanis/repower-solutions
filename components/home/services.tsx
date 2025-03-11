"use client";

import React from "react";
import { useEffect, useRef, useState } from "react";

const SERVICES_DATA = [
  {
    id: "fotovoltaika",
    title: "Φωτοβολταϊκά",
    description:
      "Η παραγωγή ενέργειας από τον ήλιο είναι μια από τις πιο αποδοτικές λύσεις για την εξοικονόμηση ενέργειας. Προσφέρουμε ολοκληρωμένες λύσεις φωτοβολταϊκών συστημάτων για οικιακή και επαγγελματική χρήση.",
  },
  {
    id: "antlies",
    title: "Αντλίες θερμότητας",
    description:
      "Οι αντλίες θερμότητας αποτελούν μια οικονομική και οικολογική λύση για θέρμανση και ψύξη. Προσφέρουμε εγκατάσταση και συντήρηση αντλιών θερμότητας από κορυφαίους κατασκευαστές.",
  },
  {
    id: "exoikonomo",
    title: "Πρόγραμμα Εξοικονομώ",
    description:
      "Αναλαμβάνουμε όλες τις διαδικασίες για την ένταξή σας στο πρόγραμμα Εξοικονομώ, από την αρχική αίτηση έως την ολοκλήρωση του έργου. Η ομάδα μας έχει μεγάλη εμπειρία στη διαχείριση τέτοιων επιδοτούμενων προγραμμάτων.",
  },
  {
    id: "anakainiseis",
    title: "Ανακαινίσεις",
    description:
      "Προσφέρουμε ολοκληρωμένες υπηρεσίες ανακαίνισης για οικίες και επαγγελματικούς χώρους. Από μικρές παρεμβάσεις μέχρι ριζικές ανακαινίσεις, η ομάδα μας αναλαμβάνει όλες τις εργασίες με συνέπεια.",
  },
];

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

    // Map services to their positions
    const sectionPositions = SERVICES_DATA.map((service) => {
      const ref = sectionRefs.current[service.id];
      if (!ref?.current) return { id: service.id, top: 0, bottom: 0 };

      const rect = ref.current.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      return {
        id: service.id,
        top: rect.top + scrollTop - 250,
        bottom: rect.bottom + scrollTop - 500,
      };
    });

    // Find current active section
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
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row gap-10">
          <div
            className="md:w-2/5 md:sticky md:top-32 h-fit"
            style={{ alignSelf: "flex-start" }}
          >
            <h2 className="text-5xl font-bold mb-8">Προσφερομενες Υπηρεσιες</h2>
            <div className="flex flex-col space-y-4">
              {SERVICES_DATA.map((service) => (
                <button
                  key={service.id}
                  className={`text-left text-lg transition-colors ${
                    activeSection === service.id
                      ? "text-primary font-semibold"
                      : "hover:text-gray-600"
                  }`}
                  onClick={() => scrollToSection(service.id)}
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>

          <div className="md:w-3/5 space-y-32 pb-20">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                ref={(ref) => {
                  if (ref) {
                    sectionRefs.current[service.id] = { current: ref };
                  }
                }}
                id={service.id}
                className="min-h-[75vh] pt-8 -mt-8"
              >
                <h3 className="text-3xl font-semibold mb-6">{service.title}</h3>
                <p className="text-lg max-w-xl mb-8">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
