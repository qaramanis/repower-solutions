import type { Metadata } from "next";
import { Ysabeau_SC } from "next/font/google";
import "./globals.css";
import HeaderNav from "../components/header/header-nav";

const ysabeauSC = Ysabeau_SC({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ysabeau-sc",
});

export const metadata: Metadata = {
  title: "Repower Solutions",
  description:
    "REPOWER SOLUTIONS - Τεχνική Κατασκευαστική Εταιρεία - Φωτοβολταϊκά - Αντλίες Θερμότητας - Πρόγραμμα Εξοικονομώ - Ανακαινίσεις",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ysabeauSC.variable}`}>
        <HeaderNav />
        {children}
      </body>
    </html>
  );
}
