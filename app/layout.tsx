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
  title: "Beatrice Arbarello Immobiliare | Agenzia immobiliare a Orbassano",
  description:
    "Beatrice Arbarello Immobiliare offre consulenza per vendita, acquisto e valorizzazione di immobili a Orbassano e dintorni.",
  keywords: [
    "Beatrice immobiliare",
    "Beatrice Arbarello immobiliare",
    "agenzia immobiliare Orbassano",
    "immobiliare Orbassano",
    "vendita case Orbassano",
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
