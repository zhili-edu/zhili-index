import type { CaseArtKey } from "../content/site";

/* 案例卡抽象线稿：与定稿静态站 cases.html 完全一致（viewBox 320×180） */

const ArtFrame = ({ children }: { children: React.ReactNode }) => (
  <svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
    <rect x="0.5" y="0.5" width="319" height="179" rx="10" fill="#fbfcfe" stroke="#e5e7eb" />
    <g opacity="0.55" stroke="#e5e7eb" strokeWidth="1">
      <line x1="40" y1="20" x2="40" y2="160" />
      <line x1="80" y1="20" x2="80" y2="160" />
      <line x1="120" y1="20" x2="120" y2="160" />
      <line x1="160" y1="20" x2="160" y2="160" />
      <line x1="200" y1="20" x2="200" y2="160" />
      <line x1="240" y1="20" x2="240" y2="160" />
    </g>
    {children}
  </svg>
);

const TourismArt = () => (
  <ArtFrame>
    <g fill="none" stroke="#15233b" strokeWidth="1.6" strokeLinecap="round">
      <path d="M56 118 q22 -18 44 0 t44 0 t44 0" />
      <path d="M56 132 q22 -18 44 0 t44 0 t44 0" opacity="0.5" />
      <path d="M92 104 L92 80 L176 80 L176 104" />
      <path d="M80 104 L188 104 L176 122 L92 122 Z" />
    </g>
    <g transform="translate(206,52)">
      <rect x="0" y="0" width="70" height="76" rx="8" fill="#ffffff" stroke="#e5e7eb" />
      <rect x="12" y="14" width="46" height="6" rx="3" fill="#64748b" opacity="0.5" />
      <rect x="12" y="28" width="34" height="6" rx="3" fill="#64748b" opacity="0.35" />
      <g stroke="#2a5db0" strokeWidth="3">
        <path d="M12 60 h6 M24 60 h4 M34 60 h8 M48 60 h3 M56 60 h2" />
      </g>
      <circle cx="52" cy="26" r="9" fill="none" stroke="#2a5db0" strokeWidth="1.8" />
      <path d="M48 26 l3 3 l6 -7" fill="none" stroke="#2a5db0" strokeWidth="1.8" strokeLinecap="round" />
    </g>
  </ArtFrame>
);

const RegionArt = () => (
  <ArtFrame>
    <g stroke="#e5e7eb" strokeWidth="1.3">
      <line x1="160" y1="90" x2="70" y2="44" />
      <line x1="160" y1="90" x2="70" y2="136" />
      <line x1="160" y1="90" x2="250" y2="44" />
      <line x1="160" y1="90" x2="250" y2="136" />
    </g>
    <g>
      <rect x="48" y="30" width="44" height="28" rx="6" fill="#ffffff" stroke="#15233b" strokeWidth="1.5" />
      <rect x="58" y="40" width="24" height="4" rx="2" fill="#64748b" opacity="0.5" />
      <rect x="48" y="122" width="44" height="28" rx="6" fill="#ffffff" stroke="#15233b" strokeWidth="1.5" />
      <rect x="58" y="132" width="24" height="4" rx="2" fill="#64748b" opacity="0.5" />
      <rect x="228" y="30" width="44" height="28" rx="6" fill="#ffffff" stroke="#15233b" strokeWidth="1.5" />
      <rect x="238" y="40" width="24" height="4" rx="2" fill="#64748b" opacity="0.5" />
      <rect x="228" y="122" width="44" height="28" rx="6" fill="#ffffff" stroke="#15233b" strokeWidth="1.5" />
      <rect x="238" y="132" width="24" height="4" rx="2" fill="#64748b" opacity="0.5" />
    </g>
    <circle cx="160" cy="90" r="26" fill="#ffffff" stroke="#2a5db0" strokeWidth="1.8" />
    <circle cx="160" cy="90" r="26" fill="#2a5db0" opacity="0.06" />
    <g stroke="#2a5db0" strokeWidth="1.8" fill="none" strokeLinecap="round">
      <path d="M150 90 h20 M160 80 v20" />
      <circle cx="160" cy="90" r="12" opacity="0.5" />
    </g>
  </ArtFrame>
);

