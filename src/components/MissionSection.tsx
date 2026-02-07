import { motion } from "framer-motion";

const cards = [
  {
    emoji: "🧠",
    title: "The Problem",
    text: "We're hyper-connected but emotionally offline. The \"Love Leak\" is a bug in how we live.",
    color: "ibloov-orange",
  },
  {
    emoji: "🔬",
    title: "The Solution",
    text: "iBloov AURA — a Life & Leisure OS built to solve for x. Infrastructure for shared joy.",
    color: "ibloov-blue",
  },
  {
    emoji: "🌍",
    title: "The Mission",
    text: "Save the world from isolation, one shared experience at a time. Math checks out.",
    color: "ibloov-orange",
  },
];

const MissionSection = () => {
  return (
    <motion.section
      className="w-full max-w-4xl mx-auto mt-20 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-center font-mono text-2xl sm:text-3xl font-bold text-foreground mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Why we're solving for{" "}
        <span className="text-ibloov-orange" style={{ textShadow: "0 0 20px hsl(var(--ibloov-orange) / 0.3)" }}>
          x
        </span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            className="relative p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-sm overflow-hidden group cursor-default"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6, type: "spring" }}
            whileHover={{
              scale: 1.04,
              y: -5,
              boxShadow: `0 20px 50px hsl(var(--${card.color}) / 0.15)`,
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-ibloov-blue to-ibloov-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <motion.span
              className="text-4xl block mb-3"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
            >
              {card.emoji}
            </motion.span>
            <h3 className="font-mono font-bold text-foreground mb-2">{card.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default MissionSection;
