/**
 * Renders the ACCELERENT wordmark as text. The official SVG logo will arrive
 * later at /logo.svg (color) and /logo-light.svg (light); until then this
 * styled text stands in — no code change needed when the SVGs drop.
 */
export default function Wordmark({
  variant = "color",
  className = "",
}: {
  variant?: "color" | "light";
  className?: string;
}) {
  const color = variant === "light" ? "#F6F4EF" : "#3D4982";

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span
        style={{
          color,
          fontFamily: "var(--font-body), system-ui, sans-serif",
          fontWeight: 800,
          fontSize: "18px",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          lineHeight: 1,
        }}
      >
        ACCELERENT
      </span>
    </span>
  );
}
