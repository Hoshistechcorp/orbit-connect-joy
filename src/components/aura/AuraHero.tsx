import { motion } from "framer-motion";

const floatingDots = [
  { color: "bg-ibloov-orange", top: "22%", left: "58%", size: "w-3.5 h-3.5", delay: 0 },
  { color: "bg-ibloov-blue", top: "35%", left: "33%", size: "w-3 h-3", delay: 0.5 },
  { color: "bg-green-400", top: "73%", left: "40%", size: "w-2.5 h-2.5", delay: 1 },
  { color: "bg-purple-400", top: "62%", left: "64%", size: "w-3 h-3", delay: 1.5 },
];

const AuraHero = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(180deg, hsl(220 20% 18%) 0%, hsl(220 22% 16%) 40%, hsl(220 25% 14%) 70%, hsl(220 25% 12%) 100%)" }}
    >
      {/* Orbital rings - static, centered, with subtle opacity */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Outer ring */}
        <div className="w-[520px] h-[520px] sm:w-[720px] sm:h-[720px] lg:w-[850px] lg:h-[850px] rounded-full border border-white/[0.06]" />
        {/* Middle ring */}
        <div className="absolute w-[360px] h-[360px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full border border-white/[0.08]" />
        {/* Inner ring */}
        <div className="absolute w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] lg:w-[350px] lg:h-[350px] rounded-full border border-white/[0.1]" />
      </div>

      {/* Subtle radial glow behind the badge */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[400px] h-[200px] bg-ibloov-blue/5 rounded-full blur-3xl pointer-events-none" />

      {/* Floating dots */}
      {floatingDots.map((dot, i) => (
        <motion.div
          key={i}
          className={`absolute ${dot.color} ${dot.size} rounded-full`}
          style={{ top: dot.top, left: dot.left }}
          animate={{
            y: [0, -12, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{ duration: 4, delay: dot.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="inline-block px-10 py-4 rounded-2xl bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="text-2xl sm:text-4xl font-display font-bold">
            <span className="text-ibloov-blue">iBloov</span>{" "}
            <span className="text-ibloov-orange">AURA</span>
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Explore <span className="text-white/50">.</span> Experience <span className="text-white/50">.</span> Empower
        </motion.h1>

        <motion.p
          className="mt-6 text-lg sm:text-xl text-white/50 font-display italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Work, Travel, and Play — All in One Orbital Platform.
        </motion.p>

        <motion.a
          href="#products"
          className="mt-10 inline-flex items-center px-10 py-4 rounded-full border border-white/15 bg-white/[0.05] backdrop-blur-sm text-white font-display font-semibold text-sm hover:bg-white/10 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Universe
        </motion.a>
      </motion.div>
    </section>
  );
};

export default AuraHero;
