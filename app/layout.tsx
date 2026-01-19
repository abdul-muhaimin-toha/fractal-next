import type { Metadata } from "next";
import { KoHo } from "next/font/google";
import "./globals.css";
import Footer from "@/components/sections/globals/footer/Footer";
import Header from "@/components/sections/globals/header/Header";
import ReactLenis from "lenis/react";
import AOSWrapper from "@/lib/aos-wrapper";

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
      <ReactLenis root>
        <body className={`${kohoSans.variable} antialiased`}>
          <AOSWrapper>
            <Header />
            {children}
            <Footer />
          </AOSWrapper>
        </body>
      </ReactLenis>
    </html>
  );
}
