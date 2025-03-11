"use client";

import FooterNav from "@/components/footer/footer";
import HeaderNav from "@/components/header/header-nav";
import Home from "@/components/home/home";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <Home />
      <FooterNav />
    </div>
  );
}
