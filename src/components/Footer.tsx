import { motion } from "framer-motion";
import { Globe, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-muted/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-2">
        <div className="flex items-center gap-2">
          <Globe className="w-3.5 h-3.5" />
          <span>Global (English)</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
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
    </footer>
  );
};

export default Footer;
