import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Globe, Loader2, ChevronRight, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CONTINENTS = [
  { name: "Africa", emoji: "🌍", products: 24 },
  { name: "Asia", emoji: "🌏", products: 38 },
  { name: "Europe", emoji: "🌍", products: 42 },
  { name: "North America", emoji: "🌎", products: 36 },
  { name: "South America", emoji: "🌎", products: 18 },
  { name: "Oceania", emoji: "🌏", products: 12 },
];

type DetectPhase = "detecting" | "detected" | "change-region";

const Detect = () => {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<DetectPhase>("detecting");
  const [location, setLocation] = useState({ city: "", country: "", continent: "" });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (phase !== "detecting") return;

    const timeout = setTimeout(() => {
      // Fallback if geolocation takes too long
      setLocation({ city: "Your City", country: "Your Country", continent: "North America" });
      setPhase("detected");
    }, 8000);

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          clearTimeout(timeout);
          try {
            const res = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${pos.coords.latitude}&longitude=${pos.coords.longitude}&localityLanguage=en`
            );
            const data = await res.json();
            setLocation({
              city: data.city || data.locality || "Unknown City",
              country: data.countryName || "Unknown Country",
              continent: data.continent || "North America",
            });
          } catch {
            setLocation({ city: "Your City", country: "Your Country", continent: "North America" });
          }
          setPhase("detected");
        },
        () => {
          clearTimeout(timeout);
          setLocation({ city: "Your City", country: "Your Country", continent: "North America" });
          setPhase("detected");
        },
        { timeout: 6000 }
      );
    } else {
      clearTimeout(timeout);
      setLocation({ city: "Your City", country: "Your Country", continent: "North America" });
      setPhase("detected");
    }

    return () => clearTimeout(timeout);
  }, [phase]);

  const handleContinentSelect = (continent: string) => {
    setLocation((prev) => ({ ...prev, continent, city: "", country: continent }));
    setPhase("detected");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Orbital decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-border/30 rounded-full animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-border/20 rounded-full animate-reverse-spin" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-primary/10 rounded-full animate-spin-slow" />
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto px-6">
        <AnimatePresence mode="wait">
          {/* DETECTING */}
          {phase === "detecting" && (
            <motion.div
              key="detecting"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col items-center text-center"
            >
              <motion.div
                className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-8"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <MapPin className="w-10 h-10 text-primary" />
              </motion.div>
              <h1 className="font-display text-2xl font-bold text-foreground mb-3">
                Finding Your Orbit...
              </h1>
              <p className="text-muted-foreground text-sm mb-6">
                Detecting your location to personalize your experience
              </p>
              <Loader2 className="w-6 h-6 text-primary animate-spin" />
            </motion.div>
          )}

          {/* DETECTED */}
          {phase === "detected" && (
            <motion.div
              key="detected"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center text-center"
            >
              <motion.div
                className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", bounce: 0.5 }}
              >
                <MapPin className="w-9 h-9 text-primary" />
              </motion.div>

              <h1 className="font-display text-2xl font-bold text-foreground mb-2">
                Welcome from {location.city || location.continent}
              </h1>
              {location.country && (
                <p className="text-muted-foreground mb-1 text-lg">{location.country}</p>
              )}
              <motion.div
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mt-2 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Globe className="w-3.5 h-3.5" />
                {location.continent}
              </motion.div>

              <motion.button
                onClick={() => navigate("/auth", { state: { location } })}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-foreground text-background font-display font-semibold text-sm mb-4"
                whileHover={{ scale: 1.03, boxShadow: "0 4px 20px hsl(var(--foreground) / 0.3)" }}
                whileTap={{ scale: 0.97 }}
              >
                Continue to Sign Up
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <button
                onClick={() => setPhase("change-region")}
                className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors flex items-center gap-1"
              >
                Change Region
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          )}

          {/* CHANGE REGION */}
          {phase === "change-region" && (
            <motion.div
              key="change-region"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center"
            >
              <h2 className="font-display text-xl font-bold text-foreground mb-2 text-center">
                Select Your Region
              </h2>
              <p className="text-muted-foreground text-sm mb-6 text-center">
                Choose your continent to see available products
              </p>

              <div className="grid grid-cols-2 gap-3 w-full">
                {CONTINENTS.map((c, i) => (
                  <motion.button
                    key={c.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleContinentSelect(c.name)}
                    className="flex flex-col items-center gap-1.5 p-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all group"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="text-2xl">{c.emoji}</span>
                    <span className="font-display font-semibold text-sm text-foreground">{c.name}</span>
                    <span className="text-xs text-muted-foreground">{c.products} products</span>
                  </motion.button>
                ))}
              </div>

              <button
                onClick={() => setPhase("detected")}
                className="mt-6 text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                ← Back
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Detect;
