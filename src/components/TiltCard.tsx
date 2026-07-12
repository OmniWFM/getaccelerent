"use client";

import { useRef, useState } from "react";

/**
 * A card that tilts subtly in 3D toward the pointer. Perspective 900px,
 * max ±4deg, lifts -4px with a soft shadow on hover, resets on leave.
 * Pure CSS transforms + React state — no dependencies.
 */
export default function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [style, setStyle] = useState<React.CSSProperties>({
    transform: "perspective(900px) rotateX(0deg) rotateY(0deg)",
  });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotX = (0.5 - py) * 8;
    const rotY = (px - 0.5) * 8;
    const clampX = Math.max(-4, Math.min(4, rotX));
    const clampY = Math.max(-4, Math.min(4, rotY));
    setStyle({
      transform: `perspective(900px) rotateX(${clampX}deg) rotateY(${clampY}deg) translateY(-4px)`,
      boxShadow: "0 24px 50px rgba(13, 21, 40, 0.18)",
    });
  };

  const reset = () => {
    setStyle({
      transform: "perspective(900px) rotateX(0deg) rotateY(0deg)",
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={style}
      className={`transition-transform duration-200 ease-out will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}
