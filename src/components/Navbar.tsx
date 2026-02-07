import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import ibloovLogo from "@/assets/ibloov-logo.jpeg";
import AboutModal from "./AboutModal";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <motion.img
          src={ibloovLogo}
          alt="iBloov"
          className="h-8 w-auto rounded-lg"
          whileHover={{ scale: 1.1, rotate: 3 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <div className="flex items-center gap-4 sm:gap-6 text-sm font-medium">
          <AboutModal>
            <motion.button
              className="text-foreground hover:text-ibloov-blue transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Mission
            </motion.button>
          </AboutModal>
          <AboutModal>
            <motion.button
              className="text-foreground hover:text-ibloov-blue transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              About
            </motion.button>
          </AboutModal>
          <motion.a
            href="https://ibloov.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-foreground hover:text-ibloov-orange transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Store</span>
          </motion.a>
          <motion.a
            href="https://ibloov.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 border border-primary rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Support Us 💛
          </motion.a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
