import { KoHo } from "next/font/google";
import "./globals.css";
import Footer from "@/components/sections/globals/footer/Footer";
import Header from "@/components/sections/globals/header/Header";
import ReactLenis from "lenis/react";
import AOSWrapper from "@/utils/aos-wrapper";
import { Toaster } from "@/components/ui/sonner";
import { getLayoutData } from "@/graphql/components/getLayoutData";

const kohoSans = KoHo({
  variable: "--font-koho-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export async function generateMetadata() {
  const layoutData = await getLayoutData();
  const { themeOptions } = layoutData || {};

  return {
    title: themeOptions?.siteTitle,
    description: themeOptions?.siteDescription,
    icons: {
      icon: themeOptions?.websiteFavicon,
    },
  };
}

export default async function RootLayout({ children }) {
  const layoutData = await getLayoutData();
  const { themeOptions, headerMenu, footerMenu } = layoutData || {};

  const { preconnectUrl } = themeOptions || {};

  return (
    <html lang="en">
      <head>
        {preconnectUrl && <link rel="preconnect" href={preconnectUrl} />}
      </head>
      <ReactLenis root>
        <body className={`${kohoSans.variable} antialiased`}>
          <AOSWrapper>
            <Header menuItems={headerMenu} themeOptions={themeOptions} />
            {children}
            <Footer menuItems={footerMenu} themeOptions={themeOptions} />
          </AOSWrapper>
          <Toaster />
        </body>
      </ReactLenis>
    </html>
  );
}
