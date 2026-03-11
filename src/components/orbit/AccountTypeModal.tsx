import { motion, AnimatePresence } from "framer-motion";
import { User, Building2, ArrowRight, X, Sparkles, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface AccountTypeModalProps {
  open: boolean;
  onClose: () => void;
  continent?: string;
}

const AccountTypeModal = ({ open, onClose, continent }: AccountTypeModalProps) => {
  const navigate = useNavigate();

  const handleSelect = (type: "consumer" | "enterprise") => {
    onClose();
    navigate("/coming-soon", { state: { continent, type } });
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
            className="relative bg-card border border-border rounded-2xl p-6 w-full max-w-md shadow-xl z-10"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center mb-6">
              <h2 className="font-display text-xl font-bold text-foreground mb-1">
                How will you use iBloov?
              </h2>
              <p className="text-sm text-muted-foreground">
                Choose your path to get started
              </p>
            </div>

            <div className="space-y-3">
              {/* Consumer */}
              <motion.button
                onClick={() => handleSelect("consumer")}
                className="w-full flex items-start gap-4 p-4 rounded-xl border border-border bg-background hover:border-primary/40 hover:bg-primary/5 transition-all text-left group"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-bold text-foreground">Consumer</h3>
                    <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
                      Popular
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Discover events, explore places, join wellness programs, and learn new skills
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors mt-1" />
              </motion.button>

              {/* Enterprise */}
              <motion.button
                onClick={() => handleSelect("enterprise")}
                className="w-full flex items-start gap-4 p-4 rounded-xl border border-border bg-background hover:border-secondary/40 hover:bg-secondary/5 transition-all text-left group"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-5 h-5 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-foreground">Enterprise</h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    List venues, host events, manage teams, and grow your business on the platform
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-secondary transition-colors mt-1" />
              </motion.button>
            </div>

            <p className="text-center text-xs text-muted-foreground mt-5">
              Already have an account?{" "}
              <button
                onClick={() => { onClose(); navigate("/auth"); }}
                className="text-primary font-semibold hover:underline"
              >
                Sign In
              </button>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AccountTypeModal;
