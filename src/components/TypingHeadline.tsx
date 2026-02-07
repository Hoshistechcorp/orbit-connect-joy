import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TypingHeadline = () => {
  const text = "Solve for x.";
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const [showSubtext, setShowSubtext] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
        setTimeout(() => setShowSubtext(true), 400);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-3">
      <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight min-h-[1.4em]">
        {displayed.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}
            className={char === "x" ? "text-ibloov-orange" : ""}
            style={char === "x" ? { textShadow: "0 0 30px hsl(var(--ibloov-orange) / 0.5)" } : {}}
          >
            {char}
          </motion.span>
        ))}
        <motion.span
          className="inline-block w-[3px] h-[1em] bg-ibloov-blue ml-0.5 align-middle"
          animate={{ opacity: done ? [1, 0] : 1 }}
          transition={done ? { duration: 0.5, repeat: Infinity, repeatType: "reverse" } : {}}
        />
      </h1>

      <AnimatePresence>
        {showSubtext && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-lg sm:text-xl text-muted-foreground"
          >
            Where{" "}
            <motion.span
              className="text-ibloov-blue font-semibold"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              x
            </motion.span>
            {" "}={" "}
            <motion.span
              className="text-ibloov-orange font-semibold"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              Love
            </motion.span>
            {" "}💛
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TypingHeadline;
