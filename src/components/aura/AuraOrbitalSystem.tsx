import { motion } from "framer-motion";
import ibloovLogoAura from "@/assets/ibloov-logo-aura.png";

const orbits = [
  {
    letter: "A",
    name: "ASPIRE",
    subtitle: "Investment Orbit",
    description: "Building wealth through orbital investments",
    dotColor: "bg-ibloov-blue",
    subtitleColor: "text-ibloov-orange",
    bulletColor: "bg-ibloov-blue/60",
    items: ["iBloov Timeshare: Co-own luxury properties", "DreamPort: Fractional jets/yachts", "LeapFranchise: Tourism franchises", "Bank of Leisure: SHPR financing"],
  },
  {
    letter: "U",
    name: "UNITE",
    subtitle: "Connection Orbit",
    description: "Collaborative digital nomad universe",
    dotColor: "bg-ibloov-orange",
    subtitleColor: "text-ibloov-orange",
    bulletColor: "bg-ibloov-orange/60",
    items: ["Sport Buddy: Find players anywhere", "TribeMint: Monetize influence", "NomadVerse: Gig work while traveling", "iBloov Hub: Connect with pros"],
  },
  {
    letter: "R",
    name: "REVEL",
    subtitle: "Experience Orbit",
    description: "Adventure and memory creation",
    dotColor: "bg-ibloov-orange",
    subtitleColor: "text-ibloov-orange",
    bulletColor: "bg-ibloov-orange/60",
    items: ["Adventure Craft: Epic experiences", "Memory Vault: Digital collections", "Experience Economy: Trading memories", "Story Mode: Share adventures"],
  },
  {
    letter: "A",
    name: "ACHIEVE",
    subtitle: "Growth Orbit",
    description: "Wellness and learning universe",
    dotColor: "bg-green-400",
    subtitleColor: "text-green-400",
    bulletColor: "bg-green-400/60",
    items: ["Wellness Club: Mental/physical health", "Learning Hub: Tourism certifications", "Fusion Gifts: Experience presents", "Loyalty Rewards: Cross-platform perks"],
  },
];

// Icon circles positioned on the orbital rings
const orbitIcons = [
  { color: "from-blue-400 to-blue-600", top: "16%", left: "53%", size: 36, delay: 0, icon: "💎" },
  { color: "from-yellow-400 to-orange-500", top: "32%", left: "62%", size: 32, delay: 0.3, icon: "⚡" },
  { color: "from-green-400 to-emerald-500", top: "52%", left: "43%", size: 34, delay: 0.6, icon: "🌿" },
  { color: "from-purple-400 to-pink-500", top: "68%", left: "55%", size: 28, delay: 0.9, icon: "✨" },
];

// Small particles scattered around
const particles = [
  { top: "20%", left: "50%", delay: 0, color: "bg-ibloov-blue" },
  { top: "28%", left: "57%", delay: 0.4, color: "bg-purple-400" },
  { top: "40%", left: "45%", delay: 0.8, color: "bg-ibloov-orange" },
  { top: "48%", left: "53%", delay: 1.2, color: "bg-green-400" },
  { top: "58%", left: "48%", delay: 1.6, color: "bg-ibloov-blue" },
  { top: "65%", left: "56%", delay: 2.0, color: "bg-yellow-400" },
  { top: "75%", left: "50%", delay: 2.4, color: "bg-ibloov-orange" },
  { top: "82%", left: "53%", delay: 2.8, color: "bg-green-400" },
];

