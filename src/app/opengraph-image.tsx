import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { siteTitle } from "./site";

/* imagem de compartilhamento (WhatsApp, Instagram, LinkedIn...): gerada no build */
export const alt = siteTitle;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const dataUri = (file: Buffer) => `data:image/png;base64,${file.toString("base64")}`;

export default async function OpengraphImage() {
  const [mascot, lockup] = await Promise.all([
    readFile(path.join(process.cwd(), "src", "app", "og-mascot.png")),
    readFile(path.join(process.cwd(), "public", "brand", "muvo-lockup-dark.png")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#0d0d0d",
          color: "#f5f5f5",
          padding: 72,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 650 }}>
          <img src={dataUri(lockup)} width={192} height={53} alt="" />
          <div
            style={{
              marginTop: 48,
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: -1.5,
            }}
          >
            Ferramentas que movem o seu negócio.
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "rgba(245,245,245,0.65)" }}>
            Financeiro · Foods · Concursos em breve
          </div>
        </div>
        <img src={dataUri(mascot)} width={420} height={438} alt="" />
      </div>
    ),
    { ...size },
  );
}
