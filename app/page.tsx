"use client";

import FooterNav from "@/components/footer/footer";
import Home from "@/components/home/home";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <Home />
      <FooterNav />
    </div>
  );
}
