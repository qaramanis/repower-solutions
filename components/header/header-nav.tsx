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
                if (activeSection !== "services") {
                  e.preventDefault();
                  scrollToSection("services");
                }
              }}
            >
              υπηρεσιες
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[900px]">
                <li>
                  <Link href="/programma-exoikonomo" legacyBehavior passHref>
                    <NavigationMenuLink className="flex h-full w-full select-none flex-col justify-center rounded-md bg-white p-4 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black">
                      <div className="mb-2 text-lg font-medium">
                        Πρόγραμμα Εξοικονομώ
                      </div>
                      <p className="text-sm leading-tight text-gray-700">
                        Προγράμματα Εξοικονομώ στη Θεσσαλονίκη – Ολοκληρωμένες
                        Λύσεις Ενεργειακής Αναβάθμισης
                      </p>
                    </NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/anakainiseis" legacyBehavior passHref>
                    <NavigationMenuLink className="flex h-full w-full select-none flex-col justify-center rounded-md bg-white p-4 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black">
                      <div className="mb-2 text-lg font-medium">
                        Ανακαινίσεις
                      </div>
                      <p className="text-sm leading-tight text-gray-700">
                        Ανακαινίσεις στη Θεσσαλονίκη – Ολοκληρωμένες Λύσεις για
                        Κατοικίες &amp; Επαγγελματικούς Χώρους
                      </p>
                    </NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/fotovoltaika" legacyBehavior passHref>
                    <NavigationMenuLink className="flex h-full w-full select-none flex-col justify-center rounded-md bg-white p-4 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black">
                      <div className="mb-2 text-lg font-medium">
                        Φωτοβολταικά
                      </div>
                      <p className="text-sm leading-tight text-gray-700">
                        Φωτοβολταικά Συστήματα για Οικίες &amp; Επιχειρήσεις –
                        Θεσσαλονίκη
                      </p>
                    </NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/antlies-thermothtas" legacyBehavior passHref>
                    <NavigationMenuLink className="flex h-full w-full select-none flex-col justify-center rounded-md bg-white p-4 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black">
                      <div className="mb-2 text-lg font-medium">
                        Αντλίες Θερμότητας
                      </div>
                      <p className="text-sm leading-tight text-gray-700">
                        Αντλίες Θερμότητας στη Θεσσαλονίκη Οικονομική &amp;
                        Αποδοτική Λύση για Θέρμανση και Ψύξη
                      </p>
                    </NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/texnikos-asfaleias" legacyBehavior passHref>
                    <NavigationMenuLink className="flex h-full w-full select-none flex-col justify-center rounded-md bg-white p-4 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black">
                      <div className="mb-2 text-lg font-medium">
                        Τεχνικός Ασφαλείας
                      </div>
                      <p className="text-sm leading-tight text-gray-700">
                        Τεχνικός Ασφαλείας στη Θεσσαλονίκη – Υποστήριξη για
                        Επιχειρήσεις
                      </p>
                    </NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/pistopoihtiko" legacyBehavior passHref>
                    <NavigationMenuLink className="flex h-full w-full select-none flex-col justify-center rounded-md bg-white p-4 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black">
                      <div className="mb-2 text-lg font-medium">
                        Ενεργειακος Επιθεωρητης &amp; Πιστ. Ενεργειακής Απόδοσης
                      </div>
                      <p className="text-sm leading-tight text-gray-700">
                        Πιστοποιητικό Ενεργειακής Απόδοσης (ΠΕΑ) – Ενεργειακός
                        Επιθεωρητής Θεσσαλονίκη
                      </p>
                    </NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/hm-meletes" legacyBehavior passHref>
                    <NavigationMenuLink className="flex h-full w-full select-none flex-col justify-center rounded-md bg-white p-4 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black">
                      <div className="mb-2 text-lg font-medium">
                        Η/Μ Μελετες
                      </div>
                      <p className="text-sm leading-tight text-gray-700">
                        Ηλεκτρομηχανολογικές Μελέτες <br />
                        (Η/Μ) στη Θεσσαλονίκη
                      </p>
                    </NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/oikodomikes-adeies" legacyBehavior passHref>
                    <NavigationMenuLink className="flex h-full w-full select-none flex-col justify-center rounded-md bg-white p-4 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black">
                      <div className="mb-2 text-lg font-medium">
                        Οικοδομικες Αδειες
                      </div>
                      <p className="text-sm leading-tight text-gray-700">
                        Ολοκληρωμένη Διαχείριση Οικοδομικών Αδειών από
                        Μηχανικούς με Εμπειρία
                      </p>
                    </NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/adeies-leitourgias" legacyBehavior passHref>
                    <NavigationMenuLink className="flex h-full w-full select-none flex-col justify-center rounded-md bg-white p-4 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black">
                      <div className="mb-2 text-lg font-medium">
                        Αδειες Λειτουργιας
                      </div>
                      <p className="text-sm leading-tight text-gray-700">
                        Νόμιμη και Άμεση Έναρξη της Επιχείρησής σας, με Πλήρη
                        Υποστήριξη από Εξειδικευμένους Μηχανικούς
                      </p>
                    </NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/adeies-leitourgias" legacyBehavior passHref>
                    <NavigationMenuLink className="flex h-full w-full select-none flex-col justify-center rounded-md bg-white p-4 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black">
                      <div className="mb-2 text-lg font-medium">
                        Μελετες Πυρασφάλειας
                      </div>
                      <p className="text-sm leading-tight text-gray-700">
                        Έγκυρες, Εγκεκριμένες Μελέτες Πυρασφάλειας από
                        Εξειδικευμένους Μηχανικούς
                      </p>
                    </NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/afthereta" legacyBehavior passHref>
                    <NavigationMenuLink className="flex h-full w-full select-none flex-col justify-center rounded-md bg-white p-4 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black">
                      <div className="mb-2 text-lg font-medium">
                        Τακτοποιηση Αυθαιρετων
                      </div>
                      <p className="text-sm leading-tight text-gray-700">
                        Νόμιμη Ρύθμιση Αυθαίρετων Κατασκευών &amp; Χρήσεων από
                        Εξειδικευμένους Μηχανικούς
                      </p>
                    </NavigationMenuLink>
                  </Link>
                </li>
                <li>
                  <Link href="/hlektronikh-taytothta" legacyBehavior passHref>
                    <NavigationMenuLink className="flex h-full w-full select-none flex-col justify-center rounded-md bg-white p-4 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black">
                      <div className="mb-2 text-lg font-medium">
                        Ηλεκτρονικη Ταυτοτητα Κτιριου
                      </div>
                      <p className="text-sm leading-tight text-gray-700">
                        Άμεση Έκδοση Ηλεκτρονικής Ταυτότητας για Ακίνητα κάθε
                        τύπου
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
