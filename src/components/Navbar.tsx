import { motion } from "framer-motion";
import { ShoppingBag, Rocket } from "lucide-react";
import ibloovLogo from "@/assets/ibloov-logo.jpeg";
import AboutModal from "./AboutModal";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50">
      <nav className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <motion.div
          className="flex items-center gap-2.5"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}>

          <img
            src={ibloovLogo}
            alt="iBloov"
            className="h-8 w-auto rounded-lg" />

          <span className="font-display font-bold text-foreground text-sm hidden sm:inline">
          </span>
        </motion.div>
        <div className="flex items-center gap-3 sm:gap-5 text-sm font-medium font-display">
          <AboutModal>
            <motion.button className="text-muted-foreground hover:text-foreground transition-colors"
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}>

              Mission
            </motion.button>
          </AboutModal>
          <AboutModal>
            <motion.button
              className="text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}>

              About
            </motion.button>
          </AboutModal>
          <motion.a
            href="https://ibloov.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-muted-foreground hover:text-ibloov-orange transition-colors"
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}>

            <ShoppingBag className="w-4 h-4" />
            <span>Store</span>
          </motion.a>
          <motion.a
            href="https://ibloov.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-primary-foreground font-semibold text-xs"
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 25px hsl(var(--ibloov-blue) / 0.4)"
            }}
            whileTap={{ scale: 0.95 }}>

            <Rocket className="w-3.5 h-3.5" />
            Support Us 💛
          </motion.a>
        </div>
      </nav>
    </header>);

};

export default Navbar;