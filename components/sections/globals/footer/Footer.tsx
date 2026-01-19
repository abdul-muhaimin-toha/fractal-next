import Image from "next/image";
import Link from "next/link";

/* ----------------------------- Footer Logo ----------------------------- */

function FooterLogo() {
  return (
    <Link href="/">
      <Image
        className="aspect-112/56 shrink-0 object-contain md:w-35 lg:w-49"
        src="/fractal-logo.svg"
        alt="Fractal Logo"
        width={112}
        height={56}
      />
    </Link>
  );
}

/* ----------------------------- Footer Links ----------------------------- */

const footerLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Our Work", href: "/our-work" },
  { label: "Insights", href: "/insights" },
  { label: "Terms of service", href: "/terms-of-service" },
  { label: "Privacy policy", href: "/privacy-policy" },
];

function FooterLinks() {
  return (
    <div className="grid w-full grid-cols-2 gap-x-7.5 gap-y-4 md:max-w-67.5 md:gap-x-4 lg:max-w-max lg:gap-x-20 xl:gap-x-12.5 2xl:gap-x-12.5">
      {footerLinks.map(({ label, href }) => (
        <Link
          key={label}
          href={href}
          className="font-sans hover:underline duration-300 hover:text-ocean-orange text-[18px] font-normal tracking-[-0.18px] 2xl:text-2xl 2xl:leading-tight 2xl:font-medium"
        >
          {label}
        </Link>
      ))}
    </div>
  );
}

/* ---------------------------- Footer Contact ---------------------------- */

function FooterContact() {
  return (
    <div className="flex flex-col gap-4 md:max-w-63">
      <Link
        href="/"
        className="font-sans hover:text-ocean-orange duration-300 hover:underline text-base leading-tight font-medium 2xl:text-2xl"
      >
        ali@fractaldigital.ca
      </Link>
      <p className="font-sans text-base leading-tight font-medium 2xl:text-2xl">
        Fractal Communications 43 Fairmont Avenue Ottawa, ON K1Y 1X4
      </p>
    </div>
  );
}

/* ---------------------------- Footer Content ---------------------------- */

function FooterContent() {
  return (
    <div className="flex flex-col gap-13 md:max-w-200 md:flex-row-reverse md:justify-between md:gap-8 lg:gap-20 xl:gap-35">
      <FooterLinks />
      <FooterContact />
    </div>
  );
}

/* -------------------------------- Footer ------------------------------- */

function Footer() {
  return (
    <footer className="w-full bg-black">
      <div className="container-fractal">
        <div className="flex w-full flex-col gap-13 pt-10 pb-12.5 sm:max-w-2xl md:max-w-full md:flex-row md:items-start md:justify-between md:gap-12 md:py-20 lg:py-25 xl:gap-88.5 xl:pb-35">
          <FooterLogo />
          <FooterContent />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
