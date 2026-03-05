import { motion } from "framer-motion";
import {
  Shield, Users, Globe, Zap, Bot,
  Fingerprint, ArrowUpRight, Sparkles
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Universal Authentication",
    desc: "Secure login via Email, Google, Apple, LinkedIn, and Twitter.",
    gradient: "from-ibloov-blue to-blue-400",
  },
  {
    icon: Users,
    title: "Core Identity Graph",
    desc: "Follow, connect, and interact across the ecosystem with a shared social infrastructure.",
    gradient: "from-purple-500 to-pink-400",
  },
  {
    icon: Globe,
    title: "Public Hub",
    desc: "A shareable profile (ibloov.com/@username) with customizable tiles and a unique QR code for instant discovery.",
    gradient: "from-ibloov-orange to-amber-400",
  },
  {
    icon: Zap,
    title: "Points Engine",
    desc: "Earn points for real-world participation like attending games, hosting events, and completing your profile.",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    icon: Bot,
    title: "Aura AI Onboarding",
    desc: "A conversational assistant that helps users complete their profile and discover local opportunities in under 60 seconds.",
    gradient: "from-rose-500 to-orange-400",
  },
];

const targets = [
  { value: "10K", label: "Users" },
  { value: "5K", label: "Hub Shares" },
  { value: "100K+", label: "API Calls" },
];

const AuraLinkHeroCard = () => {
  return (
    <motion.div
      className="relative rounded-[2rem] overflow-hidden mb-14"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, type: "spring" }}
    >
      {/* Layered gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--ibloov-blue)/0.25),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--ibloov-orange)/0.15),transparent_60%)]" />

      {/* Decorative orbital rings */}
      <div className="absolute -top-32 -right-32 w-64 h-64 border border-background/5 rounded-full" />
      <div className="absolute -top-20 -right-20 w-48 h-48 border border-background/10 rounded-full" />
      <div className="absolute -bottom-24 -left-24 w-56 h-56 border border-background/5 rounded-full" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--background)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--background)) 1px, transparent 1px)",
        backgroundSize: "40px 40px"
      }} />

      <div className="relative z-10 p-8 sm:p-12 lg:p-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16 mb-12">
          <div className="flex-1">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-background/10 bg-background/5 backdrop-blur-sm text-background/70 text-xs font-display font-semibold mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Fingerprint className="w-3.5 h-3.5" />
              Identity Layer
            </motion.div>

            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-background leading-tight mb-4">
              AuraLink
              <span className="block text-lg sm:text-xl lg:text-2xl font-medium text-background/50 mt-2">
                The Identity Layer of the iBloov Ecosystem
              </span>
            </h3>

            <p className="text-background/40 text-sm font-display italic mb-6">
              Your unified digital identity powering connection, reputation, and access across every iBloov product.
            </p>

            <p className="text-background/60 text-sm sm:text-base leading-relaxed max-w-2xl">
              AuraLink is the gravitational center of the iBloov ecosystem. It functions like an Apple ID for iBloov — providing a single login, reputation score, and social graph that powers experiences across SportMate, iBloov Events, and iBloov Place.
            </p>
          </div>

          {/* Visual element — identity network illustration */}
          <div className="flex-shrink-0 hidden lg:flex items-center justify-center">
            <div className="relative w-52 h-52">
              {/* Concentric rings */}
              <div className="absolute inset-0 border-2 border-dashed border-background/10 rounded-full animate-spin-slow" />
              <div className="absolute inset-4 border border-background/15 rounded-full animate-reverse-spin" />
              <div className="absolute inset-10 border border-background/20 rounded-full animate-spin-slow" style={{ animationDuration: "12s" }} />

              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-ibloov-blue to-purple-500 flex items-center justify-center shadow-lg shadow-ibloov-blue/30">
                  <Fingerprint className="w-8 h-8 text-background" />
                </div>
              </div>

              {/* Orbital dots */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-ibloov-orange animate-pulse" />
              <div className="absolute bottom-6 right-2 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse animation-delay-300" />
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 rounded-full bg-pink-400 animate-pulse animation-delay-500" />
              <div className="absolute bottom-2 left-1/4 w-2 h-2 rounded-full bg-ibloov-blue animate-pulse animation-delay-700" />
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="group relative p-5 rounded-2xl bg-background/[0.04] border border-background/[0.06] backdrop-blur-sm hover:bg-background/[0.08] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              whileHover={{ y: -3 }}
            >
              <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform`}>
                <f.icon className="w-4.5 h-4.5 text-white" />
              </div>
              <h4 className="font-display font-semibold text-background text-sm mb-1.5">{f.title}</h4>
              <p className="text-background/45 text-xs leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Success Targets + CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-background/[0.06]">
          <div className="flex items-center gap-6 sm:gap-10">
            {targets.map((t, i) => (
              <motion.div
                key={t.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <div className="font-display font-bold text-2xl sm:text-3xl text-background">{t.value}</div>
                <div className="text-background/40 text-xs font-display mt-0.5">{t.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-2 text-background/30 text-xs font-display">
            <Sparkles className="w-3.5 h-3.5" />
            First 90-day targets across iBloov products
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AuraLinkHeroCard;
