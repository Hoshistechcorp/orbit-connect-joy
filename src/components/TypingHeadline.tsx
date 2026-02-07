import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypingHeadline = () => {
  const text = "Solve for x. (Where x = Love).";
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, 65);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight min-h-[1.4em]">
      {displayed}
      <motion.span
        className="inline-block w-[3px] h-[1em] bg-foreground ml-0.5 align-middle"
        animate={{ opacity: done ? [1, 0] : 1 }}
        transition={done ? { duration: 0.6, repeat: Infinity, repeatType: "reverse" } : {}}
      />
    </h1>
  );
};

export default TypingHeadline;
