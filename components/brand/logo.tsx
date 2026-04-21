import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const color =
    variant === "dark"
      ? "text-[color:var(--color-primary-dark)]"
      : "text-white";
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2 font-display tracking-tight",
        className
      )}
    >
      <span className="relative inline-flex h-9 w-9 items-center justify-center">
        <svg viewBox="0 0 24 24" fill="none" className="relative h-[26px] w-[26px]" aria-hidden>
          <defs>
            <style>{`
              @keyframes brainGlow {
                0%,100%{opacity:.85;filter:drop-shadow(0 0 3px rgba(56,189,248,.6)) drop-shadow(0 0 8px rgba(125,211,252,.3))}
                50%{opacity:1;filter:drop-shadow(0 0 6px rgba(56,189,248,1)) drop-shadow(0 0 16px rgba(125,211,252,.7)) drop-shadow(0 0 28px rgba(14,165,233,.4))}
              }
              @keyframes sig1 {
                0%{stroke-dashoffset:22;opacity:.12}
                50%{opacity:.95}
                100%{stroke-dashoffset:0;opacity:.12}
              }
              @keyframes sig2 {
                0%{stroke-dashoffset:22;opacity:.12}
                50%{opacity:.95}
                100%{stroke-dashoffset:0;opacity:.12}
              }
              @keyframes sig3 {
                0%{stroke-dashoffset:18;opacity:.1}
                50%{opacity:.8}
                100%{stroke-dashoffset:0;opacity:.1}
              }
              @keyframes nodeBeat {
                0%,100%{opacity:.6;transform:scale(1)}
                50%{opacity:1;transform:scale(1.45)}
              }
              @keyframes centerBeat {
                0%,100%{opacity:.85;transform:scale(1)}
                50%{opacity:1;transform:scale(1.35)}
              }
              .brain-outline{animation:brainGlow 2.8s ease-in-out infinite}
              .s1{stroke-dasharray:22;animation:sig1 2.6s ease-in-out infinite}
              .s2{stroke-dasharray:22;animation:sig2 2.6s ease-in-out infinite .87s}
              .s3{stroke-dasharray:18;animation:sig3 2.6s ease-in-out infinite 1.73s}
              .nd{transform-box:fill-box;transform-origin:center;animation:nodeBeat 2.2s ease-in-out infinite}
              .nd2{transform-box:fill-box;transform-origin:center;animation:nodeBeat 2.2s ease-in-out infinite .55s}
              .nd3{transform-box:fill-box;transform-origin:center;animation:centerBeat 1.9s ease-in-out infinite .28s}
              .nd4{transform-box:fill-box;transform-origin:center;animation:nodeBeat 2.2s ease-in-out infinite 1.1s}
              .nd5{transform-box:fill-box;transform-origin:center;animation:nodeBeat 2.2s ease-in-out infinite 1.65s}
            `}</style>
          </defs>

          {/* Brain silhouette */}
          <path
            className="brain-outline"
            d="M12 20C9 20 5 17.5 4.5 14C4 11 5 8.5 6.5 7.5C5.5 6 5.5 4 7 4C8 3.5 9 4 9.5 5C10 3.5 11 3 12 3.5C13 3 14 3.5 14.5 5C15 4 16 3.5 17 4C18.5 4 18.5 6 17.5 7.5C19 8.5 20 11 19.5 14C19 17.5 15 20 12 20Z"
            stroke="rgba(46,33,163,0.9)"
            strokeWidth="0.95"
            fill="rgba(46,33,163,0.06)"
            strokeLinejoin="round"
          />

          {/* Central sulcus groove */}
          <path
            d="M12 3.5C12 5.5 12 7.5 12 9.5"
            stroke="rgba(46,33,163,0.3)"
            strokeWidth="0.65"
            strokeLinecap="round"
          />

          {/* Left neural path */}
          <path
            className="s1"
            d="M7 9.5C8 11 7.5 13 8.5 15.2"
            stroke="rgba(125,211,252,0.9)"
            strokeWidth="0.85"
            strokeLinecap="round"
          />
          {/* Right neural path */}
          <path
            className="s2"
            d="M17 9.5C16 11 16.5 13 15.5 15.2"
            stroke="rgba(125,211,252,0.9)"
            strokeWidth="0.85"
            strokeLinecap="round"
          />
          {/* Cross-hemisphere connection */}
          <path
            className="s3"
            d="M8.5 12.2C10 11.4 12 12 14 11.3C15.6 10.8 16.2 12.2 15.5 13.4"
            stroke="rgba(56,189,248,0.75)"
            strokeWidth="0.75"
            strokeLinecap="round"
          />

          {/* Synapse nodes */}
          <circle className="nd"  cx="7"    cy="9.5"  r="1.05" fill="rgba(125,211,252,0.85)" />
          <circle className="nd2" cx="17"   cy="9.5"  r="1.05" fill="rgba(125,211,252,0.85)" />
          <circle className="nd3" cx="12"   cy="11.8" r="1.35" fill="white" />
          <circle className="nd4" cx="8.5"  cy="15.2" r="0.9"  fill="rgba(125,211,252,0.75)" />
          <circle className="nd5" cx="15.5" cy="15.2" r="0.9"  fill="rgba(125,211,252,0.75)" />
        </svg>
      </span>

      <span className={cn("text-lg font-semibold", color)}>
        techno<span className="text-[color:var(--color-accent)]">LO</span>gia
        <span className={color}>.</span>
      </span>
    </Link>
  );
}
