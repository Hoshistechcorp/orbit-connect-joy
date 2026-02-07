import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingMath from "@/components/FloatingMath";
import TypingHeadline from "@/components/TypingHeadline";
import EmailSearchBar from "@/components/EmailSearchBar";
import ibloovLogo from "@/assets/ibloov-logo.jpeg";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <Navbar />
      <FloatingMath />

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-14 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center max-w-2xl w-full gap-6"
        >
          {/* Logo */}
          <motion.img
            src={ibloovLogo}
            alt="iBloov"
            className="h-20 sm:h-28 w-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />

          {/* Typing headline */}
          <TypingHeadline />

          {/* Equation */}
          <motion.div
            className="space-y-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
            <p className="font-mono text-base text-muted-foreground">
              f(x) where x = <span className="text-ibloov-blue font-semibold">Love</span>
            </p>
            <p className="font-mono text-sm text-muted-foreground">
              As t → ∞, x → ∞
            </p>
          </motion.div>

          {/* Email search bar */}
          <motion.div
            className="w-full mt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2, duration: 0.6 }}
          >
            <EmailSearchBar />
          </motion.div>

          {/* CTA button */}
          <motion.button
            className="mt-2 px-8 py-2.5 border border-border rounded-full text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.8, duration: 0.5 }}
            onClick={() => {
              document.querySelector<HTMLInputElement>('input[type="email"]')?.focus();
            }}
          >
            Enter the Orbit
          </motion.button>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
