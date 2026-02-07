import { motion } from "framer-motion";
import { useMemo } from "react";

const symbols = ["x", "∞", "∫", "∑", "π", "Δ", "√", "≈", "∂", "λ", "♥", "✧", "⊕", "∇", "α", "β", "θ", "ε"];

const FloatingMath = () => {
  const particles = useMemo(() => {
    return symbols.map((symbol, i) => ({
      symbol,
      left: `${(i * 5.7 + 2) % 95}%`,
      top: `${(i * 11.3 + 5) % 85}%`,
      size: 22 + (i % 6) * 18,
      duration: 6 + (i % 7) * 2.5,
      delay: i * 0.3,
      colorVar: i % 3 === 0 ? "--ibloov-blue" : i % 3 === 1 ? "--ibloov-orange" : "--ibloov-mid-gray",
      opacity: 0.12 + (i % 4) * 0.05,
    }));
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      {/* Floating symbols */}
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute font-mono select-none"
          style={{
            left: p.left,
            top: p.top,
            fontSize: `${p.size}px`,
            color: `hsl(var(${p.colorVar}) / ${p.opacity})`,
          }}
          animate={{
            y: [0, -80, 30, -50, 0],
            x: [0, 25, -20, 30, 0],
            rotate: [0, 20, -15, 25, 0],
            scale: [0.6, 1.2, 0.8, 1.1, 0.6],
            opacity: [0, p.opacity * 3, p.opacity * 2, p.opacity * 3, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {p.symbol}
        </motion.span>
      ))}

      {/* Large glowing orbs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${10 + i * 16}%`,
            top: `${15 + (i * 19) % 65}%`,
            width: `${80 + i * 30}px`,
            height: `${80 + i * 30}px`,
            background: i % 2 === 0
              ? `radial-gradient(circle, hsl(var(--ibloov-blue) / 0.1) 0%, transparent 70%)`
              : `radial-gradient(circle, hsl(var(--ibloov-orange) / 0.1) 0%, transparent 70%)`,
            filter: "blur(25px)",
          }}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.2,
          }}
        />
      ))}

      {/* Tiny sparkle particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`spark-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${(i * 8.3 + 3) % 97}%`,
            top: `${(i * 7.7 + 10) % 90}%`,
            width: "3px",
            height: "3px",
            background: i % 2 === 0
              ? "hsl(var(--ibloov-blue))"
              : "hsl(var(--ibloov-orange))",
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 2 + (i % 3),
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingMath;
