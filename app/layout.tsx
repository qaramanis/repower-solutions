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
  title: "Repower Solutions - Τεχνική Κατασκευαστική Εταιρεία",
  description:
    "Μελέτες ηλεκτρολογικών, υδραυλικών, κλιματισμού, εξαερισμού, θέρμανσης, πυρασφάλειας. Τεχνικός Ασφαλείας, ανακαινίσεις, φωτοβολταϊκά, αντλίες θερμότητας.",
  openGraph: {
    title: "Repower Solutions - Τεχνική Κατασκευαστική Εταιρεία",
    description:
      "Μελέτες ηλεκτρολογικών, υδραυλικών, κλιματισμού, εξαερισμού, θέρμανσης, πυρασφάλειας. Τεχνικός Ασφαλείας, ανακαινίσεις, φωτοβολταϊκά, αντλίες θερμότητας.",
    images: [
      {
        url: "https://www.repowersolutions.gr/rs-600-600.png",
        width: 600,
        height: 600,
        alt: "Repower Solutions Logo",
      },
    ],
    type: "website",
    locale: "el_GR",
  },
  icons: {
    icon: "/rs-transparent-128-128.svg",
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
        <Script id="organization-schema" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Repower Solutions",
              "url": "http://repowersolutions.gr",
              "logo": "http://repowersolutions.gr/rs-600-600.png"
            }
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
