import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./fonts.css";

import manifest from "@/app/manifest";

import AOSProvider from "@/providers/AOS";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dev - Victor Lis Bronzo",
  description: "Portfólio com informações de Victor Lis Bronzo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="theme-color" content={manifest().theme_color} />
        <meta name="background-color" content={manifest().background_color} />
        <meta name="description" content={manifest().description} />
        <meta name="author" content="Victor Lis Bronzo" />
        <meta name="keywords" content="Victor Lis Bronzo, Portfolio" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AOSProvider>{children}</AOSProvider>
      </body>
    </html>
  );
}
