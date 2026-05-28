import { ImageResponse } from "next/og";

export const alt = "ENS Tier List — How good is your ENS integration?";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const TIERS = [
  { letter: "S", color: "#F26B6B" },
  { letter: "A", color: "#F2A55A" },
  { letter: "B", color: "#F2D26A" },
  { letter: "C", color: "#F2EC7A" },
  { letter: "F", color: "#B8E07A" },
];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1A1A17",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(242,241,236,0.55)",
              display: "flex",
            }}
          >
            enstierlist.com
          </div>
          <div
            style={{
              fontSize: 124,
              fontWeight: 800,
              letterSpacing: "-0.035em",
              color: "#F2F1EC",
              lineHeight: 1,
              display: "flex",
            }}
          >
            ENS Tier List
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 500,
              letterSpacing: "-0.01em",
              color: "rgba(242,241,236,0.62)",
              display: "flex",
              marginTop: 4,
            }}
          >
            How good is your ENS integration?
          </div>
        </div>

        <div style={{ display: "flex", gap: 18 }}>
          {TIERS.map((tier) => (
            <div
              key={tier.letter}
              style={{
                width: 152,
                height: 152,
                background: tier.color,
                borderRadius: 22,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 110,
                fontWeight: 900,
                color: "#1A1B1F",
                letterSpacing: "-0.04em",
              }}
            >
              {tier.letter}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
