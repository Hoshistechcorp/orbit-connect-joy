import { motion } from "framer-motion";

const floatingDots = [
  { color: "bg-ibloov-orange", top: "25%", left: "58%", size: "w-3 h-3", delay: 0 },
  { color: "bg-ibloov-blue", top: "38%", left: "35%", size: "w-2.5 h-2.5", delay: 0.5 },
  { color: "bg-green-400", top: "75%", left: "42%", size: "w-2 h-2", delay: 1 },
  { color: "bg-purple-400", top: "65%", left: "63%", size: "w-2.5 h-2.5", delay: 1.5 },
];

const AuraHero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(180deg, hsl(220 25% 12%) 0%, hsl(220 20% 18%) 50%, hsl(220 25% 12%) 100%)" }}>
      
      {/* Orbital rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full border border-white/5" />
        <div className="absolute w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] rounded-full border border-white/8" />
        <div className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full border border-white/10" />
      </div>

      {/* Floating dots */}
      {floatingDots.map((dot, i) => (
        <motion.div
          key={i}
          className={`absolute ${dot.color} ${dot.size} rounded-full`}
          style={{ top: dot.top, left: dot.left }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{ duration: 3, delay: dot.delay, repeat: Infinity, ease: "easeInOut" }}
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
          className="inline-block px-8 py-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 mb-8"
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
          Explore <span className="text-white/60">.</span> Experience <span className="text-white/60">.</span> Empower
        </motion.h1>

        <motion.p
          className="mt-6 text-lg sm:text-xl text-white/60 font-display italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Work, Travel, and Play — All in One Orbital Platform.
        </motion.p>

        <motion.a
          href="#products"
          className="mt-10 inline-flex items-center px-8 py-3.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white font-display font-semibold text-sm hover:bg-white/10 transition-colors"
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
