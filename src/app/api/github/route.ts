import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  // Obtendo os parâmetros da URL
  const photo = searchParams.get("foto") || " ";
  const nome1 = searchParams.get("nome1") || " ";
  const nome2 = searchParams.get("nome2") || " ";
  const nome3 = searchParams.get("nome3") || " ";
  const idade = searchParams.get("idade") || " ";
  const titulo = searchParams.get("titulo") || " ";
  const profissao = searchParams.get("profissao") || " ";
  const descricao = searchParams.get("descricao") || " ";
  const githubLink = searchParams.get("github-link") || " ";
  const githubText = searchParams.get("github-text") || " ";
  const linkedinLink = searchParams.get("linkedin-link") || " ";
  const linkedinText = searchParams.get("linkedin-text") || " ";
  const portfolioLink = searchParams.get("portfolio-link") || " ";
  const portfolioText = searchParams.get("portfolio-text") || " ";
  const cvLink = searchParams.get("cv-link") || " ";
  const cvText = searchParams.get("cv-text") || " ";
  const background = searchParams.get("background") || "#34df8b";
  const foreground = searchParams.get("foreground") || "#2a2c41";

  // Caminho para o arquivo SVG
  const filePath = path.join(process.cwd(), "src", "app", "api", "github", "card.svg");
  let svgContent = await fs.readFile(filePath, "utf-8");

  // Baixando a imagem da URL fornecida e convertendo para base64
  if (photo.trim() !== " ") {
    try {
      const response = await fetch(photo);
      if (!response.ok) {
        throw new Error(`Failed to fetch the photo: ${response.statusText}`);
      }
      const buffer = await response.arrayBuffer();
      const base64Photo = `data:image/jpeg;base64,${Buffer.from(buffer).toString("base64")}`;
      svgContent = svgContent.replace(/{{foto}}/g, base64Photo);
    } catch (error) {
      console.error("Error fetching or converting the photo:", error);
    }
  }

  // Substituindo os placeholders no SVG
  svgContent = svgContent
    .replace(/{{background}}/g, background)
    .replace(/{{foreground}}/g, foreground)
    .replace(/{{foto}}/g, photo)
    .replace(/{{nome1}}/g, nome1)
    .replace(/{{nome2}}/g, nome2)
    .replace(/{{nome3}}/g, nome3)
    .replace(/{{idade}}/g, idade)
    .replace(/{{titulo}}/g, titulo)
    .replace(/{{profissao}}/g, profissao)
    .replace(/{{descricao}}/g, descricao)
    .replace(/{{github-link}}/g, githubLink)
    .replace(/{{github-text}}/g, githubText)
    .replace(/{{linkedin-link}}/g, linkedinLink)
    .replace(/{{linkedin-text}}/g, linkedinText)
    .replace(/{{portfolio-link}}/g, portfolioLink)
    .replace(/{{portfolio-text}}/g, portfolioText)
    .replace(/{{cv-link}}/g, cvLink)
    .replace(/{{cv-text}}/g, cvText);

  // Retornando o SVG atualizado
  return new NextResponse(svgContent.trim(), {
    status: 200,
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}