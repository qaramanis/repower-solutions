import type { Metadata } from "next";
import { Ysabeau_SC } from "next/font/google";
import "./globals.css";
import AuroraHeader from "@/components/header/aurora-header";
import { SiteHeader } from "@/components/header/site-header";

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
        <div className="fixed top-0 left-0 right-0 h-20 z-0 overflow-hidden">
          <AuroraHeader />
        </div>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
