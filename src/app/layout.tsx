import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Le Village \u2014 Marseille 11/12",
  description:
    "Une initiative communautaire simple, inclusive et interg\u00e9n\u00e9rationnelle pour cr\u00e9er du lien entre voisins, parents et enfants \u00e0 travers des activit\u00e9s locales.",
  openGraph: {
    title: "Le Village \u2014 Marseille 11/12",
    description:
      "Une initiative communautaire simple, inclusive et interg\u00e9n\u00e9rationnelle pour cr\u00e9er du lien entre voisins, parents et enfants \u00e0 travers des activit\u00e9s locales.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${playfairDisplay.variable} ${sourceSans3.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
