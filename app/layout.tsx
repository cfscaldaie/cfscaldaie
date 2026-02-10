import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import MainLayout from "./components/layout/MainLayout";
import CookieBanner from "@/app/components/ui/CookieBanner";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "C.F.S. Caldaie – di Aldo Trussardi",
    template: "%s | C.F.S. Caldaie",
  },
  description:
    "Manutenzione caldaie, termo convettori e generatori di aria. Compilazione libretto caldaia, lavori di idraulica.",
  keywords: [
    "Idraulico",
    "caldaia",
    "termo convettore",
    "Bergamo",
  ],
  openGraph: {
    title: "C.F.S. Caldaie",
    description:
      "Manutenzione caldaie bergamo, clusone, val seriana",
    url: "https://csfcaldaie.com",
    siteName: "C.F.S. Caldaie",
    locale: "it_IT",
    type: "website",
  },
};

export const revalidate = 60;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
