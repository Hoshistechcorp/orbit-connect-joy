import ibloovLogo from "@/assets/ibloov-logo.jpeg";
import AboutModal from "./AboutModal";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <img src={ibloovLogo} alt="iBloov" className="h-8 w-auto" />
        <div className="flex items-center gap-6 text-sm font-medium">
          <AboutModal>
            <button className="text-foreground hover:text-ibloov-blue transition-colors">
              Mission
            </button>
          </AboutModal>
          <AboutModal>
            <button className="text-foreground hover:text-ibloov-blue transition-colors">
              About
            </button>
          </AboutModal>
          <a
            href="https://ibloov.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 border border-foreground rounded-full text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            Support Us
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
