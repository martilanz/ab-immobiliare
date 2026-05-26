import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    default: "Agenzia immobiliare a Orbassano | Beatrice Arbarello",
    template: "%s | Beatrice Arbarello",
  },
  description:
    "Beatrice Arbarello Immobiliare offre consulenza per vendita, acquisto e valorizzazione di immobili a Orbassano e dintorni.",
  keywords: [
    "Beatrice immobiliare",
    "Beatrice Arbarello immobiliare",
    "agenzia immobiliare Orbassano",
    "immobiliare Orbassano",
    "vendita case Orbassano",
  ],
  openGraph: {
    title: "Agenzia immobiliare a Orbassano | Beatrice Arbarello",
    description:
      "Beatrice Arbarello Immobiliare offre consulenza per vendita, acquisto e valorizzazione di immobili a Orbassano e dintorni.",
    url: "https://www.arbarellobeatriceimmobiliare.it",
    siteName: "Beatrice Arbarello Immobiliare",
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
