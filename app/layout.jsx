import { KoHo } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Footer from "@/components/sections/globals/footer/Footer";
import Header from "@/components/sections/globals/header/Header";
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
        <Script
          id="gtm-script"
          strategy="afterInteractive"
        >{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`}</Script>
        {preconnectUrl && <link rel="preconnect" href={preconnectUrl} />}
      </head>

      <body className={`${kohoSans.variable} antialiased`}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Header menuItems={headerMenu} themeOptions={themeOptions} />
        {children}
        <Footer menuItems={footerMenu} themeOptions={themeOptions} />
        <Toaster />
      </body>
    </html>
  );
}
