import { motion } from "framer-motion";
import { Globe, Heart, Instagram, Twitter, Linkedin, Youtube, Mail, MapPin, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import ibloovLogo from "@/assets/ibloov-logo.jpeg";

const footerSections = [
  {
    title: "Platform",
    links: [
      { label: "Aura", to: "/aura" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Mission", to: "/mission" },
      { label: "GTM", href: "https://ibloovresearch.manus.space" },
      { label: "Store", href: "https://ibloov.com" },
    ],
  },
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/ibloov", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/ibloov", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/ibloov", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com/@ibloov", label: "YouTube" },
];

const missionCards = [
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

const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-muted/50 backdrop-blur-sm">
      {/* Mission Section */}
      <div className="max-w-5xl mx-auto px-4 pt-16 pb-12">
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
          {missionCards.map((card, i) => (
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
      </div>

      {/* Links Grid */}
      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <img src={ibloovLogo} alt="iBloov" className="h-8 w-auto rounded-lg" />
                <span className="font-display font-bold text-foreground">iBloov</span>
              </Link>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                The world's first Life & Leisure Operating System. Solving for shared joy.
              </p>
              {/* Social Links */}
              <div className="flex gap-2.5">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-2 rounded-full border border-border bg-background/80 text-muted-foreground hover:text-foreground transition-colors"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-3.5 h-3.5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="font-display font-semibold text-foreground text-sm mb-3">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      {"to" in link && link.to ? (
                        <Link
                          to={link.to}
                          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={(link as any).href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                        >
                          {link.label}
                          <ShoppingBag className="w-3 h-3" />
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Support + Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col items-center gap-4">
          <motion.a
            href="https://ibloov.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border bg-background font-display font-semibold text-sm text-foreground"
            whileHover={{
              scale: 1.06,
              boxShadow: "0 4px 20px hsl(var(--ibloov-orange) / 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <Heart className="w-4 h-4 text-ibloov-orange" />
            Support the Vision
          </motion.a>
          <div className="w-full flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-2">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                <span>Global (English)</span>
              </div>
              <span className="hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                <a href="mailto:hello@ibloov.com" className="hover:text-foreground transition-colors">
                  hello@ibloov.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
              <span className="flex items-center gap-1">
                Made with{" "}
                <motion.span
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Heart className="w-3 h-3 text-ibloov-orange fill-ibloov-orange" />
                </motion.span>
                {" "}© {new Date().getFullYear()} iBloov
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
