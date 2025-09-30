import { NextResponse } from "next/server";
import { promises as fs, link } from "fs";
import path from "path";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const name1 = searchParams.get("name1") || "?name1=";
  const name2 = searchParams.get("name2") || "?name2=";
  const name3 = searchParams.get("name3") || "?name3=";
  const age = searchParams.get("age") || "?age=";
  const title = searchParams.get("title") || "?title=";
  const profession = searchParams.get("profession") || "?profession=";
  const description = searchParams.get("description") || "?description=";
  const github = searchParams.get("github") || "?github=";
  const photo = searchParams.get("photo")
    ? searchParams.get("photo")
    : github ? `https://github.com/${github}.png?size=200` : "";
  const linkedin = searchParams.get("linkedin") || "?linkedin=";
  const portfolio = searchParams.get("portfolio") || "?portfolio=";
  const background = searchParams.get("background") || "#34df8b";
  const foreground = searchParams.get("foreground") || "#2a2c41";

  const filePath = path.join(
    process.cwd(),
    "src",
    "app",
    "api",
    "github",
    "card",
    "card.svg"
  );
  let svgContent = await fs.readFile(filePath, "utf-8");

  if (photo.trim() !== " ") {
    try {
      const response = await fetch(photo);
      if (!response.ok) {
        throw new Error(`Failed to fetch the photo: ${response.statusText}`);
      }
      const buffer = await response.arrayBuffer();
      const base64Photo = `data:image/jpeg;base64,${Buffer.from(
        buffer
      ).toString("base64")}`;
      svgContent = svgContent.replace(/{{photo}}/g, base64Photo);
    } catch (error) {
      console.error("Error fetching or converting the photo:", error);
    }
  }

  console.log(github)
  console.log(linkedin)
  console.log(portfolio)

  // Substituindo os placeholders no SVG
  svgContent = svgContent
    .replace(/{{background}}/g, background)
    .replace(/{{foreground}}/g, foreground)
    .replace(/{{foto}}/g, photo)
    .replace(/{{name1}}/g, name1)
    .replace(/{{name2}}/g, name2)
    .replace(/{{name3}}/g, name3)
    .replace(/{{age}}/g, age)
    .replace(/{{title}}/g, title)
    .replace(/{{profession}}/g, profession)
    .replace(/{{description}}/g, description)
    .replace(/{{github}}/g, github)
    .replace(/{{linkedin}}/g, linkedin)
    .replace(/{{portfolio}}/g, portfolio);

  // Retornando o SVG atualizado
  return new NextResponse(svgContent.trim(), {
    status: 200,
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
