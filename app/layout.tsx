import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://enstierlist.com"),
  title: "ENS Tier List",
  description: "How good is your ENS integration? Wallets scored on 4 binary criteria.",
  openGraph: {
    title: "ENS Tier List",
    description: "How good is your ENS integration?",
    url: "https://enstierlist.com",
    siteName: "enstierlist.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ENS Tier List",
    description: "How good is your ENS integration?",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
