'use client';

import { useRef, useEffect, useCallback } from 'react';
import styles from './LineWaves.module.css';

// React Bits LineWaves uses ogl with a custom GLSL shader.
// This is a placeholder that renders a similar effect with Canvas2D.
// 
// FOR THE REAL REACT BITS COMPONENT:
// 1. Run: npx jsrepo init https://reactbits.dev/default/
// 2. Run: npx jsrepo add Backgrounds/LineWaves
// 3. Replace this file with the installed component
//
// Or install via shadcn:
// npx shadcn@latest add "https://reactbits.dev/r/Backgrounds/LineWaves"

interface LineWavesProps {
  speed?: number;
  innerLineCount?: number;
  outerLineCount?: number;
  warpIntensity?: number;
  rotation?: number;
  edgeFadeWidth?: number;
  colorCycleSpeed?: number;
  brightness?: number;
  mouseInteraction?: boolean;
  mouseInfluence?: number;
  color1?: string;
  color2?: string;
  color3?: string;
}

export default function LineWaves({
  speed = 0.3,
  innerLineCount = 32,
  outerLineCount = 36,
  warpIntensity = 1,
  rotation = -45,
  brightness = 0.2,
  mouseInteraction = true,
  mouseInfluence = 2,
  color1 = '#c8ff00',
  color2 = '#ffffff',
  color3 = '#888888',
}: LineWavesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);
  const timeRef = useRef(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  const hexToRgb = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;
    return { r, g, b };
  };

  const draw = useCallback(
    (ctx: CanvasRenderingContext2D, w: number, h: number) => {
      ctx.fillStyle = 'rgba(10,10,10,0.15)';
      ctx.fillRect(0, 0, w, h);
      ctx.save();

      const cx = w / 2;
      const cy = h / 2;
      ctx.translate(cx, cy);
      ctx.rotate((rotation * Math.PI) / 180);
      ctx.translate(-cx, -cy);

      const t = timeRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const total = innerLineCount + outerLineCount;
      const c1 = hexToRgb(color1);
      const c2 = hexToRgb(color2);
      const c3 = hexToRgb(color3);

      for (let i = 0; i < total; i++) {
        const ratio = i / total;
        const isInner = i < innerLineCount;
        const yBase = h * 0.1 + (h * 0.8 * i) / total;

        // Color interpolation
        let r: number, g: number, b: number;
        if (ratio < 0.33) {
          const f = ratio / 0.33;
          r = c1.r + (c2.r - c1.r) * f;
          g = c1.g + (c2.g - c1.g) * f;
          b = c1.b + (c2.b - c1.b) * f;
        } else if (ratio < 0.66) {
          const f = (ratio - 0.33) / 0.33;
          r = c2.r + (c3.r - c2.r) * f;
          g = c2.g + (c3.g - c2.g) * f;
          b = c2.b + (c3.b - c2.b) * f;
        } else {
          const f = (ratio - 0.66) / 0.34;
          r = c3.r + (c1.r - c3.r) * f;
          g = c3.g + (c1.g - c3.g) * f;
          b = c3.b + (c1.b - c3.b) * f;
        }

        const alpha = brightness + (isInner ? 0.5 : 0.25);
        ctx.strokeStyle = `rgba(${Math.round(r * 255)},${Math.round(g * 255)},${Math.round(b * 255)},${Math.min(alpha, 1)})`;
        ctx.lineWidth = isInner ? 1.2 : 0.6;
        ctx.beginPath();

        for (let x = 0; x <= w; x += 2) {
          const xr = x / w;

          // Multi-octave wave distortion
          const w1 = Math.sin(xr * 5 + t * speed + ratio * 8) * 35 * warpIntensity;
          const w2 = Math.sin(xr * 3 + t * speed * 0.6 + ratio * 5) * 22 * warpIntensity;
          const w3 = Math.cos(xr * 8 + t * speed * 1.4 + ratio * 10) * 12 * warpIntensity;
          const w4 = Math.sin(xr * 12 + t * speed * 2 + ratio * 3) * 5 * warpIntensity;

          // Mouse displacement
          let md = 0;
          if (mouseInteraction) {
            const dx = xr - mx;
            const dy = ratio - my;
            const dist = Math.sqrt(dx * dx + dy * dy);
            md = Math.exp(-dist * 5) * 50 * mouseInfluence * Math.sin(t * 1.5 + dist * 8);
          }

          const y = yBase + w1 + w2 + w3 + w4 + md;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      ctx.restore();
    },
    [speed, innerLineCount, outerLineCount, warpIntensity, rotation, brightness, color1, color2, color3, mouseInteraction, mouseInfluence]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    const onMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };
    if (mouseInteraction) canvas.addEventListener('mousemove', onMouse);

    // Initial clear
    const rect = canvas.getBoundingClientRect();
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, rect.width, rect.height);

    const loop = () => {
      timeRef.current += 0.016;
      const r = canvas.getBoundingClientRect();
      draw(ctx, r.width, r.height);
      frameRef.current = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMouse);
    };
  }, [draw, mouseInteraction]);

  return <canvas ref={canvasRef} className={styles.canvas} />;
}
