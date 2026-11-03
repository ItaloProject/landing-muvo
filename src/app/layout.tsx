import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang="pt-BR" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
