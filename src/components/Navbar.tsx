import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import ibloovLogo from "@/assets/ibloov-logo.jpeg";

const MISSION_URL = "https://aura-orbit-unite.lovable.app";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50">
      <nav className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/">
          <motion.div
            className="flex items-center gap-2.5"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}>
            <img
              src={ibloovLogo}
              alt="iBloov"
              className="h-8 w-auto rounded-lg" />
          </motion.div>
        </Link>

        <div className="flex items-center gap-5 sm:gap-7 text-sm font-medium font-display">
          <motion.a
            href={MISSION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}>
            Mission
          </motion.a>

          <motion.a
            href="https://ibloov.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider text-xs font-semibold"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}>
            <span>Store</span>
            <motion.span
              whileHover={{ rotate: 12, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400 }}>
              <ShoppingBag className="w-4 h-4" />
            </motion.span>
          </motion.a>

          <motion.a
            href="https://ibloov.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-foreground text-background font-semibold text-sm"
            whileHover={{
              scale: 1.06,
              boxShadow: "0 4px 20px hsl(var(--foreground) / 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}>
            Enter Orbit
          </motion.a>
        </div>
      </nav>
    </header>);

};

export default Navbar;