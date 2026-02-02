import { KoHo } from "next/font/google";
import "./globals.css";
import Footer from "@/components/sections/globals/footer/Footer";
import Header from "@/components/sections/globals/header/Header";
import ReactLenis from "lenis/react";
import AOSWrapper from "@/utils/aos-wrapper";
import Head from "next/head";
import { Toaster } from "@/components/ui/sonner";

const kohoSans = KoHo({
  variable: "--font-koho-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Fractal - Embracing the real to create change",
  description:
    "Fractal help organizations find strength in their complexity and contradictions, turning insight into practical strategy and storytelling that move people to act.",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://dashboard.sentrysecuritybd.com" />
      </Head>
      <ReactLenis root>
        <body className={`${kohoSans.variable} antialiased`}>
          <AOSWrapper>
            <Header />
            {children}
            <Footer />
          </AOSWrapper>
          <Toaster />
        </body>
      </ReactLenis>
    </html>
  );
}
