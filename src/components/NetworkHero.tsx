"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  z: number;
  // base positions on a sphere shell
  bx: number;
  by: number;
  bz: number;
  pulse: number;
};

/**
 * Interactive 3D node network rendered on a 2D canvas with hand-rolled
 * perspective projection — no external libraries, so it can never break the build.
 * Nodes sit on a rotating sphere shell, connect to nearby neighbours, and the
 * whole cloud tilts toward the pointer. Represents Accelerent's exclusive
 * partner network: decision-makers connected across a market.
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
    const nodes: Node[] = [];

    // Distribute points on a sphere (Fibonacci sphere)
    for (let i = 0; i < NODE_COUNT; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / NODE_COUNT);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const x = Math.sin(phi) * Math.cos(theta) * RADIUS;
      const y = Math.sin(phi) * Math.sin(theta) * RADIUS;
      const z = Math.cos(phi) * RADIUS;
      nodes.push({ x, y, z, bx: x, by: y, bz: z, pulse: Math.random() * Math.PI * 2 });
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

    let rotX = -0.3;
    let rotY = 0;
    let raf = 0;
    let t = 0;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const render = () => {
      t += 0.01;
      // ease rotation toward pointer, plus constant drift
      const targetY = pointer.current.active ? pointer.current.x * 0.9 : 0;
      const targetX = pointer.current.active ? -0.3 + pointer.current.y * 0.6 : -0.3;
      rotY += ((targetY - rotY) * 0.05) + (prefersReduced ? 0 : 0.0025);
      rotX += (targetX - rotX) * 0.05;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      const cx = width / 2;
      const cy = height / 2;
      const focal = 620;

      const projected = nodes.map((n) => {
        // rotate Y then X
        let x = n.bx * cosY - n.bz * sinY;
        let z = n.bx * sinY + n.bz * cosY;
        let y = n.by * cosX - z * sinX;
        z = n.by * sinX + z * cosX;
        const scale = focal / (focal + z + RADIUS);
        return {
          sx: cx + x * scale,
          sy: cy + y * scale,
          scale,
          z,
        };
      });

      ctx.clearRect(0, 0, width, height);

      // connections
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const a = projected[i];
          const b = projected[j];
          const dx = a.sx - b.sx;
          const dy = a.sy - b.sy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const depth = (a.scale + b.scale) / 2;
            const alpha = (1 - dist / 120) * 0.28 * depth;
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
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        const n = nodes[i];
        const pulse = prefersReduced ? 1 : 0.7 + Math.sin(t * 2 + n.pulse) * 0.3;
        const r = 2.2 * p.scale * pulse;
        const glow = ctx.createRadialGradient(p.sx, p.sy, 0, p.sx, p.sy, r * 5);
        glow.addColorStop(0, `rgba(224, 192, 121, ${0.9 * p.scale})`);
        glow.addColorStop(1, "rgba(224, 192, 121, 0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, r * 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(255, 246, 224, ${Math.min(1, p.scale)})`;
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(render);
    };
    render();

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
