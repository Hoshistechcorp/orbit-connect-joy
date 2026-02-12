import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MissionSection from "@/components/MissionSection";

const Mission = () => {
  return (
    <div className="relative min-h-screen" style={{ background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--ibloov-light-gray)) 40%, hsl(var(--ibloov-orange) / 0.08) 100%)" }}>
      <Navbar />

      <main className="relative z-10 pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight mb-6">
              <span className="text-ibloov-blue">The</span>{" "}
              <span className="text-ibloov-orange" style={{ textShadow: "0 0 20px hsl(var(--ibloov-orange) / 0.3)" }}>Mission</span>
            </h1>

            <div className="space-y-6 text-foreground leading-relaxed max-w-2xl">
              <p className="font-mono text-lg text-muted-foreground">
                <span className="italic">f</span>(<span className="text-ibloov-blue font-semibold">x</span>) where x = <span className="text-ibloov-orange font-bold">Love</span>
                <br />
                As t → ∞, x → ∞
              </p>

              <div>
                <h2 className="font-semibold text-xl mb-2">The Reality</h2>
                <blockquote className="border-l-2 border-ibloov-orange pl-4 italic text-muted-foreground">
                  We are the most connected generation, yet the most disconnected and lonely. This is the "Love Leak." It is a mathematical error in the way we live.
                </blockquote>
              </div>

              <div>
                <h2 className="font-semibold text-xl mb-2">The Solution</h2>
                <blockquote className="border-l-2 border-ibloov-blue pl-4 italic text-muted-foreground">
                  iBloov AURA is the Life & Leisure Operating System built to find x. We are building the life and leisure OS for shared joy to save the world from isolation.
                </blockquote>
              </div>

              <p className="font-mono text-center font-semibold text-ibloov-blue pt-4 text-lg">
                Enough thinking. Enter the Orbit.
              </p>
            </div>
          </motion.div>
        </div>

        <MissionSection />
      </main>

      <Footer />
    </div>
  );
};

export default Mission;