const SupervisionArt = () => (
  <ArtFrame>
    <g transform="translate(52,40)">
      <rect x="0" y="0" width="96" height="104" rx="8" fill="#ffffff" stroke="#e5e7eb" />
      <rect x="14" y="18" width="10" height="8" rx="2" fill="none" stroke="#2a5db0" strokeWidth="1.6" />
      <path d="M15 22 l3 3 l5 -6" fill="none" stroke="#2a5db0" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="32" y="19" width="50" height="6" rx="3" fill="#64748b" opacity="0.45" />
      <rect x="14" y="38" width="10" height="8" rx="2" fill="none" stroke="#2a5db0" strokeWidth="1.6" />
      <path d="M15 42 l3 3 l5 -6" fill="none" stroke="#2a5db0" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="32" y="39" width="50" height="6" rx="3" fill="#64748b" opacity="0.45" />
      <rect x="14" y="58" width="10" height="8" rx="2" fill="none" stroke="#2a5db0" strokeWidth="1.6" />
      <path d="M15 62 l3 3 l5 -6" fill="none" stroke="#2a5db0" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="32" y="59" width="50" height="6" rx="3" fill="#64748b" opacity="0.45" />
      <rect x="14" y="78" width="10" height="8" rx="2" fill="none" stroke="#e5e7eb" strokeWidth="1.6" />
      <rect x="32" y="79" width="50" height="6" rx="3" fill="#64748b" opacity="0.25" />
    </g>
    <g transform="translate(190,44)">
      <path d="M44 4 L84 18 V52 Q84 84 44 100 Q4 84 4 52 V18 Z" fill="#ffffff" stroke="#15233b" strokeWidth="1.6" />
      <path
        d="M28 52 l12 12 l24 -28"
        fill="none"
        stroke="#2a5db0"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </ArtFrame>
);

const AieduArt = () => (
  <ArtFrame>
    <g stroke="#e5e7eb" strokeWidth="1.3" fill="none">
      <path d="M64 54 L120 44 M64 54 L120 90 M64 118 L120 90 M64 118 L120 136 M120 44 L176 68 M120 90 L176 68 M120 90 L176 112 M120 136 L176 112" />
    </g>
    <g fill="#2a5db0">
      <circle cx="120" cy="90" r="4.5" />
    </g>
    <g fill="#ffffff" stroke="#15233b" strokeWidth="1.5">
      <circle cx="64" cy="54" r="6" />
      <circle cx="64" cy="118" r="6" />
      <circle cx="120" cy="44" r="5.5" />
      <circle cx="120" cy="136" r="5.5" />
      <circle cx="176" cy="68" r="6" />
      <circle cx="176" cy="112" r="6" />
    </g>
    <g transform="translate(214,50)">
      <rect x="0" y="0" width="66" height="82" rx="8" fill="#ffffff" stroke="#e5e7eb" />
      <path d="M12 16 h42 M12 16 v52 M33 16 v52" fill="none" stroke="#e5e7eb" strokeWidth="1.4" />
      <rect x="17" y="26" width="12" height="4" rx="2" fill="#64748b" opacity="0.45" />
      <rect x="38" y="26" width="12" height="4" rx="2" fill="#64748b" opacity="0.45" />
      <rect x="17" y="38" width="12" height="4" rx="2" fill="#64748b" opacity="0.35" />
      <rect x="38" y="38" width="12" height="4" rx="2" fill="#2a5db0" opacity="0.6" />
    </g>
  </ArtFrame>
);

