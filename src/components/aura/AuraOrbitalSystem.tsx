import { motion } from "framer-motion";
import ibloovLogoAura from "@/assets/ibloov-logo-aura.png";
import { Target, Users, Star, Award } from "lucide-react";

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

const floatingParticles = [
  { color: "#60a5fa", top: "20%", left: "15%", delay: "0s", duration: "3s" },
  { color: "#a855f7", top: "28%", left: "24%", delay: "0.5s", duration: "4s" },
  { color: "#fbbf24", top: "36%", left: "33%", delay: "1s", duration: "5s" },
  { color: "#34d399", top: "44%", left: "70%", delay: "1.5s", duration: "3.5s" },
  { color: "#60a5fa", top: "55%", left: "78%", delay: "2s", duration: "4.5s" },
  { color: "#a855f7", top: "65%", left: "20%", delay: "2.5s", duration: "3s" },
  { color: "#fbbf24", top: "75%", left: "65%", delay: "0.8s", duration: "4s" },
  { color: "#34d399", top: "85%", left: "40%", delay: "1.2s", duration: "5s" },
];

const AuraOrbitalSystem = () => {
  return (
    <section
      id="aura"
      className="py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, rgb(15, 23, 42) 0%, rgb(30, 41, 59) 50%, rgb(51, 65, 85) 100%)" }}
    >
      {/* Orbital rings visualization */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[800px] lg:h-[800px]">
          {/* Center logo */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
            <img src={ibloovLogoAura} alt="iBloov Logo" className="h-12 w-auto sm:h-16 lg:h-20 filter drop-shadow-2xl" />
          </div>

          {/* Ring 1 - Blue (outermost) - spins clockwise 20s */}
          <div
            className="absolute inset-0 border-2 border-blue-400/40 rounded-full shadow-2xl shadow-blue-500/30"
            style={{ animation: "spin-slow 20s linear infinite" }}
          >
            <div className="absolute inset-0 border border-blue-300/20 rounded-full animate-pulse" />
            <div className="absolute inset-0 border border-blue-500/30 rounded-full" style={{ animation: "ping 3s infinite" }} />
            {/* Blue node - top */}
            <div
              className="absolute -top-6 sm:-top-8 lg:-top-12 left-1/2 transform -translate-x-1/2"
              style={{ animation: "reverse-spin 20s linear infinite" }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/60 border-2 sm:border-[3px] lg:border-4 border-white/30 hover:scale-125 transition-all duration-500 relative">
                <Target className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white animate-pulse" />
                <div className="absolute inset-0 rounded-full bg-blue-400/30" style={{ animation: "ping 2s infinite" }} />
                <div className="absolute -inset-4 border-2 border-blue-300/50 rounded-full" style={{ animation: "spin-slow 4s linear infinite" }} />
              </div>
            </div>
          </div>

          {/* Ring 2 - Purple - spins counter-clockwise 15s */}
          <div
            className="absolute inset-8 border-2 border-purple-400/40 rounded-full shadow-2xl shadow-purple-500/30"
            style={{ animation: "reverse-spin 15s linear infinite" }}
          >
            <div className="absolute inset-0 border border-purple-300/20 rounded-full animate-pulse" />
            <div className="absolute inset-0 border border-purple-500/30 rounded-full" style={{ animation: "ping 2.5s infinite" }} />
            {/* Purple node - right */}
            <div
              className="absolute top-1/2 -right-6 sm:-right-8 lg:-right-12 transform -translate-y-1/2"
              style={{ animation: "spin-slow 15s linear infinite" }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-700 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/60 border-2 sm:border-[3px] lg:border-4 border-white/30 hover:scale-125 transition-all duration-500 relative">
                <Users className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white animate-pulse" />
                <div className="absolute inset-0 rounded-full bg-purple-400/30" style={{ animation: "ping 2.5s infinite" }} />
                <div className="absolute -inset-4 border-2 border-purple-300/50 rounded-full" style={{ animation: "reverse-spin 3s linear infinite" }} />
              </div>
            </div>
          </div>

          {/* Ring 3 - Yellow - spins clockwise 12s */}
          <div
            className="absolute inset-16 border-2 border-yellow-400/40 rounded-full shadow-2xl shadow-yellow-500/30"
            style={{ animation: "spin-slow 12s linear infinite" }}
          >
            <div className="absolute inset-0 border border-yellow-300/20 rounded-full animate-pulse" />
            <div className="absolute inset-0 border border-yellow-500/30 rounded-full" style={{ animation: "ping 2s infinite" }} />
            {/* Yellow node - bottom */}
            <div
              className="absolute -bottom-6 sm:-bottom-8 lg:-bottom-12 left-1/2 transform -translate-x-1/2"
              style={{ animation: "reverse-spin 12s linear infinite" }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl shadow-yellow-500/60 border-2 sm:border-[3px] lg:border-4 border-white/30 hover:scale-125 transition-all duration-500 relative">
                <Star className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white animate-pulse" />
                <div className="absolute inset-0 rounded-full bg-yellow-400/30" style={{ animation: "ping 2s infinite" }} />
                <div className="absolute -inset-4 border-2 border-yellow-300/50 rounded-full" style={{ animation: "spin-slow 2.5s linear infinite" }} />
              </div>
            </div>
          </div>

          {/* Ring 4 - Green (innermost) - spins counter-clockwise 8s */}
          <div
            className="absolute inset-24 border-2 border-green-400/40 rounded-full shadow-2xl shadow-green-500/30"
            style={{ animation: "reverse-spin 8s linear infinite" }}
          >
            <div className="absolute inset-0 border border-green-300/20 rounded-full animate-pulse" />
            <div className="absolute inset-0 border border-green-500/30 rounded-full" style={{ animation: "ping 1.5s infinite" }} />
            {/* Green node - left */}
            <div
              className="absolute top-1/2 -left-6 sm:-left-8 lg:-left-12 transform -translate-y-1/2"
              style={{ animation: "spin-slow 8s linear infinite" }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-green-400 via-green-500 to-green-700 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/60 border-2 sm:border-[3px] lg:border-4 border-white/30 hover:scale-125 transition-all duration-500 relative">
                <Award className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white animate-pulse" />
                <div className="absolute inset-0 rounded-full bg-green-400/30" style={{ animation: "ping 1.5s infinite" }} />
                <div className="absolute -inset-4 border-2 border-green-300/50 rounded-full" style={{ animation: "reverse-spin 2s linear infinite" }} />
              </div>
            </div>
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            {floatingParticles.map((p, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 rounded-full opacity-60"
                style={{
                  background: p.color,
                  top: p.top,
                  left: p.left,
                  animationDelay: p.delay,
                  filter: "blur(0.5px)",
                  boxShadow: `0 0 20px ${p.color}80`,
                  animationName: "float-particle",
                  animationDuration: p.duration,
                  animationTimingFunction: "ease-in-out",
                  animationIterationCount: "infinite",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
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

        {/* Cards in flow layout - staggered left/right */}
        <div className="relative z-20 space-y-6 sm:space-y-8 lg:space-y-12">
          {orbits.map((orbit, i) => (
            <motion.div
              key={orbit.name}
              className={`flex justify-start sm:${orbit.slideFrom === "right" ? "justify-end" : "justify-start"}`}
              initial={{ opacity: 0, x: orbit.slideFrom === "left" ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="w-full sm:w-[55%] lg:w-[45%] rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-4 sm:p-5 sm:p-6">
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
    </section>
  );
};

export default AuraOrbitalSystem;
