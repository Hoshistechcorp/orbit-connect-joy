import { motion } from "framer-motion";
import { useMemo } from "react";

const symbols = [
  "x", "∞", "∫", "π", "♥", "✧", "∑", "Δ", "λ", "φ",
  "love", "aura", "joy", "∂", "√", "≈", "θ", "Ω", "∇", "ε",
];

const FloatingMath = () => {
  const particles = useMemo(() =>
    Array.from({ length: 35 }, (_, i) => {
      const word = symbols[i % symbols.length];
      return {
        word,
        left: `${(i * 7 + 2) % 96}%`,
        top: `${(i * 9 + 4) % 92}%`,
        size: word.length > 1 ? 14 + (i % 4) * 5 : 22 + (i % 5) * 10,
        duration: 7 + (i % 8) * 3,
        delay: i * 0.4,
        isSpecial: word === "love" || word === "♥" || word === "x" || word === "aura",
      };
    }), []);

  const orbs = useMemo(() =>
    Array.from({ length: 6 }, (_, i) => ({
      left: `${10 + i * 16}%`,
      top: `${15 + (i % 3) * 28}%`,
      size: 100 + i * 50,
      duration: 10 + i * 3,
      delay: i * 1.5,
      color: i % 3 === 0 ? "var(--ibloov-blue)" : i % 3 === 1 ? "var(--ibloov-orange)" : "var(--ibloov-blue)",
    })), []);

  const sparkles = useMemo(() =>
    Array.from({ length: 40 }, (_, i) => ({
      left: `${(i * 13 + 7) % 98}%`,
      top: `${(i * 11 + 3) % 95}%`,
      size: 2 + (i % 3) * 1.5,
      duration: 2 + (i % 5) * 1.2,
      delay: i * 0.3,
    })), []);

  const shootingStars = useMemo(() =>
    Array.from({ length: 5 }, (_, i) => ({
      startX: `${(i * 22 + 5) % 80}%`,
      startY: `${(i * 15 + 2) % 40}%`,
      duration: 1.5 + i * 0.5,
      delay: i * 4 + 2,
      angle: 25 + (i % 3) * 10,
    })), []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      {/* Glowing orbs */}
      {orbs.map((orb, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            left: orb.left,
            top: orb.top,
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, hsl(${orb.color} / 0.1) 0%, hsl(${orb.color} / 0.03) 40%, transparent 70%)`,
            filter: "blur(30px)",
          }}
          animate={{
            x: [0, 50, -40, 30, 0],
            y: [0, -60, 40, -30, 0],
            scale: [1, 1.4, 0.85, 1.2, 1],
            opacity: [0.6, 1, 0.7, 1, 0.6],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating symbols */}
      {particles.map((p, i) => (
        <motion.span
          key={`sym-${i}`}
          className="absolute font-display select-none"
          style={{
            left: p.left,
            top: p.top,
            fontSize: `${p.size}px`,
            color: p.isSpecial
              ? `hsl(var(--ibloov-orange) / 0.22)`
              : `hsl(var(--muted-foreground) / 0.16)`,
            textShadow: p.isSpecial
              ? `0 0 25px hsl(var(--ibloov-orange) / 0.15)`
              : `0 0 10px hsl(var(--muted-foreground) / 0.05)`,
          }}
          animate={{
            y: [0, -50, 25, -35, 10, 0],
            x: [0, 20, -20, 12, -8, 0],
            rotate: [0, 15, -12, 8, -5, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
            opacity: [0, 0.3, 0.18, 0.28, 0.12, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {p.word}
        </motion.span>
      ))}

      {/* Tiny sparkles */}
      {sparkles.map((s, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute rounded-full"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            background: i % 3 === 0
              ? `hsl(var(--ibloov-orange) / 0.6)`
              : i % 3 === 1
              ? `hsl(var(--ibloov-blue) / 0.5)`
              : `hsl(var(--foreground) / 0.3)`,
            boxShadow: i % 3 === 0
              ? `0 0 6px hsl(var(--ibloov-orange) / 0.4)`
              : i % 3 === 1
              ? `0 0 6px hsl(var(--ibloov-blue) / 0.3)`
              : `0 0 4px hsl(var(--foreground) / 0.15)`,
          }}
          animate={{
            opacity: [0, 1, 0.3, 1, 0],
            scale: [0.5, 1.5, 0.8, 1.3, 0.5],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Shooting stars */}
      {shootingStars.map((star, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute"
          style={{
            left: star.startX,
            top: star.startY,
            width: 60 + i * 20,
            height: 2,
            borderRadius: 2,
            background: `linear-gradient(90deg, transparent 0%, hsl(var(--ibloov-blue) / 0.5) 30%, hsl(var(--ibloov-orange) / 0.7) 100%)`,
            transform: `rotate(${star.angle}deg)`,
            transformOrigin: "right center",
            filter: "blur(0.5px)",
          }}
          animate={{
            x: [0, -300],
            y: [0, 150],
            opacity: [0, 0.8, 0.6, 0],
            scaleX: [0, 1, 1, 0.3],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            repeatDelay: 8 + i * 3,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingMath;
