"use client";

import React, { createContext, useState, useContext, useCallback } from "react";
import { useRouter } from "next/navigation";

interface NavigationContextType {
  isTransitioning: boolean;
  navigateTo: (url: string) => void;
}

const NavigationContext = createContext<NavigationContextType>({
  isTransitioning: false,
  navigateTo: () => {},
});

export const NavigationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();

  const navigateTo = useCallback(
    (url: string) => {
      setIsTransitioning(true);

      setTimeout(() => {
        router.push(url);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 100);
      }, 600);
    },
    [router]
  );

  return (
    <NavigationContext.Provider value={{ isTransitioning, navigateTo }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);
