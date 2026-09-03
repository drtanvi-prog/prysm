import React, { useEffect, useState } from "react";
import prysmIcon from "../assets/icons/prysm-icon-light.svg";

/*
  PrysmGraphic v5 - SaaS-grade integration diagram
  (Stripe/Linear-style: dot-grid canvas, soft-shadow cards, gradient-ringed hub)

  Bug fixes vs v4:
  - All beam gradients use gradientUnits="userSpaceOnUse".
    (objectBoundingBox gradients silently fail on horizontal paths - that's why
    the incoming and middle beams disappeared in the live render.)
  - Dark wordmark now sits on a white plate inside the hub, so it's always legible.
  - Chip positions and beam endpoints share the same Y constants - always aligned.
*/

const BRAND = {
  ink: "#181633",
  inkSoft: "#8b8ba3",
  panel: "#ffffff",
  border: "#e9e8f2",
  purple: "#4f56c9",
  purpleDeep: "#23204f",
  teal: "#0e9a8f",
  gold: "#c8930f",
  magenta: "#c23d8f",
};

const outputs = [
  { label: "Identified", color: BRAND.teal, tint: "#e4f4f2" },
  { label: "Qualified", color: BRAND.gold, tint: "#f7eed7" },
  { label: "Handed off", color: BRAND.magenta, tint: "#f8e3ef" },
];

