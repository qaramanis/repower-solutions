"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export default function HeaderNav() {
  const [activeSection, setActiveSection] = useState<string>("hero");

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
    }
  };

  const navItemStyles =
    "text-lg sm:text-xl md:text-2xl px-4 py-2 text-black font-medium transition-colors hover:text-primary bg-transparent";
  const activeNavItemStyles = "text-primary font-semibold";

  return (
    <div className="flex justify-center w-full">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="gap-6">
          <NavigationMenuItem>
            <Link href="#" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navItemStyles,
                  "bg-transparent hover:bg-transparent focus:bg-transparent",
                  activeSection === "hero" && activeNavItemStyles
                )}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("hero");
                }}
              >
                αρχικη
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(
                navItemStyles,
                "bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent shadow-none hover:shadow-none",
                activeSection === "services" && activeNavItemStyles
              )}
              onClick={(e) => {
                // Prevent default only if we need to
                if (activeSection !== "services") {
                  e.preventDefault();
                  scrollToSection("services");
                }
              }}
            >
              υπηρεσιες
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <li>
                  <Link href="/services/hm-erga" legacyBehavior passHref>
                    <NavigationMenuLink className="flex h-full w-full select-none flex-col justify-center rounded-md bg-white p-4 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black">
                      <div className="mb-2 text-lg font-medium">Η/Μ Εργα</div>
                      <p className="text-sm leading-tight text-gray-700">
                        Εξειδικευμένες ηλεκτρομηχανικές μελέτες για κτιριακές
                        και βιομηχανικές εγκαταστάσεις
                      </p>
                    </NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/texnikos-asfaleias"
                    legacyBehavior
                    passHref
                  >
                    <NavigationMenuLink className="flex h-full w-full select-none flex-col justify-center rounded-md bg-white p-4 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black">
                      <div className="mb-2 text-lg font-medium">
                        Τεχνικός Ασφαλείας
                      </div>
                      <p className="text-sm leading-tight text-gray-700">
                        Συμβουλευτικές και υποστηρικτικές υπηρεσίες για την
                        ασφάλεια των εργαζομένων
                      </p>
                    </NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/services/exoikonomo" legacyBehavior passHref>
                    <NavigationMenuLink className="flex h-full w-full select-none flex-col justify-center rounded-md bg-white p-4 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black">
                      <div className="mb-2 text-lg font-medium">
                        Πρόγραμμα Εξοικονομώ
                      </div>
                      <p className="text-sm leading-tight text-gray-700">
                        Ολοκληρωμένες υπηρεσίες για την ένταξη και υλοποίηση
                        έργων Εξοικονομώ
                      </p>
                    </NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/services/pistopoihtiko" legacyBehavior passHref>
                    <NavigationMenuLink className="flex h-full w-full select-none flex-col justify-center rounded-md bg-white p-4 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black">
                      <div className="mb-2 text-lg font-medium">
                        Πιστ. Ενεργειακής Απόδοσης
                      </div>
                      <p className="text-sm leading-tight text-gray-700">
                        Έκδοση και ανανέωση Πιστοποιητικών Ενεργειακής Απόδοσης
                        (ΠΕΑ)
                      </p>
                    </NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/services/koufomata" legacyBehavior passHref>
                    <NavigationMenuLink className="flex h-full w-full select-none flex-col justify-center rounded-md bg-white p-4 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black">
                      <div className="mb-2 text-lg font-medium">Κουφώματα</div>
                      <p className="text-sm leading-tight text-gray-700">
                        Αντικατάσταση παλαιών κουφωμάτων με σύγχρονα ενεργειακά
                      </p>
                    </NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/services/anakainiseis" legacyBehavior passHref>
                    <NavigationMenuLink className="flex h-full w-full select-none flex-col justify-center rounded-md bg-white p-4 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black">
                      <div className="mb-2 text-lg font-medium">
                        Ανακαινίσεις
                      </div>
                      <p className="text-sm leading-tight text-gray-700">
                        Ολοκληρωμένες ανακαινίσεις και αναδιαμορφώσεις χώρων
                      </p>
                    </NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/services/antlies" legacyBehavior passHref>
                    <NavigationMenuLink className="flex h-full w-full select-none flex-col justify-center rounded-md bg-white p-4 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black">
                      <div className="mb-2 text-lg font-medium">
                        Αντλίες Θερμότητας
                      </div>
                      <p className="text-sm leading-tight text-gray-700">
                        Οικονομικές και οικολογικές λύσεις θέρμανσης και ψύξης
                      </p>
                    </NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/services/fotovoltaika" legacyBehavior passHref>
                    <NavigationMenuLink className="flex h-full w-full select-none flex-col justify-center rounded-md bg-white p-4 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black">
                      <div className="mb-2 text-lg font-medium">
                        Φωτοβολταϊκά
                      </div>
                      <p className="text-sm leading-tight text-gray-700">
                        Παραγωγή ενέργειας από τον ήλιο για οικιακή και
                        επαγγελματική χρήση
                      </p>
                    </NavigationMenuLink>
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="#" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navItemStyles,
                  "bg-transparent hover:bg-transparent focus:bg-transparent",
                  activeSection === "contact" && activeNavItemStyles
                )}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
              >
                επικοινωνια
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
