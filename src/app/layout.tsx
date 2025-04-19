import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";

import manifest from "@/app/manifest";

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
    <html lang="pt-BR" className="bg-primary">
      <head>
        <meta name="theme-color" content={manifest().theme_color} />
        <meta name="background-color" content={manifest().background_color} />
        <meta name="description" content={manifest().description} />
        <meta name="author" content="Victor Lis Bronzo" />
        <meta name="keywords" content="Victor Lis Bronzo, Portfolio" />
      </head>
      {children}
    </html>
  );
}
