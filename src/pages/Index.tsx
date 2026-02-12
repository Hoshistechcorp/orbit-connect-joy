import { motion } from "framer-motion";
import { Orbit, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingMath from "@/components/FloatingMath";
import MissionSection from "@/components/MissionSection";
import TypingHeadline from "@/components/TypingHeadline";
import EmailSearchBar from "@/components/EmailSearchBar";
import ibloovLogo from "@/assets/ibloov-logo.jpeg";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--ibloov-light-gray)) 40%, hsl(var(--ibloov-orange) / 0.08) 100%)" }}>
      <Navbar />
      <FloatingMath />

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center text-center max-w-2xl w-full"
        >
          {/* Centered Logo */}
          <motion.div
            className="flex flex-col items-center mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <img
              src={ibloovLogo}
              alt="iBloov"
              className="h-16 sm:h-20 w-auto rounded-2xl mb-3"
            />
            <motion.div
              className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-foreground"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              iBl
              <span className="inline-block text-ibloov-orange" style={{ fontFamily: "serif", letterSpacing: "-0.05em" }}>
                ∞
              </span>
              v
            </motion.div>
          </motion.div>

          {/* Typing headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <TypingHeadline />
          </motion.div>

          {/* Equation — minimal */}
          <motion.div
            className="mt-6 space-y-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <p className="font-mono text-base text-muted-foreground">
              <span className="italic">f</span>(<span className="text-ibloov-blue font-semibold">x</span>) where x = <span className="text-ibloov-orange font-bold">Love</span>
            </p>
            <p className="font-mono text-sm text-muted-foreground/70">
              As t → ∞, x → ∞
            </p>
          </motion.div>

          {/* Glowing Email bar */}
          <motion.div
            className="w-full mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.7, type: "spring" }}
          >
            <EmailSearchBar />
          </motion.div>

          {/* Single line tagline */}
          <motion.p
            className="mt-10 text-muted-foreground text-sm sm:text-base max-w-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2, duration: 0.8 }}
          >
            <span className="font-bold text-foreground">The Love Leak is real.</span>{" "}
            We are the most connected generation, yet the most disconnected. iBloov AURA is building the infrastructure for shared joy to save the world from isolation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-10 flex items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.8, duration: 0.7, type: "spring" }}
          >
            <motion.a
              href="https://ibloov.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-display font-semibold text-sm"
              whileHover={{
                scale: 1.06,
                boxShadow: "0 4px 20px hsl(var(--foreground) / 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <Orbit className="w-4 h-4" />
              Enter the Orbit
            </motion.a>
            <motion.a
              href="https://ibloov.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-background font-display font-semibold text-sm text-foreground"
              whileHover={{
                scale: 1.06,
                boxShadow: "0 4px 20px hsl(var(--ibloov-orange) / 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <Heart className="w-4 h-4 text-ibloov-orange" />
              Support the Vision
            </motion.a>
          </motion.div>
        </motion.div>
      </main>

      <MissionSection />

      <Footer />
    </div>
  );
};

export default Index;
