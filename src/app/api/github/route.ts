import { NextResponse } from "next/server";
import { chromium } from "@playwright/test";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  // Parâmetros da URL (ex.: ?name1=Ronaldo&pos1=Attack&name2=Messi&pos2=Midfield)
  const name1 = searchParams.get("name1") || "Cristiano Ronaldo";
  const pos1 = searchParams.get("pos1") || "Attack";
  const name2 = searchParams.get("name2") || "Lionel Messi";
  const pos2 = searchParams.get("pos2") || "Attack";
  const bgColor = searchParams.get("bgColor") || "#1e3a8a";

  // Conteúdo HTML com variáveis dinâmicas
  const htmlContent = `
    <html lang="pt-BR">
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: ${bgColor};
            margin: 0;
          }
          .container {
            display: flex;
            gap: 20px;
          }
          .card {
            border-radius: 12px;
            overflow: hidden;
            background-color: #fff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: 200px;
            text-align: center;
          }
          .card img {
            width: 100%;
            height: auto;
          }
          .card h2 {
            font-size: 18px;
            margin: 10px 0;
          }
          .card p {
            font-size: 16px;
            color: #555;
            margin-bottom: 10px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="card">
            <img src="https://www.thesportsdb.com/images/media/player/cutout/33f8ra1732561552.png" alt="${name1}" />
            <h2>${name1}</h2>
            <p>Position: ${pos1}</p>
          </div>
          <div class="card">
            <img src="https://www.thesportsdb.com/images/media/player/cutout/h2c6rj1725183431.png" alt="${name2}" />
            <h2>${name2}</h2>
            <p>Position: ${pos2}</p>
          </div>
        </div>
      </body>
    </html>
  `;

  // Inicializa o Playwright
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // Renderiza o HTML
  await page.setContent(htmlContent, { waitUntil: "load" });

  // Captura a imagem
  const imageBuffer = await page.screenshot({
    type: "png",
    fullPage: true,
  });

  await browser.close();

  // Retorna a imagem PNG
  return new NextResponse(imageBuffer, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=3600", // Cache por 1 hora
    },
  });
}