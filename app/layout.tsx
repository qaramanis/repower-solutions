import type { Metadata } from "next";
import { Michroma } from "next/font/google";
import "./globals.css";
import HeaderNav from "../components/header-nav";

const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-michroma",
});

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "My custom Next.js application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${michroma.variable}`}>
        <HeaderNav />
        {children}
      </body>
    </html>
  );
}
