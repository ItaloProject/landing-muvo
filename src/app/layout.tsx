import type { Metadata, Viewport } from "next";
import { DM_Sans, Funnel_Display } from "next/font/google";
import "./globals.css";
import { siteDescription, siteTitle, siteUrl } from "./site";

/* mesmas fontes da identidade do Ibank: DM Sans no corpo, Funnel Display nos títulos */
const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const display = Funnel_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  applicationName: "MUVO",
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    siteName: "MUVO",
    type: "website",
    locale: "pt_BR",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${body.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
