"use client";

import { useEffect, useRef } from "react";

interface Trail {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  type: "node" | "dot";
}

export function CursorEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -999, y: -999, px: -999, py: -999 });
  const ring = useRef({ x: -999, y: -999 });
  const trails = useRef<Trail[]>([]);
  const raf = useRef<number>(0);
  const spawnTimer = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const onMove = (e: MouseEvent) => {
      mouse.current.px = mouse.current.x;
      mouse.current.py = mouse.current.y;
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    function spawnTrail() {
      const speed = Math.hypot(
        mouse.current.x - mouse.current.px,
        mouse.current.y - mouse.current.py
      );
      if (speed < 2) return;
      const count = Math.min(2, Math.floor(speed / 14) + 1);

      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const mag = Math.random() * 0.7 + 0.2;
        trails.current.push({
          x: mouse.current.x + (Math.random() - 0.5) * 4,
          y: mouse.current.y + (Math.random() - 0.5) * 4,
          vx: Math.cos(angle) * mag,
          vy: Math.sin(angle) * mag,
          life: 0.72,
          maxLife: 0.72,
          size: Math.random() * 2.5 + 1,
          type: Math.random() > 0.45 ? "node" : "dot",
        });
      }

      if (trails.current.length > 55) {
        trails.current.splice(0, trails.current.length - 55);
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      spawnTimer.current++;
      if (spawnTimer.current % 5 === 0 && mouse.current.x > 0) {
        spawnTrail();
      }

      // Smooth ring follow
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;

      // Draw connections between nearby live trails
      const alive = trails.current.filter((t) => t.life > 0.1);
      for (let i = 0; i < alive.length; i++) {
        for (let j = i + 1; j < alive.length; j++) {
          const a = alive[i];
          const b = alive[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d > 90) continue;
          const alpha = (1 - d / 90) * Math.min(a.life, b.life) * 0.5;
          ctx!.beginPath();
          ctx!.moveTo(a.x, a.y);
          ctx!.lineTo(b.x, b.y);
          ctx!.strokeStyle = `rgba(56,189,248,${alpha})`;
          ctx!.lineWidth = 0.8;
          ctx!.stroke();
        }
      }

      // Draw trails
      for (const t of trails.current) {
        if (t.life <= 0) continue;
        const alpha = t.life * 0.9;

        if (t.type === "node") {
          // Glow
          const grd = ctx!.createRadialGradient(t.x, t.y, 0, t.x, t.y, t.size * 3.5);
          grd.addColorStop(0, `rgba(14,165,233,${alpha * 0.7})`);
          grd.addColorStop(0.5, `rgba(56,189,248,${alpha * 0.25})`);
          grd.addColorStop(1, `rgba(14,165,233,0)`);
          ctx!.beginPath();
          ctx!.arc(t.x, t.y, t.size * 3.5, 0, Math.PI * 2);
          ctx!.fillStyle = grd;
          ctx!.fill();

          // Core
          ctx!.beginPath();
          ctx!.arc(t.x, t.y, t.size, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(200,235,255,${alpha})`;
          ctx!.fill();
        } else {
          ctx!.beginPath();
          ctx!.arc(t.x, t.y, t.size * 0.6, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(125,211,252,${alpha * 0.7})`;
          ctx!.fill();
        }

        // Age
        t.life -= 0.03;
        t.x += t.vx;
        t.y += t.vy;
        t.vx *= 0.94;
        t.vy *= 0.94;
      }

      // Outer ring (lagging)
      if (ring.current.x > 0) {
        ctx!.beginPath();
        ctx!.arc(ring.current.x, ring.current.y, 18, 0, Math.PI * 2);
        ctx!.strokeStyle = "rgba(56,189,248,0.45)";
        ctx!.lineWidth = 1.2;
        ctx!.stroke();

        // Inner dot
        ctx!.beginPath();
        ctx!.arc(mouse.current.x, mouse.current.y, 3.5, 0, Math.PI * 2);
        const coreGrd = ctx!.createRadialGradient(
          mouse.current.x, mouse.current.y, 0,
          mouse.current.x, mouse.current.y, 10
        );
        coreGrd.addColorStop(0, "rgba(255,255,255,0.95)");
        coreGrd.addColorStop(0.4, "rgba(14,165,233,0.7)");
        coreGrd.addColorStop(1, "rgba(14,165,233,0)");
        ctx!.fillStyle = coreGrd;
        ctx!.fill();

        ctx!.beginPath();
        ctx!.arc(mouse.current.x, mouse.current.y, 10, 0, Math.PI * 2);
        ctx!.fillStyle = "rgba(14,165,233,0.12)";
        ctx!.fill();
      }

      trails.current = trails.current.filter((t) => t.life > 0);
      raf.current = requestAnimationFrame(draw);
    }

    draw();
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999]"
      aria-hidden
    />
  );
}
