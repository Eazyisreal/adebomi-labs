import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "linear-gradient(140deg, #0D1B2A 0%, #1A73E8 55%, #BAD8FF 100%)",
        borderRadius: 112,
        color: "#FFFFFF",
        display: "flex",
        fontSize: 186,
        fontWeight: 700,
        height: "100%",
        justifyContent: "center",
        width: "100%",
      }}
    >
      A
    </div>,
    {
      ...size,
    }
  );
}
