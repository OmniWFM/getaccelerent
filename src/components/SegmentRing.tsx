"use client";

import { useEffect, useRef } from "react";

/**
 * A ring of 55 arc segments rotating slowly around a centre. Every 9th
 * segment is gold and thicker; the rest are faint off-white. Centre text
 * reads "1:1" over "ONE PARTNER PER SEGMENT". Off-white on navy.
 * Hand-rolled canvas — no dependencies. Respects prefers-reduced-motion.
 */
export default function SegmentRing() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const SEGMENTS = 55;
    const ARC_FILL = 0.55; // each segment fills 55% of its slot

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let rot = 0;
    let raf = 0;

    const draw = () => {
      const cx = width / 2;
      const cy = height / 2;
      const radius = Math.min(width, height) * 0.38;
      const slot = (Math.PI * 2) / SEGMENTS;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < SEGMENTS; i++) {
        const gold = i % 9 === 0;
        const start = rot + i * slot;
        const end = start + slot * ARC_FILL;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, start, end);
        if (gold) {
          ctx.strokeStyle = "rgba(201, 162, 75, 0.95)";
          ctx.lineWidth = 6;
        } else {
          ctx.strokeStyle = "rgba(246, 244, 239, 0.22)";
          ctx.lineWidth = 3;
        }
        ctx.stroke();
      }

      // centre text
      ctx.fillStyle = "rgba(246, 244, 239, 0.95)";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = "44px Georgia, serif";
      ctx.fillText("1:1", cx, cy - 6);

      ctx.fillStyle = "rgba(246, 244, 239, 0.6)";
      ctx.font = "10px system-ui, sans-serif";
      ctx.save();
      ctx.translate(cx, cy + 26);
      // letter-spaced label
      const label = "ONE PARTNER PER SEGMENT";
      const spacing = 2.2;
      let total = 0;
      const widths: number[] = [];
      for (const ch of label) {
        const w = ctx.measureText(ch).width + spacing;
        widths.push(w);
        total += w;
      }
      let x = -total / 2;
      for (let i = 0; i < label.length; i++) {
        ctx.fillText(label[i], x + widths[i] / 2, 0);
        x += widths[i];
      }
      ctx.restore();

      if (!prefersReduced) {
        rot += 0.0015;
        raf = requestAnimationFrame(draw);
      }
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="h-full w-full"
    />
  );
}
