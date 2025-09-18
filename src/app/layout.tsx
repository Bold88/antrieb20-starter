import "./globals.css";
import type { Metadata } from "next";
import CookieNotice from "@/components/CookieNotice";

export const metadata: Metadata = {
  title: "Antrieb2.0 - Digitale Transformation für Ihr Unternehmen",
  description:
    "Maßgeschneiderte digitale Lösungen für Ihren Geschäftserfolg. Wir begleiten Sie von der Strategie bis zur Umsetzung mit innovativen Technologien und agilen Methoden.",
  keywords: [
    "Digitale Transformation","Software Entwicklung","Website Development","App Development","E-Commerce Development",
    "Bielefeld","Gütersloh","Herford","Bad Salzuflen","Detmold","Lemgo","Lage","Oerlinghausen","Verl","Rheda-Wiedenbrück",
    "Enger","Spenge","Leopoldshöhe","Schloß Holte-Stukenbrock","Steinhagen","Halle (Westfalen)","Werther (Westf.)",
    "Borgholzhausen","Bad Oeynhausen","Hiddenhausen","Minden","Porta Westfalica","Lübbecke","Rahden","Espelkamp",
    "NRW","Ostwestfalen-Lippe","Digitalagentur Bielefeld","IT Beratung Bielefeld","Digitalisierung Unternehmen",
    "Individuelle Software Bielefeld","Online Shop Entwicklung Bielefeld","Mobile App Agentur Bielefeld"
  ],
  authors: [{ name: "Antrieb2.0" }],
  creator: "Antrieb2.0",
  publisher: "Antrieb2.0",
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 }
  },
  alternates: { canonical: "https://antrieb2punkt0.de" },
  openGraph: {
    type: "website",
    url: "https://antrieb2punkt0.de",
    siteName: "Antrieb2.0",
    title: "Antrieb2.0 | Digital Innovation & Business Solutions",
    description: "Transforming businesses through digital innovation and strategic IT consulting.",
    locale: "de_DE"
  },
  twitter: {
    card: "summary_large_image",
    title: "Antrieb2.0 | Digital Innovation & Business Solutions",
    description: "Transforming businesses through digital innovation and strategic IT consulting."
  },
  icons: { icon: [{ url: "/favicon.ico", sizes: "16x16", type: "image/x-icon" }] },
  other: {
    "format-detection": "telephone=no, address=no, email=no",
    "sitemap:priority:/barrierefreiheit": "0.9"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://antrieb2punkt0.de/" }]
  };
  const webPageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Antrieb2.0 - Digitale Transformation für Ihr Unternehmen",
    description:
      "Maßgeschneiderte digitale Lösungen für Ihren Geschäftserfolg. Wir begleiten Sie von der Strategie bis zur Umsetzung mit innovativen Technologien und agilen Methoden.",
    url: "https://antrieb2punkt0.de/"
  };

  return (
    <html lang="de">
  <body className="min-h-screen bg-background bg-grid font-sans antialiased">
  <CookieNotice />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }} />
        {children}
      </body>
    </html>
  );
}