const AuraOrbitalSystem = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(220 20% 15%) 0%, hsl(220 25% 10%) 100%)" }}>
      <div className="max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <img src={ibloovLogoAura} alt="iBloov" className="h-12 w-auto" />
        </motion.div>

        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            The AURA <span className="text-ibloov-orange">Orbital System</span>
          </h2>
          <p className="mt-4 text-white/40 max-w-2xl mx-auto text-sm sm:text-base">
            Four synchronized orbits creating infinite possibilities. Each pillar represents a gravitational force in your digital universe.
          </p>
        </motion.div>

        {/* Main orbital visualization container */}
        <div className="relative min-h-[900px] lg:min-h-[850px]">
          
          {/* Central orbital rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Outer ring with glow */}
            <div className="absolute w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] lg:w-[500px] lg:h-[500px] rounded-full border border-white/[0.06]" />
            <div className="absolute w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] lg:w-[500px] lg:h-[500px] rounded-full" style={{ background: "radial-gradient(circle, transparent 48%, hsla(220, 60%, 50%, 0.03) 49%, transparent 51%)" }} />
            
            {/* Middle ring */}
            <div className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[360px] lg:h-[360px] rounded-full border border-white/[0.08]" />
            
            {/* Inner ring */}
            <div className="absolute w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] lg:w-[220px] lg:h-[220px] rounded-full border border-white/[0.1]" />
            
            {/* Vertical gradient line through center */}
            <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-white/[0.08] to-transparent" />
            
            {/* Horizontal subtle line */}
            <div className="absolute h-px w-3/4 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
            
            {/* Center glow */}
            <div className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-ibloov-blue/10 via-purple-500/5 to-transparent blur-2xl" />
          </div>

          {/* Animated icon circles on orbital paths */}
          {orbitIcons.map((icon, i) => (
            <motion.div
              key={i}
              className="absolute z-10 rounded-full flex items-center justify-center shadow-lg"
              style={{
                top: icon.top,
                left: icon.left,
                width: icon.size,
                height: icon.size,
                background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
              }}
              animate={{
                y: [0, -8, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 4, delay: icon.delay, repeat: Infinity, ease: "easeInOut" }}
            >
              <div
                className={`w-full h-full rounded-full bg-gradient-to-br ${icon.color} flex items-center justify-center text-xs shadow-lg`}
                style={{ boxShadow: "0 0 20px rgba(100, 150, 255, 0.2)" }}
              >
                <span className="text-sm">{icon.icon}</span>
              </div>
            </motion.div>
          ))}

          {/* Small floating particles */}
          {particles.map((p, i) => (
            <motion.div
              key={`particle-${i}`}
              className={`absolute w-1.5 h-1.5 rounded-full ${p.color}/40`}
              style={{ top: p.top, left: p.left }}
              animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1, 0.5] }}
              transition={{ duration: 3, delay: p.delay, repeat: Infinity }}
            />
          ))}

          {/* ASPIRE - top left */}
          <motion.div
            className="absolute top-0 left-0 sm:left-[2%] lg:left-[5%] w-[92%] sm:w-[48%] lg:w-[42%] rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-5 sm:p-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-ibloov-blue/20 flex items-center justify-center text-white font-display font-bold text-sm">A</div>
              <div>
                <h3 className="font-display font-bold text-white text-lg leading-tight">ASPIRE</h3>
                <p className="text-ibloov-orange text-xs font-semibold">Investment Orbit</p>
              </div>
            </div>
            <p className="text-white/35 text-xs mb-3">Building wealth through orbital investments</p>
            <ul className="space-y-1.5">
              {orbits[0].items.map((item) => (
                <li key={item} className="text-white/45 text-xs flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-ibloov-blue/60" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* UNITE - right, vertically centered-upper */}
          <motion.div
            className="absolute top-[26%] right-0 sm:right-[2%] lg:right-[2%] w-[92%] sm:w-[45%] lg:w-[38%] rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-5 sm:p-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-ibloov-orange/20 flex items-center justify-center text-white font-display font-bold text-sm">U</div>
              <div>
                <h3 className="font-display font-bold text-white text-lg leading-tight">UNITE</h3>
                <p className="text-ibloov-orange text-xs font-semibold">Connection Orbit</p>
              </div>
            </div>
            <p className="text-white/35 text-xs mb-3">Collaborative digital nomad universe</p>
            <ul className="space-y-1.5">
              {orbits[1].items.map((item) => (
                <li key={item} className="text-white/45 text-xs flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-ibloov-orange/60" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* REVEL - bottom left */}
          <motion.div
            className="absolute bottom-[24%] left-0 sm:left-[2%] lg:left-[5%] w-[92%] sm:w-[46%] lg:w-[40%] rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-5 sm:p-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-ibloov-orange/20 flex items-center justify-center text-white font-display font-bold text-sm">R</div>
              <div>
                <h3 className="font-display font-bold text-white text-lg leading-tight">REVEL</h3>
                <p className="text-ibloov-orange text-xs font-semibold">Experience Orbit</p>
              </div>
            </div>
            <p className="text-white/35 text-xs mb-3">Adventure and memory creation</p>
            <ul className="space-y-1.5">
              {orbits[2].items.map((item) => (
                <li key={item} className="text-white/45 text-xs flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-ibloov-orange/60" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ACHIEVE - bottom right */}
          <motion.div
            className="absolute bottom-0 right-0 sm:right-[3%] lg:right-[5%] w-[92%] sm:w-[44%] lg:w-[38%] rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-5 sm:p-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-green-500/20 flex items-center justify-center text-white font-display font-bold text-sm">A</div>
              <div>
                <h3 className="font-display font-bold text-white text-lg leading-tight">ACHIEVE</h3>
                <p className="text-green-400 text-xs font-semibold">Growth Orbit</p>
              </div>
            </div>
            <p className="text-white/35 text-xs mb-3">Wellness and learning universe</p>
            <ul className="space-y-1.5">
              {orbits[3].items.map((item) => (
                <li key={item} className="text-white/45 text-xs flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-green-400/60" />
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
