"use client";

import { useRef, useState } from "react";

/**
 * A card that tilts in 3D toward the pointer with a subtle glare highlight.
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
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [glare, setGlare] = useState<React.CSSProperties>({ opacity: 0 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotX = (0.5 - py) * 10;
    const rotY = (px - 0.5) * 12;
    setStyle({
      transform: `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(6px)`,
    });
    setGlare({
      opacity: 1,
      background: `radial-gradient(600px circle at ${px * 100}% ${py * 100}%, rgba(224,192,121,0.18), transparent 40%)`,
    });
  };

  const reset = () => {
    setStyle({ transform: "perspective(900px) rotateX(0deg) rotateY(0deg)" });
    setGlare({ opacity: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={style}
      className={`relative transition-transform duration-200 ease-out will-change-transform ${className}`}
    >
      <div
        style={glare}
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
      />
      {children}
    </div>
  );
}
