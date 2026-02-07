import { Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 border-t border-border bg-ibloov-light-gray">
      <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <Globe className="w-3.5 h-3.5" />
          <span>Global (English)</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          <span>© {new Date().getFullYear()} iBloov</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
