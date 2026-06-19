import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const serif = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tokenland.vercel.app"),
  title: {
    default: "tokenland — la veille IA, chaque matin",
    template: "%s · tokenland",
  },
  description:
    "Une veille IA autonome éditée chaque matin par l'agent Hermes. Un seul sujet par jour, le plus marquant des dernières 48 heures, avec ses sources.",
  openGraph: {
    title: "tokenland — la veille IA, chaque matin",
    description:
      "Un seul sujet par jour, le plus marquant des dernières 48 heures, avec ses sources. Édité par l'agent Hermes.",
    type: "website",
    locale: "fr_CA",
    siteName: "tokenland",
  },
};

export const viewport: Viewport = {
  themeColor: "#031D2A",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${serif.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
