"use client";

import { useEffect, useRef } from "react";

type Node = {
  bx: number;
  by: number;
  bz: number;
  big: boolean;
  r: number;
};

/**
 * Interactive 3D node network on a 2D canvas with hand-rolled perspective
 * projection — no external libraries. ~90 nodes sit on a rotating sphere
 * (with radius jitter), connected by thin gold lines when close in 2D.
 * 18% of nodes are larger and gold; the rest are off-white. Pointer position
 * eases the scene rotation. Respects prefers-reduced-motion (static frame).
 */
export default function NetworkHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointer = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const NODE_COUNT = 90;
    const RADIUS = 260;
    const FOV = 620;
    const nodes: Node[] = [];

    for (let i = 0; i < NODE_COUNT; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / NODE_COUNT);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const jitter = RADIUS * (0.9 + Math.random() * 0.2);
      const x = Math.sin(phi) * Math.cos(theta) * jitter;
      const y = Math.sin(phi) * Math.sin(theta) * jitter;
      const z = Math.cos(phi) * jitter;
      const big = Math.random() < 0.18;
      nodes.push({ bx: x, by: y, bz: z, big, r: big ? 2.8 : 1.6 });
    }

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

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.current.x = (e.clientX - rect.left) / rect.width - 0.5;
      pointer.current.y = (e.clientY - rect.top) / rect.height - 0.5;
      pointer.current.active = true;
    };
    const onLeave = () => {
      pointer.current.active = false;
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerout", onLeave);

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let rotX = -0.3;
    let rotY = 0;
    let raf = 0;

    const draw = () => {
      const targetY = pointer.current.active ? pointer.current.x * 0.9 : 0;
      const targetX = pointer.current.active
        ? -0.3 + pointer.current.y * 0.6
        : -0.3;
      if (!prefersReduced) {
        rotY += (targetY - rotY) * 0.05 + 0.0025;
        rotX += (targetX - rotX) * 0.05;
      }

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cx = width / 2;
      const cy = height / 2;

      const projected = nodes.map((n) => {
        let x = n.bx * cosY - n.bz * sinY;
        let z = n.bx * sinY + n.bz * cosY;
        const y = n.by * cosX - z * sinX;
        z = n.by * sinX + z * cosX;
        const scale = FOV / (FOV + z + RADIUS);
        return { sx: cx + x * scale, sy: cy + y * scale, scale, node: n };
      });

      ctx.clearRect(0, 0, width, height);

      // connection lines
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const a = projected[i];
          const b = projected[j];
          const dx = a.sx - b.sx;
          const dy = a.sy - b.sy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            const depth = (a.scale + b.scale) / 2;
            const alpha = (1 - dist / 110) * 0.3 * depth;
            ctx.strokeStyle = `rgba(201, 162, 75, ${alpha})`;
            ctx.lineWidth = 0.6 * depth;
            ctx.beginPath();
            ctx.moveTo(a.sx, a.sy);
            ctx.lineTo(b.sx, b.sy);
            ctx.stroke();
          }
        }
      }

      // nodes
      for (const p of projected) {
        const r = p.node.r * p.scale;
        if (p.node.big) {
          ctx.fillStyle = `rgba(201, 162, 75, ${Math.min(1, p.scale)})`;
        } else {
          ctx.fillStyle = `rgba(246, 244, 239, ${Math.min(0.85, p.scale * 0.85)})`;
        }
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!prefersReduced) raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerout", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  );
}
