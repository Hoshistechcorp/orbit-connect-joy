import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { User, ExternalLink, Edit, Link2, Heart, Award, Image, Briefcase, Zap, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { getProfile } from "@/lib/profile-store";

const ProfileCard = () => {
  const navigate = useNavigate();
  const profile = getProfile();

  const stats = [
    { icon: Link2, label: "Socials", count: profile.socials.length },
    { icon: Heart, label: "Interests", count: profile.interests.length },
    { icon: Award, label: "Certs", count: profile.certifications.length },
    { icon: Image, label: "Gallery", count: profile.gallery.length },
    { icon: Briefcase, label: "Work", count: profile.workExperience.length },
    { icon: Zap, label: "Skills", count: profile.skills.length },
  ];

  const publicUrl = `${window.location.origin}/profile/${profile.slug}`;

  const copyLink = () => {
    navigator.clipboard.writeText(publicUrl);
    toast({ title: "Link copied!", description: "Share your profile with anyone." });
  };

  const hasContent = stats.some(s => s.count > 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card border border-border rounded-2xl p-5 hover:border-primary/20 transition-all"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-lg font-bold text-foreground flex items-center gap-2">
          <User className="w-4 h-4 text-primary" /> My Profile
        </h2>
        <div className="flex gap-1.5">
          <Button variant="ghost" size="sm" className="text-xs font-display gap-1 h-7" onClick={copyLink}>
            <Copy className="w-3 h-3" /> Copy Link
          </Button>
          <Button variant="ghost" size="sm" className="text-xs font-display gap-1 h-7" onClick={() => navigate(`/profile/${profile.slug}`)}>
            <ExternalLink className="w-3 h-3" /> View
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-full bg-muted border border-border overflow-hidden flex items-center justify-center shrink-0">
          {profile.avatar ? (
            <img src={profile.avatar} alt="" className="w-full h-full object-cover" />
          ) : (
            <User className="w-6 h-6 text-muted-foreground" />
          )}
        </div>
        <div className="min-w-0">
          <p className="font-display font-bold text-foreground truncate">{profile.displayName}</p>
          <p className="text-xs text-muted-foreground truncate">{profile.headline || "Add a headline..."}</p>
        </div>
      </div>

      {hasContent ? (
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-4">
          {stats.map(s => (
            <div key={s.label} className="text-center">
              <s.icon className="w-3.5 h-3.5 mx-auto mb-0.5 text-muted-foreground" />
              <p className="font-display font-bold text-sm text-foreground">{s.count}</p>
              <p className="text-[9px] text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground text-center py-3 mb-3">Your profile is empty. Add your socials, skills, and more!</p>
      )}

      <Button
        onClick={() => navigate("/profile/edit")}
        className="w-full font-display text-sm gap-2"
        variant={hasContent ? "outline" : "default"}
      >
        <Edit className="w-3.5 h-3.5" /> {hasContent ? "Edit Profile" : "Set Up Profile"}
      </Button>
    </motion.div>
  );
};

export default ProfileCard;
