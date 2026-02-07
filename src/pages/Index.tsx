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

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center text-center max-w-2xl w-full"
        >
          {/* Floating Logo — Google-style centered hero */}
          <motion.div
            className="relative mb-8"
            initial={{ opacity: 0, y: 60, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          >
            {/* Glow ring behind logo */}
            <motion.div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: "radial-gradient(circle, hsl(var(--ibloov-blue) / 0.2) 0%, hsl(var(--ibloov-orange) / 0.15) 50%, transparent 70%)",
                filter: "blur(30px)",
                transform: "scale(2.5)",
              }}
              animate={{
                scale: [2.5, 3, 2.5],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
              src={ibloovLogo}
              alt="iBloov"
              className="relative h-28 sm:h-36 md:h-44 w-auto rounded-3xl shadow-2xl"
              animate={{
                y: [0, -12, 0],
                rotateY: [0, 5, 0, -5, 0],
              }}
              transition={{
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                rotateY: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              style={{ perspective: "800px" }}
            />
          </motion.div>

          {/* Typing headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <TypingHeadline />
          </motion.div>

          {/* Equation card — floating */}
          <motion.div
            className="mt-8 space-y-2 px-8 py-5 rounded-2xl border border-border bg-card/60 backdrop-blur-md"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8, type: "spring", bounce: 0.3 }}
            whileHover={{ scale: 1.05, y: -5 }}
            style={{ boxShadow: "0 0 60px hsl(var(--ibloov-blue) / 0.1), 0 20px 60px hsl(var(--foreground) / 0.05)" }}
          >
            <motion.p
              className="font-mono text-base sm:text-lg text-muted-foreground"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              f(<span className="text-ibloov-orange font-bold">x</span>) = shared joy × human connection
            </motion.p>
            <p className="font-mono text-sm text-muted-foreground">
              As <span className="text-ibloov-blue font-semibold">t → ∞</span>, love → <span className="text-ibloov-orange font-semibold">∞</span> 🚀
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="mt-8 text-muted-foreground text-sm sm:text-base max-w-md leading-relaxed font-display"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.6 }}
          >
            We're the most connected generation, yet the loneliest.
            <br />
            <motion.span
              className="font-bold text-foreground inline-block mt-1"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Time to fix the equation. ✨
            </motion.span>
          </motion.p>

          {/* Email bar — Google-style search */}
          <motion.div
            className="w-full mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 0.7, type: "spring" }}
          >
            <EmailSearchBar />
          </motion.div>

          {/* CTA button — floating with glow */}
          <motion.button
            className="mt-6 px-12 py-3.5 rounded-full text-sm font-bold font-display bg-primary text-primary-foreground shadow-xl relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 3.4, duration: 0.6, type: "spring", bounce: 0.5 }}
            whileHover={{
              scale: 1.1,
              y: -3,
              boxShadow: "0 0 40px hsl(var(--ibloov-blue) / 0.5), 0 15px 40px hsl(var(--ibloov-blue) / 0.2)",
            }}
            whileTap={{ scale: 0.92 }}
            onClick={() => {
              document.querySelector<HTMLInputElement>('input[type="email"]')?.focus();
            }}
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            />
            <span className="relative">🛸 Enter the Orbit</span>
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
