import { motion } from "framer-motion";
import { ShoppingBag, Home, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import ibloovLogo from "@/assets/ibloov-logo.jpeg";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link to="/">
          <motion.div
            className="flex items-center gap-2.5"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={ibloovLogo} alt="iBloov" className="h-8 w-auto rounded-lg" />
          </motion.div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-5 md:gap-7 text-sm font-medium font-display">
          {!isHome && (
            <Link to="/">
              <motion.span
                className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Home className="w-4 h-4" />
                Home
              </motion.span>
            </Link>
          )}

          <Link to="/store">
            <motion.span
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-foreground/30 text-foreground font-semibold text-xs uppercase tracking-wider hover:bg-foreground/10 transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Store
              <ShoppingBag className="w-4 h-4" />
            </motion.span>
          </Link>
        </div>

        {/* Mobile */}
        <div className="flex sm:hidden items-center gap-3">
          <Link to="/store">
            <span className="inline-block px-4 py-1.5 rounded-full bg-foreground text-background font-semibold text-xs">
              Store
            </span>
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="p-1.5 text-foreground" aria-label="Open menu">
                <Menu className="w-5 h-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <SheetHeader>
                <SheetTitle className="sr-only">Navigation</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-6 mt-8 text-base font-medium font-display">
                <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                  <Home className="w-4 h-4" />
                  Home
                </Link>
                <Link to="/aura" onClick={() => setOpen(false)} className="text-foreground hover:text-primary transition-colors">
                  Aura
                </Link>
                <Link to="/store" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-foreground/30 text-foreground font-semibold text-sm hover:bg-foreground/10 transition-colors">
                  <span>Store</span>
                  <ShoppingBag className="w-4 h-4" />
                </Link>
                <Link to="/mission" onClick={() => setOpen(false)} className="text-foreground hover:text-primary transition-colors">
                  Mission
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
