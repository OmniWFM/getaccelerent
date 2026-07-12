"use client";

/**
 * Renders the official logo image when available at /logo.svg (color) or
 * /logo-light.svg (light), falling back to the styled ACCELERENT wordmark
 * as text. Samuel will drop the real SVGs into /public later — no code change
 * needed then.
 */
export default function Wordmark({
  variant = "color",
  className = "",
}: {
  variant?: "color" | "light";
  className?: string;
}) {
  const light = variant === "light";
  const color = light ? "#F6F4EF" : "#3D4982";

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span
        className="font-display"
        style={{
          color,
          fontWeight: 500,
          fontSize: "26px",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          lineHeight: 1,
        }}
      >
        Accelerent
      </span>
    </span>
  );
}
