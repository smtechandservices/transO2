"use client";

import { useEffect, useRef } from "react";

// Lightweight canvas particle field: floating "air / CO2 / water" motes.
// Bright, subtle, brand-coloured. Respects prefers-reduced-motion.
export const AirParticles = ({ density = 46, className = "" }) => {
  const canvasRef = useRef(null);
  const raf = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w, h, dpr;
    const colors = ["16, 185, 129", "6, 182, 212", "14, 165, 233", "52, 211, 153"];
    let particles = [];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      particles = Array.from({ length: density }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2.6 + 0.8,
        vx: (Math.random() - 0.5) * 0.35,
        vy: -(Math.random() * 0.35 + 0.08),
        a: Math.random() * 0.5 + 0.15,
        c: colors[(Math.random() * colors.length) | 0],
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.c}, ${p.a})`;
        ctx.fill();
      }
      raf.current = requestAnimationFrame(draw);
    };

    resize();
    init();
    if (!reduce) draw();
    else { // draw a single static frame
      draw();
      cancelAnimationFrame(raf.current);
    }
    window.addEventListener("resize", () => { resize(); init(); });
    return () => cancelAnimationFrame(raf.current);
  }, [density]);

  return <canvas ref={canvasRef} className={className} style={{ width: "100%", height: "100%" }} aria-hidden="true" />;
};
