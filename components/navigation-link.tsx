"use client";

import Link from "next/link";
import { useNavigation } from "@/context/navigation-context";

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavigationLink({
  href,
  children,
  className = "",
}: NavigationLinkProps) {
  const { navigateTo } = useNavigation();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigateTo(href);
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
