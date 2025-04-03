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
  title: "Repower Solutions | Τεχνική Κατασκευαστική Εταιρεία",
  description:
    "Μελέτες ηλεκτρολογικών, υδραυλικών, κλιματισμού, εξαερισμού, θέρμανσης, πυρασφάλειας. Τεχνικός Ασφαλείας, ανακαινίσεις, φωτοβολταϊκά, αντλίες θερμότητας.",
  metadataBase: new URL("https://www.repowersolutions.gr"),
  alternates: {
    canonical: "/",
    languages: {
      "el-GR": "/",
    },
  },
  openGraph: {
    title: "Repower Solutions | Τεχνική Κατασκευαστική Εταιρεία",
    description:
      "Μελέτες ηλεκτρολογικών, υδραυλικών, κλιματισμού, εξαερισμού, θέρμανσης, πυρασφάλειας. Τεχνικός Ασφαλείας, ανακαινίσεις, φωτοβολταϊκά, αντλίες θερμότητας.",
    siteName: "Repower Solutions",
    locale: "el_GR",
    type: "website",
    url: "/",
    images: [
      {
        url: "https://www.repowersolutions.gr/rs-600-600.png",
        width: 600,
        height: 600,
        alt: "Repower Solutions Logo",
      },
    ],
  },
  icons: {
    icon: "https://www.repowersolutions.gr/rs-600-600.png",
    apple: "https://www.repowersolutions.gr/rs-600-600.png",
  },
  robots: {
    index: true,
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
              "alternateName": "Repower Solutions | Τεχνική Κατασκευαστική Εταιρεία",
              "url": "https://www.repowersolutions.gr",
              "logo": "https://www.repowersolutions.gr/rs-600-600.png",
              "image": "https://www.repowersolutions.gr/rs-600-600.png",
              "description": "Μελέτες ηλεκτρολογικών, υδραυλικών, κλιματισμού, εξαερισμού, θέρμανσης, πυρασφάλειας. Τεχνικός Ασφαλείας, ανακαινίσεις, φωτοβολταϊκά, αντλίες θερμότητας.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Θεσσαλονίκης 4",
                "addressLocality": "Πυλαία",
                "postalCode": "55535",
                "addressCountry": "GR"
              },
              "telephone": "+306948568652",
              "email": "info.repowersolutions@gmail.com",
              "sameAs": [
                "https://www.facebook.com/people/RePower-Solutions/61573024402149/",
                "https://www.linkedin.com/company/rep%CE%BFwer-solutions/about/",
                "https://www.instagram.com/repowersolutions"
              ]
            }
          `}
        </Script>
        <Script id="local-business-schema" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Repower Solutions",
              "image": "https://www.repowersolutions.gr/rs-600-600.png",
              "url": "https://www.repowersolutions.gr",
              "telephone": "+306948568652",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Θεσσαλονίκης 4",
                "addressLocality": "Πυλαία",
                "postalCode": "55535",
                "addressCountry": "Greece"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "40.5957",
                "longitude": "22.9699"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "17:00"
              },
              "priceRange": "€€",
              "servesCuisine": "Τεχνική Κατασκευαστική Εταιρεία"
            }
          `}
        </Script>
        <Script id="service-schema" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Τεχνικές Υπηρεσίες",
              "provider": {
                "@type": "Organization",
                "name": "Repower Solutions"
              },
              "areaServed": {
                "@type": "City",
                "name": "Θεσσαλονίκη"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Τεχνικές Υπηρεσίες",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Η/Μ Έργα"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Τεχνικός Ασφαλείας"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Αντλίες Θερμότητας"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Φωτοβολταϊκά"
                    }
                  }
                ]
              }
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
