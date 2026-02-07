import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, Check } from "lucide-react";

const EmailSearchBar = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

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

    // Store in localStorage for now (can be replaced with backend)
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
            exit={{ opacity: 0, y: -10 }}
            className="relative flex items-center rounded-full border border-border bg-card shadow-lg hover:shadow-xl transition-shadow"
          >
            <Search className="absolute left-4 w-5 h-5 text-muted-foreground" />
            <input
              type="email"
              placeholder="Enter your email to solve for X"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(""); }}
              className="flex-1 bg-transparent py-4 pl-12 pr-16 text-base text-foreground placeholder:text-muted-foreground outline-none rounded-full"
              maxLength={255}
            />
            <button
              type="submit"
              className="absolute right-2 w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:opacity-90 transition-opacity"
              aria-label="Submit email"
            >
              <ArrowRight className="w-5 h-5 text-primary-foreground" />
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center gap-3 py-4 px-6 rounded-full border border-border bg-card shadow-lg"
          >
            <div className="w-8 h-8 rounded-full bg-ibloov-orange flex items-center justify-center">
              <Check className="w-4 h-4 text-accent-foreground" />
            </div>
            <span className="text-foreground font-medium">
              You're in the Orbit. We'll find x together.
            </span>
          </motion.div>
        )}
      </AnimatePresence>
      {error && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-destructive text-sm mt-2 text-center"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default EmailSearchBar;
