"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  baseX: number;
  baseY: number;
  type: "node" | "dot";
}

export function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = window.innerWidth;
    let H = window.innerHeight * 1.1;
    canvas.width = W;
    canvas.height = H;

    const PARTICLE_COUNT = Math.min(Math.floor((W * H) / 12000), 90);
    const MAX_DIST = 180;
    const FOCAL = 400;

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * W - W / 2,
      y: Math.random() * H - H / 2,
      z: Math.random() * 600 - 100,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.15,
      vz: (Math.random() - 0.5) * 0.12,
      baseX: Math.random() * W - W / 2,
      baseY: Math.random() * H - H / 2,
      type: Math.random() > 0.35 ? "node" : "dot",
    }));

    function project(x: number, y: number, z: number) {
      const scale = FOCAL / (FOCAL + z + 300);
      return {
        sx: x * scale + W / 2,
        sy: y * scale + H / 2,
        scale,
      };
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H);

      const mx = (mouse.current.x - W / 2) * 0.018;
      const my = (mouse.current.y - H / 2) * 0.012;

      // Sort by z for painter's algorithm
      const sorted = [...particles].sort((a, b) => b.z - a.z);

      // Draw connections first
      for (let i = 0; i < sorted.length; i++) {
        const a = sorted[i];
        const pa = project(a.x, a.y, a.z);

        for (let j = i + 1; j < sorted.length; j++) {
          const b = sorted[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dz = a.z - b.z;
          const dist3d = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist3d > MAX_DIST * 2.5) continue;

          const pb = project(b.x, b.y, b.z);
          const avgScale = (pa.scale + pb.scale) / 2;
          const alpha = (1 - dist3d / (MAX_DIST * 2.5)) * avgScale * 0.55;

          if (alpha <= 0.01) continue;

          // Color blend: near = sky blue, far = deep blue
          const depthT = Math.max(0, Math.min(1, (a.z + 300) / 900));
          const r = Math.round(14 + (56 - 14) * depthT);   // 14→56
          const g = Math.round(165 + (189 - 165) * depthT); // 165→189
          const bv = Math.round(233 + (248 - 233) * depthT); // 233→248

          ctx!.beginPath();
          ctx!.moveTo(pa.sx, pa.sy);
          ctx!.lineTo(pb.sx, pb.sy);
          ctx!.strokeStyle = `rgba(${r},${g},${bv},${alpha})`;
          ctx!.lineWidth = avgScale * 1.1;
          ctx!.stroke();
        }
      }

      // Draw nodes on top
      for (const p of sorted) {
        const { sx, sy, scale } = project(p.x, p.y, p.z);
        if (sx < -20 || sx > W + 20 || sy < -20 || sy > H + 20) continue;

        const alpha = Math.max(0.1, scale * 0.85);
        const depthT = Math.max(0, Math.min(1, (p.z + 300) / 900));

        if (p.type === "node") {
          const r2 = scale * 3.2;
          // Glow
          const grd = ctx!.createRadialGradient(sx, sy, 0, sx, sy, r2 * 3.5);
          grd.addColorStop(0, `rgba(14,165,233,${alpha * 0.55})`);
          grd.addColorStop(0.5, `rgba(56,189,248,${alpha * 0.18})`);
          grd.addColorStop(1, `rgba(14,165,233,0)`);
          ctx!.beginPath();
          ctx!.arc(sx, sy, r2 * 3.5, 0, Math.PI * 2);
          ctx!.fillStyle = grd;
          ctx!.fill();

          // Core dot
          ctx!.beginPath();
          ctx!.arc(sx, sy, r2, 0, Math.PI * 2);
          const bright = Math.round(180 + depthT * 75);
          ctx!.fillStyle = `rgba(${bright},${bright + 20},255,${alpha})`;
          ctx!.fill();
        } else {
          const r2 = scale * 1.4;
          ctx!.beginPath();
          ctx!.arc(sx, sy, r2, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(125,211,252,${alpha * 0.6})`;
          ctx!.fill();
        }
      }

      // Update positions
      for (const p of particles) {
        p.x += p.vx + mx * 0.004;
        p.y += p.vy + my * 0.004;
        p.z += p.vz;

        // Soft boundary wrap
        if (p.x > W / 2 + 60) p.x = -W / 2 - 60;
        if (p.x < -W / 2 - 60) p.x = W / 2 + 60;
        if (p.y > H / 2 + 60) p.y = -H / 2 - 60;
        if (p.y < -H / 2 - 60) p.y = H / 2 + 60;
        if (p.z > 500) p.z = -100;
        if (p.z < -100) p.z = 500;
      }

      raf.current = requestAnimationFrame(draw);
    }

    draw();

    const onMouse = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    const onResize = () => {
      W = window.innerWidth;
      H = window.innerHeight * 1.1;
      canvas.width = W;
      canvas.height = H;
    };

    window.addEventListener("mousemove", onMouse, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{ mixBlendMode: "screen" }}
      aria-hidden
    />
  );
}
