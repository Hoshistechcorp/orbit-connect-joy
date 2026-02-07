import { motion } from "framer-motion";

const symbols = ["x", "∞", "∫", "∑", "π", "Δ", "√", "≈", "∂", "λ"];

const FloatingMath = () => {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      {symbols.map((symbol, i) => {
        const left = 5 + (i * 9.3) % 90;
        const top = 10 + (i * 17) % 70;
        const size = 40 + (i % 4) * 30;
        const duration = 12 + (i % 5) * 4;
        const delay = i * 0.8;

        return (
          <motion.span
            key={i}
            className="absolute font-mono select-none"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              fontSize: `${size}px`,
              color: `hsl(var(--ibloov-mid-gray) / 0.25)`,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0, 0.3, 0.15, 0.3, 0],
              y: [20, -30, 10, -20, 20],
              rotate: [0, 10, -5, 8, 0],
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
    </div>
  );
};

export default FloatingMath;
