import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#F26B6B",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, -apple-system, sans-serif",
          fontSize: 148,
          fontWeight: 900,
          color: "#1A1B1F",
          letterSpacing: "-0.04em",
        }}
      >
        S
      </div>
    ),
    { ...size }
  );
}
