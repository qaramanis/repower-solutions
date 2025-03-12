"use client";

import FooterNav from "@/components/footer/footer";
import Home from "@/components/home/home";
import PageLoader from "@/components/loader/page-loader";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <PageLoader>
        <Home />
        <FooterNav />
      </PageLoader>
    </div>
  );
}
