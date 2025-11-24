import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Victor Lis Bronzo - Desenvolvedor Full Stack",
  description: "Portfólio de Victor Lis Bronzo, desenvolvedor full stack especializado em tecnologias modernas. Confira projetos, habilidades e entre em contato.",
  keywords: ["Victor Lis Bronzo", "Desenvolvedor Full Stack", "Portfólio", "Tecnologia", "Projetos de Software", "Programação", "Desenvolvimento Web"],
  authors: [{
    name: "Victor Lis Bronzo",
    url: "www.linkedin.com/in/victor-lis-bronzo",
  }],
  openGraph: {
    title: "Victor Lis Bronzo - Desenvolvedor Full Stack",
    description: "Conheça o portfólio de Victor Lis Bronzo, desenvolvedor full stack com experiência em tecnologias modernas.",
    url: "https://victor-lis.vercel.app",
    siteName: "Victor Lis Bronzo - Portfólio",
    images: [
      {
        url: "https://victor-lis.vercel.app/favicon.ico",
        width: 400,
        height: 400,
        alt: "Victor Lis Bronzo - Desenvolvedor Full Stack",
      },
    ],
    locale: "pt_BR",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="bg-primary">
      <head>
        <meta name="author" content="Victor Lis Bronzo" />
        <meta name="keywords" content="Victor Lis Bronzo, Portfolio" />
      </head>
      <body className="dark">{children}</body>
    </html>
  );
}
