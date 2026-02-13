import { motion } from "framer-motion";
import ibloovLogoAura from "@/assets/ibloov-logo-aura.png";

const orbits = [
  {
    letter: "A",
    name: "ASPIRE",
    subtitle: "Investment Orbit",
    description: "Building wealth through orbital investments",
    subtitleColor: "text-ibloov-orange",
    badgeBg: "bg-ibloov-blue/20",
    bulletColor: "bg-ibloov-blue/60",
    items: ["iBloov Timeshare: Co-own luxury properties", "DreamPort: Fractional jets/yachts", "LeapFranchise: Tourism franchises", "Bank of Leisure: SHPR financing"],
    slideFrom: "left" as const,
  },
  {
    letter: "U",
    name: "UNITE",
    subtitle: "Connection Orbit",
    description: "Collaborative digital nomad universe",
    subtitleColor: "text-ibloov-orange",
    badgeBg: "bg-ibloov-orange/20",
    bulletColor: "bg-ibloov-orange/60",
    items: ["Sport Buddy: Find players anywhere", "TribeMint: Monetize influence", "NomadVerse: Gig work while traveling", "iBloov Hub: Connect with pros"],
    slideFrom: "right" as const,
  },
  {
    letter: "R",
    name: "REVEL",
    subtitle: "Experience Orbit",
    description: "Adventure and memory creation",
    subtitleColor: "text-ibloov-orange",
    badgeBg: "bg-ibloov-orange/20",
    bulletColor: "bg-ibloov-orange/60",
    items: ["Adventure Craft: Epic experiences", "Memory Vault: Digital collections", "Experience Economy: Trading memories", "Story Mode: Share adventures"],
    slideFrom: "left" as const,
  },
  {
    letter: "A",
    name: "ACHIEVE",
    subtitle: "Growth Orbit",
    description: "Wellness and learning universe",
    subtitleColor: "text-green-400",
    badgeBg: "bg-green-500/20",
    bulletColor: "bg-green-400/60",
    items: ["Wellness Club: Mental/physical health", "Learning Hub: Tourism certifications", "Fusion Gifts: Experience presents", "Loyalty Rewards: Cross-platform perks"],
    slideFrom: "right" as const,
  },
];

const orbitIcons = [
  { color: "from-blue-400 to-blue-600", top: "12%", left: "55%", size: 36, delay: 0, icon: "💎" },
  { color: "from-yellow-400 to-orange-500", top: "30%", left: "63%", size: 32, delay: 0.3, icon: "⚡" },
  { color: "from-green-400 to-emerald-500", top: "55%", left: "40%", size: 34, delay: 0.6, icon: "🌿" },
  { color: "from-purple-400 to-pink-500", top: "72%", left: "56%", size: 28, delay: 0.9, icon: "✨" },
];

const particles = [
  { top: "15%", left: "50%", delay: 0 },
  { top: "25%", left: "58%", delay: 0.4 },
  { top: "38%", left: "44%", delay: 0.8 },
  { top: "50%", left: "54%", delay: 1.2 },
  { top: "62%", left: "47%", delay: 1.6 },
  { top: "75%", left: "55%", delay: 2.0 },
  { top: "85%", left: "49%", delay: 2.4 },
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

        {/* Orbital visualization - flow layout with background decorations */}
        <div className="relative">
          {/* Background orbital rings - decorative only */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] lg:w-[500px] lg:h-[500px] rounded-full border border-white/[0.06]" />
            <div className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[360px] lg:h-[360px] rounded-full border border-white/[0.08]" />
            <div className="absolute w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] lg:w-[220px] lg:h-[220px] rounded-full border border-white/[0.1]" />
            <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-white/[0.08] to-transparent" />
            <div className="absolute h-px w-3/4 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
            <div className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-ibloov-blue/10 via-purple-500/5 to-transparent blur-2xl" />
          </div>

          {/* Animated icon circles */}
          {orbitIcons.map((icon, i) => (
            <motion.div
              key={i}
              className="absolute z-10 rounded-full shadow-lg hidden sm:flex items-center justify-center"
              style={{ top: icon.top, left: icon.left, width: icon.size, height: icon.size }}
              animate={{ y: [0, -8, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, delay: icon.delay, repeat: Infinity, ease: "easeInOut" }}
            >
              <div
                className={`w-full h-full rounded-full bg-gradient-to-br ${icon.color} flex items-center justify-center shadow-lg`}
                style={{ boxShadow: "0 0 20px rgba(100, 150, 255, 0.2)" }}
              >
                <span className="text-sm">{icon.icon}</span>
              </div>
            </motion.div>
          ))}

          {/* Small particles */}
          {particles.map((p, i) => (
            <motion.div
              key={`p-${i}`}
              className="absolute w-1.5 h-1.5 rounded-full bg-white/30 hidden sm:block"
              style={{ top: p.top, left: p.left }}
              animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1, 0.5] }}
              transition={{ duration: 3, delay: p.delay, repeat: Infinity }}
            />
          ))}

          {/* Cards in flow layout - staggered left/right */}
          <div className="relative z-20 space-y-8 lg:space-y-12">
            {orbits.map((orbit, i) => (
              <motion.div
                key={orbit.name}
                className={`flex ${orbit.slideFrom === "right" ? "justify-end" : "justify-start"}`}
                initial={{ opacity: 0, x: orbit.slideFrom === "left" ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="w-full sm:w-[55%] lg:w-[45%] rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-5 sm:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-9 h-9 rounded-lg ${orbit.badgeBg} flex items-center justify-center text-white font-display font-bold text-sm`}>
                      {orbit.letter}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-white text-lg leading-tight">{orbit.name}</h3>
                      <p className={`${orbit.subtitleColor} text-xs font-semibold`}>{orbit.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-white/35 text-xs mb-3">{orbit.description}</p>
                  <ul className="space-y-1.5">
                    {orbit.items.map((item) => (
                      <li key={item} className="text-white/45 text-xs flex items-start gap-2">
                        <span className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${orbit.bulletColor}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuraOrbitalSystem;
