import { useEffect, useRef, useCallback } from "react";

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
  "rgba(59, 130, 246, 0.7)",   // blue
  "rgba(245, 158, 11, 0.6)",   // orange
  "rgba(239, 68, 68, 0.5)",    // red
  "rgba(139, 92, 246, 0.6)",   // purple
  "rgba(236, 72, 153, 0.5)",   // pink
  "rgba(34, 197, 94, 0.5)",    // green
];

const AuraMouseParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);

  const initParticles = useCallback((width: number, height: number) => {
    const count = Math.min(120, Math.floor((width * height) / 8000));
    const particles: Particle[] = [];

    // Create clustered groups spread across the entire section
    const clusterCount = 8;
    for (let c = 0; c < clusterCount; c++) {
      const clusterX = (c % 4) * (width / 4) + width / 8 + (Math.random() - 0.5) * (width / 6);
      const clusterY = Math.floor(c / 4) * (height / 2) + height / 4 + (Math.random() - 0.5) * (height / 4);
      const perCluster = Math.floor(count / clusterCount);

      for (let i = 0; i < perCluster; i++) {
        // Particles clustered around center with gaussian-like spread
        const spreadX = (Math.random() - 0.5 + Math.random() - 0.5) * 120;
        const spreadY = (Math.random() - 0.5 + Math.random() - 0.5) * 120;
        const x = clusterX + spreadX;
        const y = clusterY + spreadY;

        particles.push({
          x, y, baseX: x, baseY: y,
          size: 1.5 + Math.random() * 4,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          speed: 0.2 + Math.random() * 0.5,
          angle: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.015,
          shape: ["circle", "line", "dot"][Math.floor(Math.random() * 3)] as Particle["shape"],
        });
      }
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
      const repelRadius = 180;

      for (const p of particlesRef.current) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < repelRadius && dist > 0) {
          const force = (repelRadius - dist) / repelRadius;
          const repelX = (dx / dist) * force * 60;
          const repelY = (dy / dist) * force * 60;
          p.x -= repelX * 0.12;
          p.y -= repelY * 0.12;
        } else {
          // Return to cluster base position
          p.x += (p.baseX - p.x) * 0.04;
          p.y += (p.baseY - p.y) * 0.04;
        }

        // Gentle drift
        p.x += Math.sin(p.angle) * p.speed * 0.2;
        p.y += Math.cos(p.angle) * p.speed * 0.2;
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
          const len = p.size * 3;
          const a = p.angle;
          ctx.moveTo(p.x - Math.cos(a) * len / 2, p.y - Math.sin(a) * len / 2);
          ctx.lineTo(p.x + Math.cos(a) * len / 2, p.y + Math.sin(a) * len / 2);
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
