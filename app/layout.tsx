import type { Metadata } from "next";
import { Ysabeau_SC } from "next/font/google";
import "./globals.css";
import AuroraHeader from "@/components/header/aurora-header";
import { SiteHeader } from "@/components/header/site-header";
import PageLoader from "@/components/loader/page-loader";
import CardBackground from "@/components/home/card-background";

const ysabeauSC = Ysabeau_SC({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ysabeau-sc",
});

export const metadata: Metadata = {
  title: "Repower Solutions",
  description:
    "REPOWER SOLUTIONS - Τεχνική Κατασκευαστική Εταιρεία - Φωτοβολταϊκά - Αντλίες Θερμότητας - Πρόγραμμα Εξοικονομώ - Ανακαινίσεις",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ysabeauSC.variable}`}>
        <PageLoader initialDelay={2000} transitionDuration={800}>
          <div >
            <AuroraHeader />
          </div>
          <CardBackground />
          <SiteHeader />
          {children}
        </PageLoader>
      </body>
    </html>
  );
}
