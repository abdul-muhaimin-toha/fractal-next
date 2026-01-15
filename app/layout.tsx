import type { Metadata } from "next";
import { KoHo } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/sections/globals/footer/Footer";

const kohoSans = KoHo({
  variable: "--font-koho-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Fractal",
  description: "Embracing the real to create change.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kohoSans.variable} antialiased`}>
        <div className="fixed top-0 right-0 left-0 z-50 flex h-20 w-full bg-black 2xl:h-45"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