function useIsNarrow(breakpoint = 640) {
  const [narrow, setNarrow] = useState(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );
  useEffect(() => {
    const onResize = () => setNarrow(window.innerWidth < breakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);
  return narrow;
}

/* Shared geometry so beams and chips can never drift apart */
const GEO = {
  emr: { x: 60, y: 140, w: 158, h: 88 },
  hub: { x: 296, y: 108, w: 152, h: 152 },
  chipX: 566,
  chipW: 140,
  chipH: 44,
  rowYs: [122, 184, 246], // centers of the three output rows
  midY: 184,              // vertical center of the whole flow
};

function DesktopGraphic() {
  const { emr, hub, chipX, chipW, chipH, rowYs, midY } = GEO;
  const hubRight = hub.x + hub.w;
  const beamPaths = rowYs.map(
    (y) => `M ${hubRight} ${y === midY ? midY : y < midY ? hub.y + 36 : hub.y + hub.h - 36} C ${hubRight + 60} ${y}, ${chipX - 60} ${y}, ${chipX} ${y}`
  );
  const inPath = `M ${emr.x + emr.w} ${midY} C ${emr.x + emr.w + 40} ${midY}, ${hub.x - 40} ${midY}, ${hub.x} ${midY}`;

  return (
    <svg
      viewBox="0 0 760 368"
      width="100%"
      role="img"
      aria-label="Encounter data flows from the EMR into Prysm, which identifies, qualifies, and hands off prospects to the donor CRM"
    >
      <defs>
        {/* dot-grid pattern for the canvas */}
        <pattern id="pg5-dots" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1.2" cy="1.2" r="1.2" fill={BRAND.purple} fillOpacity="0.10" />
        </pattern>

        {/* soft card shadow */}
        <filter id="pg5-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor={BRAND.purpleDeep} floodOpacity="0.10" />
        </filter>
        <filter id="pg5-shadow-lg" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="10" stdDeviation="16" floodColor={BRAND.purpleDeep} floodOpacity="0.22" />
        </filter>

        {/* userSpaceOnUse gradients - immune to the zero-height bbox bug */}
        <linearGradient id="pg5-in" gradientUnits="userSpaceOnUse" x1={emr.x + emr.w} y1="0" x2={hub.x} y2="0">
          <stop offset="0" stopColor={BRAND.purple} stopOpacity="0.25" />
          <stop offset="1" stopColor={BRAND.purple} />
        </linearGradient>
        {outputs.map((o, i) => (
          <linearGradient
            key={o.label}
            id={`pg5-out${i}`}
            gradientUnits="userSpaceOnUse"
            x1={hubRight}
            y1="0"
            x2={chipX}
            y2="0"
          >
            <stop offset="0" stopColor={BRAND.purple} />
            <stop offset="1" stopColor={o.color} />
          </linearGradient>
        ))}
        <linearGradient id="pg5-hubring" gradientUnits="userSpaceOnUse" x1={hub.x} y1={hub.y} x2={hubRight} y2={hub.y + hub.h}>
          <stop offset="0" stopColor={BRAND.teal} />
          <stop offset="0.5" stopColor={BRAND.purple} />
          <stop offset="1" stopColor={BRAND.magenta} />
        </linearGradient>
      </defs>

      {/* canvas */}
      <rect x="0" y="0" width="760" height="368" rx="24" fill="#f8f8fc" />
      <rect x="0" y="0" width="760" height="368" rx="24" fill="url(#pg5-dots)" />

      {/* ---- beams under the cards ---- */}
      <path d={inPath} stroke="url(#pg5-in)" strokeWidth="5" fill="none" strokeLinecap="round" />
      {beamPaths.map((d, i) => (
        <path key={i} d={d} stroke={`url(#pg5-out${i})`} strokeWidth="5" fill="none" strokeLinecap="round" />
      ))}

      {/* pulses */}
      <circle r="3.4" fill={BRAND.purple}>
        <animateMotion dur="2.4s" repeatCount="indefinite" path={inPath} />
      </circle>
      {beamPaths.map((d, i) => (
        <circle key={i} r="3" fill={outputs[i].color}>
          <animateMotion dur="2.4s" begin={`${0.7 + i * 0.25}s`} repeatCount="indefinite" path={d} />
        </circle>
      ))}

      {/* ---- EMR card ---- */}
      <g filter="url(#pg5-shadow)">
        <rect x={emr.x} y={emr.y} width={emr.w} height={emr.h} rx="16" fill={BRAND.panel} stroke={BRAND.border} />
      </g>
      <text x={emr.x + 22} y={emr.y + 34} fontSize="14.5" fontWeight="650" fill={BRAND.ink}>EMR</text>
      <text x={emr.x + 22} y={emr.y + 55} fontSize="11.5" fill={BRAND.inkSoft}>Epic · Cerner</text>
      <text x={emr.x + 22} y={emr.y + 71} fontSize="11.5" fill={BRAND.inkSoft}>Encounter data</text>

      {/* ---- Prysm hub: gradient ring → dark tile ---- */}
      <g filter="url(#pg5-shadow-lg)">
        <rect x={hub.x - 3} y={hub.y - 3} width={hub.w + 6} height={hub.h + 6} rx="27" fill="url(#pg5-hubring)" />
        <rect x={hub.x} y={hub.y} width={hub.w} height={hub.h} rx="24" fill={BRAND.purpleDeep} />
      </g>
      <image
        href={prysmIcon}
        x={hub.x + 24}
        y={hub.y + 32}
        width={hub.w - 48}
        height="38"
        preserveAspectRatio="xMidYMid meet"
      />
      <text x={hub.x + hub.w / 2} y={hub.y + 104} fontSize="11" fontWeight="500" fill="#e0dfff" textAnchor="middle">
        Built natively
      </text>
      <text x={hub.x + hub.w / 2} y={hub.y + 120} fontSize="11" fontWeight="500" fill="#e0dfff" textAnchor="middle">
        on Salesforce
      </text>

      {/* ---- output chips (positions derived from rowYs) ---- */}
      {outputs.map((o, i) => {
        const cy = rowYs[i];
        return (
          <g key={o.label} filter="url(#pg5-shadow)">
            <rect x={chipX} y={cy - chipH / 2} width={chipW} height={chipH} rx={chipH / 2} fill={BRAND.panel} stroke={o.tint} strokeWidth="2" />
          </g>
        );
      })}
      {outputs.map((o, i) => {
        const cy = rowYs[i];
        return (
          <g key={o.label} fontSize="13" fontWeight="600">
            <circle cx={chipX + 24} cy={cy} r="4" fill={o.color} />
            <text x={chipX + 38} y={cy + 4.5} fill={BRAND.ink}>{o.label}</text>
          </g>
        );
      })}
      <text x={chipX + chipW / 2} y={rowYs[2] + 48} fontSize="11" fill={BRAND.inkSoft} textAnchor="middle">
        Donor CRM · solicitation-ready
      </text>
    </svg>
  );
}

/* ---------------- Mobile ---------------- */
function MobileGraphic() {
  const card = {
    background: BRAND.panel,
    border: `1px solid ${BRAND.border}`,
    borderRadius: 16,
    padding: "16px 18px",
    boxShadow: "0 6px 16px -8px rgba(35,32,79,0.15)",
  };
  const connector = (
    <div style={{ display: "flex", justifyContent: "center" }} aria-hidden="true">
      <svg width="2" height="30">
        <line x1="1" y1="0" x2="1" y2="30" stroke={BRAND.purple} strokeOpacity="0.5" strokeWidth="2" strokeDasharray="1 7" strokeLinecap="round">
          <animate attributeName="stroke-dashoffset" from="8" to="0" dur="1.4s" repeatCount="indefinite" />
        </line>
      </svg>
    </div>
  );

  return (
    <div
      style={{
        background: "#f8f8fc",
        backgroundImage: `radial-gradient(rgba(79,86,201,0.10) 1.2px, transparent 1.2px)`,
        backgroundSize: "22px 22px",
        borderRadius: 20,
        padding: 20,
      }}
    >
      <div style={card}>
        <div style={{ fontSize: 14, fontWeight: 650, color: BRAND.ink }}>EMR</div>
        <div style={{ fontSize: 12, color: BRAND.inkSoft, marginTop: 2 }}>
          Epic · Cerner · encounter data
        </div>
      </div>

      {connector}

      <div
        style={{
          background: `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.purple}, ${BRAND.magenta})`,
          borderRadius: 22,
          padding: 3,
          boxShadow: "0 12px 28px -12px rgba(35,32,79,0.4)",
        }}
      >
        <div style={{ background: BRAND.purpleDeep, borderRadius: 19, padding: "24px 18px", textAlign: "center" }}>
          <img src={prysmIcon} alt="Prysm" style={{ height: 34, display: "inline-block", marginBottom: "8px" }} />
          <div style={{ fontSize: 12, color: "#e0dfff", fontWeight: 500, marginTop: 10 }}>
            Built natively on Salesforce
          </div>
        </div>
      </div>

      {connector}

      <div style={{ display: "grid", gap: 8 }}>
        {outputs.map((o) => (
          <div
            key={o.label}
            style={{
              ...card,
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 18px",
              border: `2px solid ${o.tint}`,
              borderRadius: 999,
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: o.color }} />
            <span style={{ fontSize: 13, fontWeight: 600, color: BRAND.ink }}>{o.label}</span>
          </div>
        ))}
      </div>
      <div style={{ fontSize: 11.5, color: BRAND.inkSoft, textAlign: "center", marginTop: 12 }}>
        Donor CRM · solicitation-ready
      </div>
    </div>
  );
}

export const PrysmGraphic = () => {
  const narrow = useIsNarrow();
  return (
    <div
      className="w-full h-auto"
      style={{
        maxWidth: 760,
        margin: "0 auto",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {narrow ? <MobileGraphic /> : <DesktopGraphic />}
    </div>
  );
};

export default PrysmGraphic;