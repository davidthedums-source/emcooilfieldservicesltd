import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface EnergyBackgroundCanvasProps {
  variant?: 'hero' | 'grid' | 'waves' | 'particles';
  className?: string;
  density?: number;
}

export const EnergyBackgroundCanvas: React.FC<EnergyBackgroundCanvasProps> = ({
  variant = 'hero',
  className = '',
  density = 28,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'black';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Initialize subtle floating energy nodes
    const particleCount = Math.min(density, Math.floor(width / 45));
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 1.8 + 0.8,
      pulse: Math.random() * Math.PI * 2,
    }));

    let time = 0;

    const render = () => {
      time += 0.008;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle abstract energy wave lines (Stripe-style continuous flow)
      if (variant === 'hero' || variant === 'waves') {
        const waveCount = isDark ? 3 : 2;
        for (let i = 0; i < waveCount; i++) {
          ctx.beginPath();
          const baseAlpha = isDark ? 0.07 - i * 0.015 : 0.04 - i * 0.01;
          const strokeColor = isDark
            ? i % 2 === 0
              ? `rgba(6, 182, 212, ${baseAlpha})` // cyan
              : `rgba(59, 130, 246, ${baseAlpha})` // blue
            : i % 2 === 0
            ? `rgba(14, 116, 144, ${baseAlpha * 1.5})`
            : `rgba(37, 99, 235, ${baseAlpha * 1.5})`;

          ctx.strokeStyle = strokeColor;
          ctx.lineWidth = 1.5;

          const yOffset = height * (0.35 + i * 0.18);
          const frequency = 0.0018 + i * 0.0006;
          const amplitude = 35 + i * 15;

          for (let x = 0; x <= width; x += 12) {
            const y =
              yOffset +
              Math.sin(x * frequency + time * (1.2 + i * 0.4)) * amplitude +
              Math.cos(x * frequency * 0.5 + time) * (amplitude * 0.3);
            if (x === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.stroke();
        }
      }

      // 2. Draw telemetry particles and interconnection nodes
      const maxConnectDistance = 110;
      const primaryColor = isDark ? 'rgba(56, 189, 248,' : 'rgba(2, 132, 199,';
      const secondaryColor = isDark ? 'rgba(99, 102, 241,' : 'rgba(79, 70, 229,';

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.02;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const pulseScale = 1 + Math.sin(p.pulse) * 0.25;
        const alpha = isDark ? 0.35 + Math.sin(p.pulse) * 0.15 : 0.25;

        // Particle circle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * pulseScale, 0, Math.PI * 2);
        ctx.fillStyle = i % 2 === 0 ? `${primaryColor} ${alpha})` : `${secondaryColor} ${alpha})`;
        ctx.fill();

        // Connect nearby nodes with delicate lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDistance) {
            const lineAlpha = (1 - dist / maxConnectDistance) * (isDark ? 0.08 : 0.05);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `${primaryColor} ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [variant, density, isDark]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${className}`}
    />
  );
};
