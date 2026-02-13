import { motion } from "framer-motion";
import ibloovLogoAura from "@/assets/ibloov-logo-aura.png";

const orbits = [
  {
    letter: "A",
    name: "ASPIRE",
    subtitle: "Investment Orbit",
    description: "Building wealth through orbital investments",
    color: "ibloov-orange",
    items: ["iBloov Timeshare: Co-own luxury properties", "DreamPort: Fractional jets/yachts", "LeapFranchise: Tourism franchises", "Bank of Leisure: SHPR financing"],
  },
  {
    letter: "U",
    name: "UNITE",
    subtitle: "Connection Orbit",
    description: "Collaborative digital nomad universe",
    color: "ibloov-blue",
    items: ["Sport Buddy: Find players anywhere", "TribeMint: Monetize influence", "NomadVerse: Gig work while traveling", "iBloov Hub: Connect with pros"],
  },
  {
    letter: "R",
    name: "REVEL",
    subtitle: "Experience Orbit",
    description: "Adventure and memory creation",
    color: "ibloov-orange",
    items: ["Adventure Craft: Epic experiences", "Memory Vault: Digital collections", "Experience Economy: Trading memories", "Story Mode: Share adventures"],
  },
  {
    letter: "A",
    name: "ACHIEVE",
    subtitle: "Growth Orbit",
    description: "Wellness and learning universe",
    color: "ibloov-blue",
    items: ["Wellness Club: Mental/physical health", "Learning Hub: Tourism certifications", "Fusion Gifts: Experience presents", "Loyalty Rewards: Cross-platform perks"],
  },
];

const AuraOrbitalSystem = () => {
  return (
    <section className="py-20 px-6" style={{ background: "linear-gradient(180deg, hsl(220 20% 15%) 0%, hsl(220 25% 10%) 100%)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Logo */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <img src={ibloovLogoAura} alt="iBloov" className="h-12 w-auto" />
        </motion.div>

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

        {/* Orbit cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {orbits.map((orbit, i) => (
            <motion.div
              key={orbit.name}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4, borderColor: `hsl(var(--${orbit.color}) / 0.3)` }}
            >
              {/* Letter badge */}
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 font-display font-extrabold text-lg text-white ${orbit.color === "ibloov-orange" ? "bg-ibloov-orange/20" : "bg-ibloov-blue/20"}`}>
                {orbit.letter}
              </div>

              <h3 className="font-display font-bold text-white text-lg">{orbit.name}</h3>
              <p className={`text-xs font-semibold uppercase tracking-wider mt-1 mb-3 ${orbit.color === "ibloov-orange" ? "text-ibloov-orange" : "text-ibloov-blue"}`}>
                {orbit.subtitle}
              </p>
              <p className="text-white/40 text-sm mb-4">{orbit.description}</p>

              <ul className="space-y-2">
                {orbit.items.map((item) => (
                  <li key={item} className="text-white/50 text-xs flex items-start gap-2">
                    <span className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${orbit.color === "ibloov-orange" ? "bg-ibloov-orange/50" : "bg-ibloov-blue/50"}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuraOrbitalSystem;
