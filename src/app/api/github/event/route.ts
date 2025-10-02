import { NextResponse } from "next/server";
import { promises as fs, link } from "fs";
import path from "path";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const photo = searchParams.get("photo") || "";
  const background = searchParams.get("background")
    ? `#${searchParams.get("background")}`
    : "#2a2c41";
  const foreground = searchParams.get("foreground")
    ? `#${searchParams.get("foreground")}`
    : "#34df8b";
  const decorative = searchParams.get("decorative") || "#fff";
  const name = searchParams.get("name") || "?name=";
  const description = searchParams.get("description") || "?description=";

  const filePath = path.join(
    process.cwd(),
    "src",
    "app",
    "api",
    "github",
    "event",
    "event.svg"
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

  console.log(photo)

  svgContent = svgContent
    .replaceAll(/{{background}}/g, background)
    .replaceAll(/{{foreground}}/g, foreground)
    .replaceAll(/{{decorative}}/g, decorative)
    .replace(/{{photo}}/g, photo)
    .replace(/{{name}}/g, name)
    .replace(/{{description}}/g, description)

  return new NextResponse(svgContent.trim(), {
    status: 200,
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
