"use client";

import Link from "next/link";

import HeaderNav from "./header-nav";

export function SiteHeader() {
  return (
    <header className="fixed top-8 z-50 bg-jjBlack rounded-full whitespace-nowrap w-fit left-1/2 -translate-x-1/2 flex justify-between items-center p-2.5">
      <Link href="/" className="flex items-center ml-2 mr-16">
        <span className="block text-2xl text-white">Repower Solutions</span>
      </Link>
      <HeaderNav />
    </header>
  );
}
