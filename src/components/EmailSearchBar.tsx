import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";

const EmailSearchBar = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const trimmed = email.trim();
    if (!trimmed) {
      setError("Please enter your email");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError("Please enter a valid email");
      return;
    }

    const existing = JSON.parse(localStorage.getItem("ibloov_waitlist") || "[]");
    if (!existing.includes(trimmed)) {
      existing.push(trimmed);
      localStorage.setItem("ibloov_waitlist", JSON.stringify(existing));
    }

    setSubmitted(true);
  };

  return (
    <div className="w-full max-w-xl mx-auto relative">
      {/* Colorful glow behind the form */}
      <div
        className="absolute -inset-3 rounded-full blur-2xl opacity-50 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, hsl(var(--ibloov-blue) / 0.3), hsl(var(--ibloov-orange) / 0.4), hsl(var(--ibloov-blue) / 0.2))",
        }}
      />
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="relative flex items-center rounded-full bg-muted/60 backdrop-blur-xl transition-all duration-300 border border-border/40 hover:bg-muted/80 hover:border-border/60 cursor-text"
            style={{
              boxShadow: focused
                ? "0 0 0 2px hsl(var(--ibloov-orange) / 0.4), 0 8px 40px hsl(var(--foreground) / 0.1), 0 20px 60px hsl(var(--ibloov-orange) / 0.1)"
                : "0 0 0 1px hsl(var(--border) / 0.3), 0 4px 30px hsl(var(--foreground) / 0.04), 0 15px 50px hsl(var(--ibloov-orange) / 0.04)",
            }}
          >
            <input
              type="email"
              placeholder="Enter your email to join the orbit"
              autoComplete="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(""); }}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              className="flex-1 bg-transparent py-4 sm:py-5 pl-6 sm:pl-8 pr-16 text-sm sm:text-base text-foreground placeholder:text-muted-foreground/40 outline-none rounded-full"
              maxLength={255}
            />
            <motion.button
              type="submit"
              className="absolute right-2.5 sm:right-3 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-foreground flex items-center justify-center transition-colors duration-200 hover:bg-ibloov-orange"
              aria-label="Submit email"
              whileHover={{ scale: 1.15, rotate: -10 }}
              whileTap={{ scale: 0.85 }}
              transition={{ type: "spring", stiffness: 500, damping: 15 }}
            >
              <ArrowRight className="w-5 h-5 text-background" />
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="relative flex items-center justify-center gap-3 py-4 px-6 rounded-full bg-card/80 backdrop-blur-xl"
            style={{ boxShadow: "0 4px 30px hsl(var(--foreground) / 0.06)" }}
          >
            <motion.div
              className="w-8 h-8 rounded-full bg-ibloov-orange flex items-center justify-center"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 0.6 }}
            >
              <Check className="w-4 h-4 text-accent-foreground" />
            </motion.div>
            <span className="text-foreground font-semibold">
              Welcome to the Orbit. Check your email 📬
            </span>
            <Sparkles className="w-4 h-4 text-ibloov-orange" />
          </motion.div>
        )}
      </AnimatePresence>
      {error && (
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-destructive text-sm mt-2 text-center"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default EmailSearchBar;
