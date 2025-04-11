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
    <header className="fixed top-4 z-50 flex justify-between items-center p-2.5 w-full">
      <div className="md:hidden flex justify-between items-center w-full bg-white rounded-full shadow-sm px-4 py-2">
        <Link
          href="/"
          className="flex items-center cursor-pointer"
          onClick={scrollToTop}
        >
          <RepowerSolutionsLogo className="w-48" />
        </Link>

        <MobileHeaderNav />
      </div>

      <div className="hidden md:flex justify-between items-center w-full">
        <Link
          href="/"
          className="flex items-center ml-2 mr-16 cursor-pointer"
          onClick={scrollToTop}
        >
          <RepowerSolutionsLogo className="min-w-96" />
        </Link>
        <HeaderNav />
      </div>
    </header>
  );
}
