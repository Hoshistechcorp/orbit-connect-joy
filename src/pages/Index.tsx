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
            <motion.div
              className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl tracking-tight select-none cursor-default"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* i */}
              <motion.span
                className="inline-block text-ibloov-blue"
                initial={{ opacity: 0, x: -30, rotateY: 90 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
              >
                i
              </motion.span>
              {/* B */}
              <motion.span
                className="inline-block text-ibloov-blue"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5, type: "spring", bounce: 0.5 }}
              >
                B
              </motion.span>
              {/* L */}
              <motion.span
                className="inline-block text-foreground"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.4, type: "spring", bounce: 0.6 }}
              >
                L
              </motion.span>
              {/* oo - bouncy with glow */}
              <motion.span
                className="inline-block text-ibloov-orange relative"
                initial={{ opacity: 0, scale: 0.3, rotate: -180 }}
                animate={{
                  opacity: 1,
                  scale: [1, 1.1, 1],
                  rotate: 0,
                  y: [0, -5, 0],
                }}
                transition={{
                  opacity: { delay: 0.65, duration: 0.4 },
                  scale: { delay: 1.2, duration: 2, repeat: Infinity, ease: "easeInOut" },
                  rotate: { delay: 0.65, duration: 0.6, type: "spring" },
                  y: { delay: 1.2, duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                }}
                style={{
                  textShadow: "0 0 20px hsl(var(--ibloov-orange) / 0.4), 0 0 40px hsl(var(--ibloov-orange) / 0.2)",
                }}
              >
                oo
              </motion.span>
              {/* v */}
              <motion.span
                className="inline-block text-ibloov-blue"
                initial={{ opacity: 0, x: 30, rotateY: -90 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
              >
                v
              </motion.span>
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

          {/* What iBloov does — bubble text */}
          <motion.div
            className="mt-8 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <div className="inline-flex flex-wrap items-center justify-center gap-1.5 text-sm sm:text-base leading-relaxed">
              <span className="text-muted-foreground font-display">The world's first</span>
              <span className="px-3 py-1 rounded-full bg-ibloov-blue/10 text-ibloov-blue font-display font-bold border border-ibloov-blue/20">Life & Leisure</span>
              <span className="px-3 py-1 rounded-full bg-ibloov-orange/10 text-ibloov-orange font-display font-bold border border-ibloov-orange/20">Operating System</span>
              <span className="text-muted-foreground font-display">that aligns</span>
              <span className="px-2.5 py-0.5 rounded-full bg-ibloov-orange/10 text-ibloov-orange font-semibold text-xs sm:text-sm border border-ibloov-orange/15">earning</span>
              <span className="px-2.5 py-0.5 rounded-full bg-ibloov-blue/10 text-ibloov-blue font-semibold text-xs sm:text-sm border border-ibloov-blue/15">exploring</span>
              <span className="px-2.5 py-0.5 rounded-full bg-ibloov-orange/10 text-ibloov-orange font-semibold text-xs sm:text-sm border border-ibloov-orange/15">playing</span>
              <span className="px-2.5 py-0.5 rounded-full bg-ibloov-blue/10 text-ibloov-blue font-semibold text-xs sm:text-sm border border-ibloov-blue/15">learning</span>
              <span className="px-2.5 py-0.5 rounded-full bg-ibloov-orange/10 text-ibloov-orange font-semibold text-xs sm:text-sm border border-ibloov-orange/15">building wealth</span>
              <span className="text-muted-foreground font-display">into one connected journey powered by</span>
              <span className="px-3 py-1 rounded-full bg-ibloov-blue/15 text-ibloov-blue font-display font-bold border border-ibloov-blue/25">shared experience ✨</span>
            </div>
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
            We are the most connected generation, yet the most disconnected. iBloov Aura is building the life and leisure OS for shared joy to save the world from isolation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.8, duration: 0.7, type: "spring" }}
          >
            <motion.a
              href="https://ibloov.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 w-full sm:w-auto rounded-full bg-foreground text-background font-display font-semibold text-sm"
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
              className="flex items-center justify-center gap-2 px-6 py-3 w-full sm:w-auto rounded-full border border-border bg-background font-display font-semibold text-sm text-foreground"
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