const PlatformArt = () => (
  <ArtFrame>
    <g transform="translate(48,40)">
      <rect x="0" y="0" width="120" height="100" rx="8" fill="#ffffff" stroke="#e5e7eb" />
      <path d="M0 22 H120" stroke="#e5e7eb" strokeWidth="1.2" />
      <circle cx="14" cy="11" r="2.6" fill="#64748b" opacity="0.4" />
      <circle cx="24" cy="11" r="2.6" fill="#64748b" opacity="0.4" />
      <circle cx="34" cy="11" r="2.6" fill="#64748b" opacity="0.4" />
      <g stroke="#15233b" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity="0.75">
        <path d="M20 40 l-8 8 l8 8" />
        <path d="M40 40 l8 8 l-8 8" />
        <path d="M30 38 l-4 20" stroke="#2a5db0" />
      </g>
      <g fill="#64748b" opacity="0.35">
        <rect x="60" y="38" width="46" height="5" rx="2.5" />
        <rect x="60" y="50" width="34" height="5" rx="2.5" />
        <rect x="60" y="62" width="40" height="5" rx="2.5" />
      </g>
    </g>
    <g transform="translate(196,44)">
      <path d="M0 8 H84" stroke="#e5e7eb" strokeWidth="1.3" />
      <g transform="translate(0,0)">
        <rect x="0" y="0" width="16" height="16" rx="4" fill="#ffffff" stroke="#15233b" strokeWidth="1.5" />
        <path d="M8 16 L8 24" stroke="#e5e7eb" strokeWidth="1.3" />
        <rect x="26" y="4" width="52" height="6" rx="3" fill="#64748b" opacity="0.45" />
      </g>
      <g transform="translate(0,24)">
        <rect x="0" y="0" width="16" height="16" rx="4" fill="#ffffff" stroke="#15233b" strokeWidth="1.5" />
        <path d="M8 16 L8 24" stroke="#e5e7eb" strokeWidth="1.3" />
        <rect x="26" y="4" width="52" height="6" rx="3" fill="#64748b" opacity="0.39" />
      </g>
      <g transform="translate(0,48)">
        <rect x="0" y="0" width="16" height="16" rx="4" fill="#ffffff" stroke="#15233b" strokeWidth="1.5" />
        <path d="M8 16 L8 24" stroke="#e5e7eb" strokeWidth="1.3" />
        <rect x="26" y="4" width="52" height="6" rx="3" fill="#64748b" opacity="0.33" />
      </g>
      <g transform="translate(0,72)">
        <rect x="0" y="0" width="16" height="16" rx="4" fill="#2a5db0" stroke="#2a5db0" strokeWidth="1.5" opacity="0.85" />
        <path d="M4 8 l3 3 l6 -7" fill="none" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="26" y="4" width="52" height="6" rx="3" fill="#64748b" opacity="0.27" />
      </g>
    </g>
  </ArtFrame>
);

export const caseArtMap: Record<CaseArtKey, () => React.JSX.Element> = {
  tourism: TourismArt,
  region: RegionArt,
  supervision: SupervisionArt,
  aiedu: AieduArt,
  platform: PlatformArt,
};

/* 首页 Hero 背景：网格 + 节点连线，右侧渐隐 */
export const HeroBackdrop = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 1440 640"
    preserveAspectRatio="xMidYMid slice"
    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
  >
    <defs>
      <pattern id="hb-grid" width="48" height="48" patternUnits="userSpaceOnUse">
        <path d="M48 0H0V48" fill="none" stroke="#e5e7eb" strokeWidth="1" opacity="0.5" />
      </pattern>
      <radialGradient id="hb-fade" cx="78%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.92" />
      </radialGradient>
    </defs>
    <rect width="1440" height="640" fill="url(#hb-grid)" />
    <g fill="none" stroke="#e5e7eb" strokeWidth="1.2" opacity="0.85">
      <path d="M980 120 L1140 210 L1060 360 L1220 300" />
      <path d="M1140 210 L1300 150" />
      <path d="M1060 360 L1180 470" />
    </g>
    <g fill="#2a5db0" opacity="0.5">
      <circle cx="980" cy="120" r="3.5" />
      <circle cx="1300" cy="150" r="3.5" />
      <circle cx="1180" cy="470" r="3.5" />
    </g>
    <g fill="none" stroke="#2a5db0" strokeWidth="1.4" opacity="0.28">
      <circle cx="1140" cy="210" r="8" />
      <circle cx="1060" cy="360" r="8" />
      <circle cx="1220" cy="300" r="8" />
    </g>
    <rect width="1440" height="640" fill="url(#hb-fade)" />
  </svg>
);

/* 首页业务卡图标（单色线稿，1.6px 描边） */
export const FeatureIcon = ({ name }: { name: "education" | "consumer" | "operations" }) => {
  if (name === "education") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4 L21 8.5 L12 13 L3 8.5 Z" />
        <path d="M7 10.5 V15 C7 15 9 16.5 12 16.5 C15 16.5 17 15 17 15 V10.5" />
        <path d="M21 8.5 V13.5" />
      </svg>
    );
  }
  if (name === "consumer") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6 H6 L7.2 15 H18 L19.5 8.5 H7.5" />
        <circle cx="9" cy="19" r="1.2" />
        <circle cx="16.5" cy="19" r="1.2" />
      </svg>
    );
  }
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 4 V6 M12 18 V20 M4 12 H6 M18 12 H20 M6.3 6.3 L7.7 7.7 M16.3 16.3 L17.7 17.7 M17.7 6.3 L16.3 7.7 M7.7 16.3 L6.3 17.7" />
    </svg>
  );
};
