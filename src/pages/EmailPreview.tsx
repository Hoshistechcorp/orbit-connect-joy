import WaitlistEmailTemplate from "@/components/email/WaitlistEmailTemplate";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const EmailPreview = () => {
  return (
    <div className="min-h-screen bg-muted">
      {/* Toolbar */}
      <div className="sticky top-0 z-50 bg-card border-b border-border px-4 py-3 flex items-center gap-4">
        <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
        <div className="h-4 w-px bg-border" />
        <span className="text-sm font-display font-bold text-foreground">Email Preview</span>
        <span className="text-xs text-muted-foreground">Waitlist Welcome</span>
      </div>

      {/* Email render */}
      <WaitlistEmailTemplate recipientEmail="demo@ibloov.com" />
    </div>
  );
};

export default EmailPreview;
