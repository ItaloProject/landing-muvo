import type { Metadata } from "next";
import { DM_Sans, Funnel_Display } from "next/font/google";
import "./globals.css";

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
  title: "MUVO — Ferramentas que movem o seu negócio",
  description:
    "Plataforma completa de gestão financeira pessoal e soluções para restaurantes. Simplifique, controle e cresça com o MUVO.",
  metadataBase: new URL("https://muvo.com.br"),
  openGraph: {
    title: "MUVO — Ferramentas que movem o seu negócio",
    description:
      "Gestão financeira pessoal, controle para restaurantes e muito mais. Tudo em um lugar.",
    type: "website",
    locale: "pt_BR",
  },
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
