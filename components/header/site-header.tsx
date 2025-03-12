"use client";

import Link from "next/link";

import HeaderNav from "./header-nav";
import MobileHeaderNav from "./mobile-header-nav";
import RepowerSolutionsLogo from "../repower-solutions-logo";

export function SiteHeader() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed top-8 z-50 flex justify-between items-center p-2.5 w-full">
      <Link
        href="/"
        className="flex items-center ml-2 mr-16 cursor-pointer"
        onClick={scrollToTop}
      >
        <RepowerSolutionsLogo className="min-w-64" />
      </Link>

      <div className="hidden md:block">
        <HeaderNav />
      </div>

      <div className="md:hidden">
        <MobileHeaderNav />
      </div>
    </header>
  );
}
