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
    }, 90);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-3">
      <h1 className="font-display text-6xl sm:text-7xl md:text-8xl font-bold text-foreground tracking-tight min-h-[1.2em]">
        {displayed.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.12, type: "spring", bounce: 0.3 }}
            className={char === "x" ? "text-ibloov-orange" : ""}
          >
            {char}
          </motion.span>
        ))}
        <motion.span
          className="inline-block w-[3px] h-[0.7em] bg-foreground/30 ml-1 align-middle rounded-full"
          animate={{ opacity: done ? [1, 0] : 1 }}
          transition={done ? { duration: 0.5, repeat: Infinity, repeatType: "reverse" } : {}}
        />
      </h1>

      <AnimatePresence>
        {showSubtext && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-xl sm:text-2xl text-muted-foreground/60"
          >
            (Where x = Love 💛)
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TypingHeadline;
