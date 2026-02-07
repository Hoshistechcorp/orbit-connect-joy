import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, Check, Sparkles } from "lucide-react";

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
    <div className="w-full max-w-xl mx-auto">
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="relative flex items-center rounded-full border bg-card shadow-lg transition-all duration-300"
            style={{
              borderColor: focused
                ? "hsl(var(--ibloov-blue))"
                : "hsl(var(--border))",
              boxShadow: focused
                ? "0 0 30px hsl(var(--ibloov-blue) / 0.15), 0 10px 40px hsl(var(--ibloov-blue) / 0.08)"
                : "0 4px 20px hsl(var(--foreground) / 0.05)",
            }}
          >
            <Search className="absolute left-4 w-5 h-5 text-muted-foreground" />
            <input
              type="email"
              placeholder="your@email.com — join the orbit 🛸"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(""); }}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              className="flex-1 bg-transparent py-4 pl-12 pr-16 text-base text-foreground placeholder:text-muted-foreground outline-none rounded-full"
              maxLength={255}
            />
            <motion.button
              type="submit"
              className="absolute right-2 w-10 h-10 rounded-full bg-primary flex items-center justify-center"
              aria-label="Submit email"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowRight className="w-5 h-5 text-primary-foreground" />
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="flex items-center justify-center gap-3 py-4 px-6 rounded-full border border-border bg-card shadow-lg"
          >
            <motion.div
              className="w-8 h-8 rounded-full bg-ibloov-orange flex items-center justify-center"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 0.6 }}
            >
              <Check className="w-4 h-4 text-accent-foreground" />
            </motion.div>
            <span className="text-foreground font-semibold">
              You're in the Orbit! 🎉 We'll find x together.
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
