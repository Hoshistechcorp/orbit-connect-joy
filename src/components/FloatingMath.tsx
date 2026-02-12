import { motion } from "framer-motion";
import { useMemo } from "react";

const words = ["aura", "love", "joy", "x", "∞", "∫", "π", "♥", "✧"];

const FloatingMath = () => {
  const particles = useMemo(() => {
    return words.map((word, i) => ({
      word,
      left: `${(i * 12 + 5) % 90}%`,
      top: `${(i * 14 + 15) % 75}%`,
      size: word.length > 1 ? 20 + (i % 3) * 6 : 28 + (i % 4) * 12,
      duration: 10 + (i % 5) * 3,
      delay: i * 0.8,
    }));
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute font-display select-none"
          style={{
            left: p.left,
            top: p.top,
            fontSize: `${p.size}px`,
            color: `hsl(var(--muted-foreground) / 0.08)`,
          }}
          animate={{
            y: [0, -30, 15, -20, 0],
            x: [0, 10, -10, 5, 0],
            opacity: [0, 0.12, 0.08, 0.12, 0],
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
