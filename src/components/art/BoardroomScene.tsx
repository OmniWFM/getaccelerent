/**
 * BoardroomScene — a permanent, committed SVG illustration of an executive
 * boardroom at dusk overlooking a navy city skyline with warm gold light.
 * Vector art so it never expires and never 404s (unlike hotlinked images).
 */
export default function BoardroomScene({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 600"
      className={className}
      role="img"
      aria-label="Executive boardroom at dusk overlooking a city skyline"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="brmSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a1430" />
          <stop offset="55%" stopColor="#0d1b3e" />
          <stop offset="100%" stopColor="#132552" />
        </linearGradient>
        <linearGradient id="brmDusk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c9a24b" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#c9a24b" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="brmTable" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1c2c58" />
          <stop offset="100%" stopColor="#0a1430" />
        </linearGradient>
        <radialGradient id="brmGlow" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#c9a24b" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#c9a24b" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* sky */}
      <rect width="800" height="600" fill="url(#brmSky)" />
      {/* dusk band on the horizon */}
      <rect x="0" y="150" width="800" height="180" fill="url(#brmDusk)" />
      {/* warm glow */}
      <ellipse cx="560" cy="140" rx="260" ry="160" fill="url(#brmGlow)" />

      {/* skyline silhouette */}
      <g fill="#0a1430" opacity="0.92">
        <rect x="40" y="210" width="60" height="150" />
        <rect x="110" y="170" width="46" height="190" />
        <rect x="164" y="240" width="54" height="120" />
        <rect x="228" y="150" width="40" height="210" />
        <rect x="278" y="200" width="64" height="160" />
        <rect x="352" y="120" width="48" height="240" />
        <rect x="410" y="190" width="42" height="170" />
        <rect x="462" y="230" width="58" height="130" />
        <rect x="530" y="160" width="44" height="200" />
        <rect x="584" y="205" width="60" height="155" />
        <rect x="654" y="180" width="46" height="180" />
        <rect x="710" y="235" width="54" height="125" />
      </g>
      {/* lit windows */}
      <g fill="#c9a24b" opacity="0.75">
        {Array.from({ length: 90 }).map((_, i) => {
          const cols = 18;
          const x = 48 + (i % cols) * 40 + ((i * 7) % 18);
          const y = 175 + Math.floor(i / cols) * 26 + ((i * 5) % 12);
          return <rect key={i} x={x} y={y} width="5" height="7" opacity={(i % 4) / 5 + 0.25} />;
        })}
      </g>

      {/* window frame mullions (we're inside looking out) */}
      <g stroke="#0a1430" strokeWidth="10" opacity="0.6">
        <line x1="200" y1="0" x2="200" y2="380" />
        <line x1="400" y1="0" x2="400" y2="380" />
        <line x1="600" y1="0" x2="600" y2="380" />
      </g>

      {/* boardroom table */}
      <ellipse cx="400" cy="470" rx="330" ry="90" fill="url(#brmTable)" />
      <ellipse cx="400" cy="462" rx="330" ry="86" fill="none" stroke="#c9a24b" strokeWidth="1.5" opacity="0.5" />
      {/* gold reflection line on table */}
      <ellipse cx="400" cy="455" rx="150" ry="30" fill="#c9a24b" opacity="0.12" />

      {/* chairs around the table (silhouettes) */}
      <g fill="#0a1430">
        {[140, 250, 400, 550, 660].map((cx, i) => (
          <g key={i}>
            <rect x={cx - 22} y="392" width="44" height="60" rx="10" />
            <circle cx={cx} cy="378" r="18" />
          </g>
        ))}
      </g>
      {/* foreground floor */}
      <rect x="0" y="540" width="800" height="60" fill="#0a1430" />
    </svg>
  );
}
