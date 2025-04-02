import type { Metadata } from "next";
import { Ysabeau_SC } from "next/font/google";
import "./globals.css";
import Script from "next/script";
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
    "REPOWER SOLUTIONS - Τεχνική Κατασκευαστική Εταιρεία - Φωτοβολταικά - Αντλίες Θερμότητας - Πρόγραμμα Εξοικονομώ - Ανακαινίσεις",
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
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-F3351R8EJM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'G-F3351R8EJM');
          `}
        </Script>
      </head>
      <body className={`${ysabeauSC.variable}`}>
        <PageLoader initialDelay={2000} transitionDuration={800}>
          <div>
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
