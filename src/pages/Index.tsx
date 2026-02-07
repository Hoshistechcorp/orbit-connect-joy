import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingMath from "@/components/FloatingMath";
import TypingHeadline from "@/components/TypingHeadline";
import EmailSearchBar from "@/components/EmailSearchBar";
import MissionSection from "@/components/MissionSection";
import ibloovLogo from "@/assets/ibloov-logo.jpeg";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <Navbar />
      <FloatingMath />

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-20 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-2xl w-full gap-8"
        >
          {/* Logo with bounce */}
          <motion.img
            src={ibloovLogo}
            alt="iBloov"
            className="h-20 sm:h-28 w-auto rounded-2xl shadow-lg"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.1, type: "spring", bounce: 0.4 }}
            whileHover={{ scale: 1.08, rotate: 3 }}
          />

          {/* Typing headline */}
          <TypingHeadline />

          {/* Equation with glow */}
          <motion.div
            className="space-y-2 px-6 py-4 rounded-xl border border-border bg-card/50 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.8, type: "spring" }}
            whileHover={{ scale: 1.03 }}
            style={{ boxShadow: "0 0 40px hsl(var(--ibloov-blue) / 0.08)" }}
          >
            <p className="font-mono text-base text-muted-foreground">
              f(<span className="text-ibloov-orange font-semibold">x</span>) = shared joy × human connection
            </p>
            <p className="font-mono text-sm text-muted-foreground">
              As <span className="text-ibloov-blue">t → ∞</span>, love → <span className="text-ibloov-orange">∞</span> 🚀
            </p>
          </motion.div>

          {/* Fun tagline */}
          <motion.p
            className="text-muted-foreground text-sm max-w-md leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8, duration: 0.6 }}
          >
            We're the most connected generation, yet the loneliest.
            <br />
            <span className="font-semibold text-foreground">Time to fix the equation.</span> ✨
          </motion.p>

          {/* Email search bar */}
          <motion.div
            className="w-full mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2, duration: 0.6, type: "spring" }}
          >
            <EmailSearchBar />
          </motion.div>

          {/* CTA button */}
          <motion.button
            className="mt-1 px-10 py-3 rounded-full text-sm font-bold bg-primary text-primary-foreground shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 3.8, duration: 0.5, type: "spring", bounce: 0.5 }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 30px hsl(var(--ibloov-blue) / 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.querySelector<HTMLInputElement>('input[type="email"]')?.focus();
            }}
          >
            🛸 Enter the Orbit
          </motion.button>
        </motion.div>

        {/* Mission section */}
        <MissionSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
