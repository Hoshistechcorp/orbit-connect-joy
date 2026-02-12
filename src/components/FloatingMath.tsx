import { motion } from "framer-motion";
import { useMemo } from "react";

const symbols = [
  "x", "∞", "∫", "π", "♥", "✧", "∑", "Δ", "λ", "φ",
  "love", "aura", "joy", "∂", "√", "≈", "θ", "Ω",
];

const FloatingMath = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => {
      const word = symbols[i % symbols.length];
      return {
        word,
        left: `${(i * 7 + 3) % 95}%`,
        top: `${(i * 11 + 5) % 90}%`,
        size: word.length > 1 ? 16 + (i % 4) * 4 : 24 + (i % 5) * 8,
        duration: 8 + (i % 7) * 3,
        delay: i * 0.6,
        isSpecial: word === "love" || word === "♥" || word === "x",
      };
    });
  }, []);

  const orbs = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => ({
      left: `${15 + i * 18}%`,
      top: `${20 + (i % 3) * 25}%`,
      size: 120 + i * 60,
      duration: 12 + i * 4,
      delay: i * 2,
      color: i % 2 === 0 ? "var(--ibloov-blue)" : "var(--ibloov-orange)",
    }));
  }, []);

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
            background: `radial-gradient(circle, hsl(${orb.color} / 0.08) 0%, transparent 70%)`,
            filter: "blur(40px)",
          }}
          animate={{
            x: [0, 40, -30, 20, 0],
            y: [0, -50, 30, -20, 0],
            scale: [1, 1.3, 0.9, 1.1, 1],
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
          key={i}
          className="absolute font-display select-none"
          style={{
            left: p.left,
            top: p.top,
            fontSize: `${p.size}px`,
            color: p.isSpecial
              ? `hsl(var(--ibloov-orange) / 0.18)`
              : `hsl(var(--muted-foreground) / 0.15)`,
            textShadow: p.isSpecial
              ? `0 0 20px hsl(var(--ibloov-orange) / 0.1)`
              : undefined,
          }}
          animate={{
            y: [0, -40, 20, -25, 0],
            x: [0, 15, -15, 8, 0],
            rotate: [0, 10, -10, 5, 0],
            opacity: [0, 0.25, 0.15, 0.25, 0],
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
    </div>
  );
};

export default FloatingMath;
