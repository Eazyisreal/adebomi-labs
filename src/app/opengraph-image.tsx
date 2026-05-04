import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "flex-start",
        background: "linear-gradient(140deg, #0D1B2A 0%, #1A73E8 55%, #BAD8FF 100%)",
        color: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        padding: "72px",
        width: "100%",
      }}
    >
      <div
        style={{
          border: "1px solid rgba(255, 255, 255, 0.36)",
          borderRadius: "999px",
          display: "flex",
          fontSize: 28,
          letterSpacing: 1.5,
          padding: "10px 22px",
          textTransform: "uppercase",
        }}
      >
        The Adebomi Lab
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 24,
          maxWidth: 950,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 74,
            fontWeight: 700,
            letterSpacing: -1.5,
            lineHeight: 1.05,
          }}
        >
          Designing biomolecules for therapeutic innovation.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            opacity: 0.95,
          }}
        >
          Chemistry, biology, and AI for next-generation medicines.
        </div>
      </div>
    </div>,
    {
      ...size,
    }
  );
}
