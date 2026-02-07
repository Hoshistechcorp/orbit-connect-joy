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
    <div className="space-y-4">
      <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-foreground tracking-tight min-h-[1.4em]">
        {displayed.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 30, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.15, type: "spring", bounce: 0.4 }}
            className={char === "x" ? "text-ibloov-orange" : ""}
            style={
              char === "x"
                ? { textShadow: "0 0 40px hsl(var(--ibloov-orange) / 0.6), 0 0 80px hsl(var(--ibloov-orange) / 0.2)" }
                : {}
            }
          >
            {char}
          </motion.span>
        ))}
        <motion.span
          className="inline-block w-[3px] h-[0.8em] bg-ibloov-blue ml-1 align-middle rounded-full"
          animate={{ opacity: done ? [1, 0] : 1 }}
          transition={done ? { duration: 0.5, repeat: Infinity, repeatType: "reverse" } : {}}
          style={{ boxShadow: "0 0 10px hsl(var(--ibloov-blue) / 0.5)" }}
        />
      </h1>

      <AnimatePresence>
        {showSubtext && (
          <motion.p
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="font-display text-xl sm:text-2xl text-muted-foreground"
          >
            Where{" "}
            <motion.span
              className="text-ibloov-blue font-bold"
              animate={{
                scale: [1, 1.15, 1],
                textShadow: [
                  "0 0 0px hsl(var(--ibloov-blue) / 0)",
                  "0 0 20px hsl(var(--ibloov-blue) / 0.5)",
                  "0 0 0px hsl(var(--ibloov-blue) / 0)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              x
            </motion.span>
            {" "}={" "}
            <motion.span
              className="text-ibloov-orange font-bold"
              animate={{
                scale: [1, 1.15, 1],
                textShadow: [
                  "0 0 0px hsl(var(--ibloov-orange) / 0)",
                  "0 0 20px hsl(var(--ibloov-orange) / 0.5)",
                  "0 0 0px hsl(var(--ibloov-orange) / 0)",
                ],
              }}
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
