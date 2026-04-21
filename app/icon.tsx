import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 9,
          background: "linear-gradient(135deg, #1B1464 0%, #2E21A3 50%, #0EA5E9 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          {/* Brain outline */}
          <path
            d="M12 20C9 20 5 17.5 4.5 14C4 11 5 8.5 6.5 7.5C5.5 6 5.5 4 7 4C8 3.5 9 4 9.5 5C10 3.5 11 3 12 3.5C13 3 14 3.5 14.5 5C15 4 16 3.5 17 4C18.5 4 18.5 6 17.5 7.5C19 8.5 20 11 19.5 14C19 17.5 15 20 12 20Z"
            stroke="rgba(255,255,255,0.92)"
            strokeWidth="1"
            fill="rgba(255,255,255,0.1)"
            strokeLinejoin="round"
          />
          {/* Central sulcus */}
          <path d="M12 3.5C12 5.5 12 7.5 12 9.5" stroke="rgba(255,255,255,0.3)" strokeWidth="0.7" strokeLinecap="round"/>
          {/* Neural paths */}
          <path d="M7 9.5C8 11 7.5 13 8.5 15.2" stroke="rgba(125,211,252,0.9)" strokeWidth="0.9" strokeLinecap="round"/>
          <path d="M17 9.5C16 11 16.5 13 15.5 15.2" stroke="rgba(125,211,252,0.9)" strokeWidth="0.9" strokeLinecap="round"/>
          <path d="M8.5 12.2C10 11.4 12 12 14 11.3C15.6 10.8 16.2 12.2 15.5 13.4" stroke="rgba(56,189,248,0.8)" strokeWidth="0.8" strokeLinecap="round"/>
          {/* Synapse nodes */}
          <circle cx="7"    cy="9.5"  r="1.2" fill="rgba(125,211,252,0.9)" />
          <circle cx="17"   cy="9.5"  r="1.2" fill="rgba(125,211,252,0.9)" />
          <circle cx="12"   cy="11.8" r="1.5" fill="white" />
          <circle cx="8.5"  cy="15.2" r="1"   fill="rgba(125,211,252,0.8)" />
          <circle cx="15.5" cy="15.2" r="1"   fill="rgba(125,211,252,0.8)" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
