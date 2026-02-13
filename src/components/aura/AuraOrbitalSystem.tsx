import { motion } from "framer-motion";
import ibloovLogoAura from "@/assets/ibloov-logo-aura.png";

const orbits = [
  {
    letter: "A",
    name: "ASPIRE",
    subtitle: "Investment Orbit",
    description: "Building wealth through orbital investments",
    color: "ibloov-blue",
    iconBg: "bg-ibloov-blue",
    items: ["iBloov Timeshare: Co-own luxury properties", "DreamPort: Fractional jets/yachts", "LeapFranchise: Tourism franchises", "Bank of Leisure: SHPR financing"],
    position: "top-left",
  },
  {
    letter: "U",
    name: "UNITE",
    subtitle: "Connection Orbit",
    description: "Collaborative digital nomad universe",
    color: "ibloov-orange",
    iconBg: "bg-ibloov-orange",
    items: ["Sport Buddy: Find players anywhere", "TribeMint: Monetize influence", "NomadVerse: Gig work while traveling", "iBloov Hub: Connect with pros"],
    position: "right",
  },
  {
    letter: "R",
    name: "REVEL",
    subtitle: "Experience Orbit",
    description: "Adventure and memory creation",
    color: "ibloov-orange",
    iconBg: "bg-ibloov-orange",
    items: ["Adventure Craft: Epic experiences", "Memory Vault: Digital collections", "Experience Economy: Trading memories", "Story Mode: Share adventures"],
    position: "bottom-left",
  },
  {
    letter: "A",
    name: "ACHIEVE",
    subtitle: "Growth Orbit",
    description: "Wellness and learning universe",
    color: "green-500",
    iconBg: "bg-green-500",
    items: ["Wellness Club: Mental/physical health", "Learning Hub: Tourism certifications", "Fusion Gifts: Experience presents", "Loyalty Rewards: Cross-platform perks"],
    position: "bottom-right",
  },
];

const AuraOrbitalSystem = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(220 20% 15%) 0%, hsl(220 25% 10%) 100%)" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            The AURA <span className="text-ibloov-orange">Orbital System</span>
          </h2>
          <p className="mt-4 text-white/50 max-w-2xl mx-auto">
            Four synchronized orbits creating infinite possibilities. Each pillar represents a gravitational force in your digital universe.
          </p>
        </motion.div>

        {/* Orbital visualization */}
        <div className="relative min-h-[800px] flex items-center justify-center">
          {/* Orbital rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] rounded-full border border-white/5"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] rounded-full border border-white/8"
              animate={{ rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] rounded-full border border-white/10"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            {/* Vertical line */}
            <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          </div>

          {/* Floating colored dots on orbits */}
          {[
            { color: "bg-ibloov-blue", top: "18%", left: "55%", size: "w-8 h-8" },
            { color: "bg-ibloov-orange", top: "35%", left: "62%", size: "w-7 h-7" },
            { color: "bg-green-400", top: "55%", left: "38%", size: "w-7 h-7" },
            { color: "bg-purple-400", top: "72%", left: "52%", size: "w-6 h-6" },
          ].map((dot, i) => (
            <motion.div
              key={i}
              className={`absolute ${dot.color} ${dot.size} rounded-full opacity-80 shadow-lg`}
              style={{ top: dot.top, left: dot.left }}
              animate={{ y: [0, -10, 0], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, delay: i * 0.5, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}

          {/* Small sparkle dots */}
          {[
            { top: "25%", left: "48%", delay: 0 },
            { top: "42%", left: "52%", delay: 0.8 },
            { top: "60%", left: "46%", delay: 1.6 },
            { top: "78%", left: "54%", delay: 2.4 },
          ].map((spark, i) => (
            <motion.div
              key={`spark-${i}`}
              className="absolute w-1.5 h-1.5 rounded-full bg-white/40"
              style={{ top: spark.top, left: spark.left }}
              animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
              transition={{ duration: 2, delay: spark.delay, repeat: Infinity }}
            />
          ))}

          {/* ASPIRE - top left */}
          <motion.div
            className="absolute top-0 left-0 sm:left-[5%] w-[90%] sm:w-[45%] rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-ibloov-blue/20 flex items-center justify-center text-white font-display font-bold text-sm">A</div>
              <div>
                <h3 className="font-display font-bold text-white text-base">ASPIRE</h3>
                <p className="text-ibloov-orange text-xs font-semibold">Investment Orbit</p>
              </div>
            </div>
            <p className="text-white/40 text-xs mb-3">Building wealth through orbital investments</p>
            <ul className="space-y-1.5">
              {orbits[0].items.map((item) => (
                <li key={item} className="text-white/50 text-xs flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-ibloov-blue/60" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* UNITE - right */}
          <motion.div
            className="absolute top-[25%] right-0 sm:right-[2%] w-[90%] sm:w-[40%] rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-ibloov-orange/20 flex items-center justify-center text-white font-display font-bold text-sm">U</div>
              <div>
                <h3 className="font-display font-bold text-white text-base">UNITE</h3>
                <p className="text-ibloov-orange text-xs font-semibold">Connection Orbit</p>
              </div>
            </div>
            <p className="text-white/40 text-xs mb-3">Collaborative digital nomad universe</p>
            <ul className="space-y-1.5">
              {orbits[1].items.map((item) => (
                <li key={item} className="text-white/50 text-xs flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-ibloov-orange/60" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* REVEL - bottom left */}
          <motion.div
            className="absolute bottom-[22%] left-0 sm:left-[5%] w-[90%] sm:w-[42%] rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-ibloov-orange/20 flex items-center justify-center text-white font-display font-bold text-sm">R</div>
              <div>
                <h3 className="font-display font-bold text-white text-base">REVEL</h3>
                <p className="text-ibloov-orange text-xs font-semibold">Experience Orbit</p>
              </div>
            </div>
            <p className="text-white/40 text-xs mb-3">Adventure and memory creation</p>
            <ul className="space-y-1.5">
              {orbits[2].items.map((item) => (
                <li key={item} className="text-white/50 text-xs flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-ibloov-orange/60" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ACHIEVE - bottom right */}
          <motion.div
            className="absolute bottom-0 right-0 sm:right-[5%] w-[90%] sm:w-[40%] rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-white font-display font-bold text-sm">A</div>
              <div>
                <h3 className="font-display font-bold text-white text-base">ACHIEVE</h3>
                <p className="text-green-400 text-xs font-semibold">Growth Orbit</p>
              </div>
            </div>
            <p className="text-white/40 text-xs mb-3">Wellness and learning universe</p>
            <ul className="space-y-1.5">
              {orbits[3].items.map((item) => (
                <li key={item} className="text-white/50 text-xs flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-green-500/60" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AuraOrbitalSystem;
