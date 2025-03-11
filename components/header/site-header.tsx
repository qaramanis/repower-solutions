"use client";

import Link from "next/link";

import HeaderNav from "./header-nav";
import RepowerSolutionsLogo from "../repower-solutions-logo";

export function SiteHeader() {
  return (
    <header className="fixed top-8 z-50 flex justify-between items-center p-2.5">
      <Link href="/" className="flex items-center ml-2 mr-16">
        <RepowerSolutionsLogo className="min-w-64" />
      </Link>
      <HeaderNav />
    </header>
  );
}
