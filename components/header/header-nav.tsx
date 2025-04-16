"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ChevronUp, ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { SERVICES_DATA } from "@/lib/services-data";
import { Separator } from "../ui/separator";

export default function HeaderNav() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isMenuExpanded, setIsMenuExpanded] = useState(true);

  const toggleMenu = () => {
    setIsMenuExpanded(!isMenuExpanded);
  };

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
    "text-xl sm:text-xl md:text-3xl p-2 text-black font-medium transition-colors hover:text-primary";
  const activeNavItemStyles = "text-primary font-semibold";

  // Calculate number of columns based on number of services
  const columnCount = Math.min(3, Math.ceil(SERVICES_DATA.length / 4));

  return (
    <motion.div
      className="flex justify-end"
      animate={{
        width: isMenuExpanded ? "auto" : "64px", // Control the collapsed width
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <NavigationMenu className="px-2 rounded-full bg-white backdrop-blur-sm flex items-center min-h-[40px]">
        <AnimatePresence initial={false}>
          {isMenuExpanded && (
            <motion.div
              initial={{ width: 0, height: 0, opacity: 0 }}
              animate={{ width: "auto", height: "auto", opacity: 1 }}
              exit={{ width: 0, height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <NavigationMenuList className="gap-6 mb-2">
                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navItemStyles,
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
                      "shadow-none hover:shadow-none",
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
                    <ul
                      className={`grid gap-3 p-4 md:w-[500px] md:grid-cols-${columnCount} lg:w-[900px]`}
                    >
                      {SERVICES_DATA.map((service) => (
                        <li key={service.id}>
                          <Link href={service.url} legacyBehavior passHref>
                            <NavigationMenuLink className="flex h-full w-full select-none flex-col justify-center rounded-md bg-white p-4 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black">
                              <div className="mb-2 text-xl font-medium">
                                {service.title}
                              </div>
                              <p className="text-lg leading-tight text-gray-700">
                                {service.subtitle || service.title}
                              </p>
                            </NavigationMenuLink>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navItemStyles,
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
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={toggleMenu}
          className="p-4 rounded-full bg-transparent cursor-pointer transition-colors flex-shrink-0"
          aria-label={isMenuExpanded ? "Close menu" : "Open menu"}
        >
          {isMenuExpanded ? <X size={24} /> : <Menu size={24} />}
        </button>
      </NavigationMenu>
    </motion.div>
  );
}
