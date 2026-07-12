/**
 * BoardTableScene — a permanent, committed SVG illustration of a group of
 * senior leaders around a conference table, navy/gold. Vector art, never expires.
 */
export default function BoardTableScene({ className = "" }: { className?: string }) {
  const seats = [
    { x: 150, y: 150 },
    { x: 300, y: 120 },
    { x: 450, y: 150 },
    { x: 150, y: 300 },
    { x: 300, y: 330 },
    { x: 450, y: 300 },
  ];
  return (
    <svg
      viewBox="0 0 600 450"
      className={className}
      role="img"
      aria-label="Senior leaders around a conference table"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="btBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0d1b3e" />
          <stop offset="100%" stopColor="#0a1430" />
        </linearGradient>
        <radialGradient id="btGlow" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#c9a24b" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#c9a24b" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="600" height="450" fill="url(#btBg)" />
      <ellipse cx="300" cy="225" rx="240" ry="180" fill="url(#btGlow)" />

      {/* central table */}
      <ellipse cx="300" cy="225" rx="150" ry="90" fill="#1c2c58" />
      <ellipse cx="300" cy="225" rx="150" ry="90" fill="none" stroke="#c9a24b" strokeOpacity="0.45" strokeWidth="1.5" />
      <ellipse cx="300" cy="225" rx="70" ry="40" fill="#c9a24b" opacity="0.08" />

      {/* connection lines from center to each seat */}
      <g stroke="#c9a24b" strokeWidth="1" opacity="0.35">
        {seats.map((s, i) => (
          <line key={i} x1="300" y1="225" x2={s.x} y2={s.y} />
        ))}
      </g>

      {/* seated leaders */}
      {seats.map((s, i) => (
        <g key={i} fill={i % 2 === 0 ? "#22346a" : "#2a3d78"}>
          <circle cx={s.x} cy={s.y} r="24" />
          <path d={`M${s.x - 30} ${s.y + 60} Q${s.x - 30} ${s.y + 18} ${s.x} ${s.y + 18} Q${s.x + 30} ${s.y + 18} ${s.x + 30} ${s.y + 60} Z`} />
          <circle cx={s.x} cy={s.y} r="24" fill="none" stroke="#c9a24b" strokeOpacity="0.3" strokeWidth="1" />
        </g>
      ))}
    </svg>
  );
}
