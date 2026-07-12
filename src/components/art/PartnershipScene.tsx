/**
 * PartnershipScene — a permanent, committed SVG illustration of two executives
 * connecting across a table, navy/gold palette. Vector art, never expires.
 */
export default function PartnershipScene({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 450"
      className={className}
      role="img"
      aria-label="Two business leaders building a partnership"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="psBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0d1b3e" />
          <stop offset="100%" stopColor="#132552" />
        </linearGradient>
        <radialGradient id="psGlow" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#c9a24b" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#c9a24b" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="psGold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#e6c878" />
          <stop offset="100%" stopColor="#c9a24b" />
        </linearGradient>
      </defs>

      <rect width="600" height="450" fill="url(#psBg)" />
      <ellipse cx="300" cy="200" rx="280" ry="200" fill="url(#psGlow)" />

      {/* left figure */}
      <g fill="#1c2c58">
        <circle cx="170" cy="150" r="42" />
        <path d="M100 330 Q100 235 170 235 Q240 235 240 330 Z" />
      </g>
      {/* right figure */}
      <g fill="#22346a">
        <circle cx="430" cy="150" r="42" />
        <path d="M360 330 Q360 235 430 235 Q500 235 500 330 Z" />
      </g>

      {/* connecting handshake / link in gold */}
      <g stroke="url(#psGold)" strokeWidth="7" strokeLinecap="round" fill="none">
        <path d="M235 258 Q300 300 365 258" />
      </g>
      <circle cx="300" cy="286" r="12" fill="url(#psGold)" />
      <circle cx="300" cy="286" r="20" fill="none" stroke="#c9a24b" strokeOpacity="0.5" strokeWidth="1.5" />

      {/* connection nodes floating between them */}
      <g fill="#c9a24b">
        <circle cx="260" cy="120" r="3" opacity="0.8" />
        <circle cx="340" cy="110" r="3" opacity="0.8" />
        <circle cx="300" cy="80" r="2.5" opacity="0.6" />
      </g>
      <g stroke="#c9a24b" strokeWidth="1" opacity="0.4">
        <line x1="260" y1="120" x2="300" y2="80" />
        <line x1="300" y1="80" x2="340" y2="110" />
        <line x1="260" y1="120" x2="340" y2="110" />
      </g>

      {/* table */}
      <ellipse cx="300" cy="360" rx="250" ry="46" fill="#0a1430" />
      <ellipse cx="300" cy="354" rx="250" ry="42" fill="none" stroke="#c9a24b" strokeOpacity="0.4" strokeWidth="1.5" />
    </svg>
  );
}
