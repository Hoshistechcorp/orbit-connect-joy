import { useEffect, useRef, useMemo, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  color: string;
  speed: number;
  angle: number;
  rotationSpeed: number;
  shape: "circle" | "line" | "dot";
}

const COLORS = [
  "rgba(59, 130, 246, 0.6)",   // blue
  "rgba(245, 158, 11, 0.5)",   // orange
  "rgba(139, 92, 246, 0.5)",   // purple
  "rgba(236, 72, 153, 0.4)",   // pink
  "rgba(34, 197, 94, 0.4)",    // green
  "rgba(255, 255, 255, 0.3)",  // white
];

const AuraMouseParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);

  const initParticles = useCallback((width: number, height: number) => {
    const count = Math.min(80, Math.floor((width * height) / 12000));
    const particles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      particles.push({
        x, y, baseX: x, baseY: y,
        size: 2 + Math.random() * 4,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        speed: 0.3 + Math.random() * 0.7,
        angle: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        shape: ["circle", "line", "dot"][Math.floor(Math.random() * 3)] as Particle["shape"],
      });
    }
    particlesRef.current = particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      initParticles(canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mouse = mouseRef.current;
      const repelRadius = 150;

      for (const p of particlesRef.current) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < repelRadius && dist > 0) {
          const force = (repelRadius - dist) / repelRadius;
          const repelX = (dx / dist) * force * 40;
          const repelY = (dy / dist) * force * 40;
          p.x -= repelX * 0.08;
          p.y -= repelY * 0.08;
        } else {
          // Return to base
          p.x += (p.baseX - p.x) * 0.03;
          p.y += (p.baseY - p.y) * 0.03;
        }

        // Gentle drift
        p.x += Math.sin(p.angle) * p.speed * 0.3;
        p.y += Math.cos(p.angle) * p.speed * 0.3;
        p.angle += p.rotationSpeed;

        // Draw
        ctx.save();
        ctx.fillStyle = p.color;
        ctx.strokeStyle = p.color;

        if (p.shape === "circle") {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.shape === "line") {
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          const len = p.size * 2.5;
          ctx.moveTo(p.x - len / 2, p.y);
          ctx.lineTo(p.x + len / 2, p.y);
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }

      animationRef.current = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ zIndex: 1 }}
    />
  );
};

export default AuraMouseParticles;
