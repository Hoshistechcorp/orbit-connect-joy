import { motion } from "framer-motion";
import { Orbit, ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const ComingSoon = () => {
  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--ibloov-light-gray)) 40%, hsl(var(--ibloov-orange) / 0.08) 100%)",
      }}
    >
      <Navbar />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, hsl(var(--ibloov-blue) / 0.4), transparent)" }}
        animate={{ scale: [1, 1.3, 1], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, hsl(var(--ibloov-orange) / 0.4), transparent)" }}
        animate={{ scale: [1, 1.2, 1], x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6">
        <motion.div
          className="flex flex-col items-center text-center max-w-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          {/* Animated orbit icon */}
          <motion.div
            className="mb-8 p-5 rounded-full border-2 border-ibloov-blue/20"
            style={{ background: "hsl(var(--ibloov-blue) / 0.08)" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Orbit className="w-10 h-10 text-ibloov-blue" />
          </motion.div>

          {/* Title */}
          <motion.h1
            className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="text-ibloov-blue">The Orbit</span>{" "}
            <span className="text-foreground">is loading</span>
            <motion.span
              className="inline-block text-ibloov-orange ml-1"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ...
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mt-6 text-muted-foreground text-base sm:text-lg max-w-md leading-relaxed font-display"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Something extraordinary is being built.{" "}
            <span className="text-foreground font-semibold">Your life & leisure OS</span> is almost ready to launch.
          </motion.p>

          {/* Animated pills */}
          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {["Earn", "Explore", "Play", "Learn", "Build Wealth"].map((word, i) => (
              <motion.span
                key={word}
                className={`px-3 py-1 rounded-full text-xs sm:text-sm font-semibold border ${
                  i % 2 === 0
                    ? "bg-ibloov-orange/10 text-ibloov-orange border-ibloov-orange/15"
                    : "bg-ibloov-blue/10 text-ibloov-blue border-ibloov-blue/15"
                }`}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2 + i * 0.3, delay: 1 + i * 0.15, repeat: Infinity, ease: "easeInOut" }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          {/* Sparkle CTA */}
          <motion.div
            className="mt-10 flex items-center gap-2 text-muted-foreground text-sm font-display"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <Sparkles className="w-4 h-4 text-ibloov-orange" />
            <span>Stay tuned. The countdown has begun.</span>
          </motion.div>

          {/* Back button */}
          <motion.div
            className="mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <Link to="/">
              <motion.span
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-foreground font-display font-semibold text-sm hover:bg-muted transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default ComingSoon;
