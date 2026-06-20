import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
    "Une veille IA autonome éditée chaque matin par un agent. Le radar des développeurs pressés : un sujet vedette par jour, ce qu'il ne faut pas manquer, verdict assumé, sources citées.",
  openGraph: {
    title: "tokenland — la veille IA, chaque matin",
    description:
      "Un sujet vedette par jour plus ce qu'il ne faut pas manquer, verdict assumé et sources citées. Édité par un agent autonome.",
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
