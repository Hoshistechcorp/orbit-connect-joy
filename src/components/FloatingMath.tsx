import { motion } from "framer-motion";

const symbols = ["x", "∞", "∫", "∑", "π", "Δ", "√", "≈", "∂", "λ", "♥", "✧", "⊕", "∇"];

const FloatingMath = () => {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      {symbols.map((symbol, i) => {
        const left = 3 + (i * 7.1) % 90;
        const top = 5 + (i * 13) % 80;
        const size = 30 + (i % 5) * 25;
        const duration = 8 + (i % 6) * 3;
        const delay = i * 0.5;

        return (
          <motion.span
            key={i}
            className="absolute font-mono select-none"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              fontSize: `${size}px`,
              color: i % 3 === 0
                ? `hsl(var(--ibloov-blue) / 0.2)`
                : i % 3 === 1
                ? `hsl(var(--ibloov-orange) / 0.2)`
                : `hsl(var(--ibloov-mid-gray) / 0.18)`,
              textShadow: i % 2 === 0
                ? `0 0 20px hsl(var(--ibloov-blue) / 0.15)`
                : `0 0 20px hsl(var(--ibloov-orange) / 0.15)`,
            }}
            initial={{ opacity: 0, y: 40, scale: 0.5 }}
            animate={{
              opacity: [0, 0.4, 0.2, 0.4, 0],
              y: [40, -60, 20, -40, 40],
              x: [0, 15, -10, 20, 0],
              rotate: [0, 15, -10, 20, 0],
              scale: [0.5, 1.1, 0.9, 1.05, 0.5],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {symbol}
          </motion.span>
        );
      })}

      {/* Glowing orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${15 + i * 18}%`,
            top: `${20 + (i * 23) % 60}%`,
            width: `${60 + i * 20}px`,
            height: `${60 + i * 20}px`,
            background: i % 2 === 0
              ? `radial-gradient(circle, hsl(var(--ibloov-blue) / 0.08) 0%, transparent 70%)`
              : `radial-gradient(circle, hsl(var(--ibloov-orange) / 0.08) 0%, transparent 70%)`,
            filter: 'blur(20px)',
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingMath;
