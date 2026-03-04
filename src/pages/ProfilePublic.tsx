import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  User, Link2, Heart, Award, Image, Briefcase, Zap,
  ExternalLink, MapPin
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getProfile, SOCIAL_PLATFORMS, type UserProfile } from "@/lib/profile-store";

const ProfilePublic = () => {
  const { slug } = useParams();
  const profile = getProfile();

  // Check if profile exists and matches slug
  if (profile.slug !== slug) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 flex items-center justify-center">
        <div className="text-center">
          <p className="text-6xl mb-4">🔍</p>
          <h1 className="font-display text-xl font-bold text-foreground mb-2">Profile not found</h1>
          <p className="text-muted-foreground text-sm">This profile doesn't exist or isn't available.</p>
        </div>
      </div>
    );
  }

  const publicSocials = profile.socials.filter(s => s.isPublic && s.url);
  const publicInterests = profile.interests.filter(i => i.isPublic);
  const publicCerts = profile.certifications.filter(c => c.isPublic && c.title);
  const publicGallery = profile.gallery.filter(g => g.isPublic);
  const publicWork = profile.workExperience.filter(w => w.isPublic && w.role);
  const publicSkills = profile.skills.filter(s => s.isPublic && s.label);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="max-w-lg mx-auto px-4 py-10">
        {/* Header / Avatar */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <div className="w-24 h-24 rounded-full bg-muted border-4 border-background shadow-lg mx-auto mb-4 overflow-hidden">
            {profile.avatar ? (
              <img src={profile.avatar} alt={profile.displayName} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center"><User className="w-10 h-10 text-muted-foreground" /></div>
            )}
          </div>
          <h1 className="font-display text-2xl font-bold text-foreground">{profile.displayName}</h1>
          {profile.headline && <p className="text-sm text-muted-foreground mt-1">{profile.headline}</p>}
        </motion.div>

        {/* Bio */}
        {profile.bio && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="mb-8">
            <p className="text-sm text-foreground/80 text-center leading-relaxed">{profile.bio}</p>
          </motion.div>
        )}

        {/* Social Links */}
        {publicSocials.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-8 space-y-2">
            {publicSocials.map(s => {
              const platform = SOCIAL_PLATFORMS.find(p => p.value === s.platform);
              return (
                <a
                  key={s.id}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 hover:border-primary/30 hover:shadow-sm transition-all group"
                >
                  <span className="text-xl">{platform?.icon || "🔗"}</span>
                  <span className="flex-1 font-display font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                    {platform?.label || s.platform}
                  </span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              );
            })}
          </motion.div>
        )}

        {/* Interests */}
        {publicInterests.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mb-8">
            <h2 className="font-display font-bold text-sm text-foreground mb-3 flex items-center gap-2"><Heart className="w-4 h-4 text-primary" /> Interests</h2>
            <div className="flex flex-wrap gap-2">
              {publicInterests.map(i => (
                <Badge key={i.id} variant="secondary" className="font-display text-xs">{i.label}</Badge>
              ))}
            </div>
          </motion.div>
        )}

        {/* Skills */}
        {publicSkills.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-8">
            <h2 className="font-display font-bold text-sm text-foreground mb-3 flex items-center gap-2"><Zap className="w-4 h-4 text-primary" /> Skills</h2>
            <div className="space-y-2">
              {publicSkills.map(s => (
                <div key={s.id} className="flex items-center gap-3">
                  <span className="text-sm font-display text-foreground flex-1">{s.label}</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(l => (
                      <div key={l} className={`w-2.5 h-2.5 rounded-full ${l <= s.level ? "bg-primary" : "bg-muted"}`} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Work Experience */}
        {publicWork.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="mb-8">
            <h2 className="font-display font-bold text-sm text-foreground mb-3 flex items-center gap-2"><Briefcase className="w-4 h-4 text-primary" /> Experience</h2>
            <div className="space-y-3">
              {publicWork.map(w => (
                <div key={w.id} className="bg-card border border-border rounded-xl p-4">
                  <p className="font-display font-semibold text-sm text-foreground">{w.role}</p>
                  <p className="text-xs text-muted-foreground">{w.company} · {w.period}</p>
                  {w.description && <p className="text-xs text-foreground/70 mt-1.5">{w.description}</p>}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Certifications */}
        {publicCerts.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-8">
            <h2 className="font-display font-bold text-sm text-foreground mb-3 flex items-center gap-2"><Award className="w-4 h-4 text-primary" /> Certifications</h2>
            <div className="space-y-2">
              {publicCerts.map(c => (
                <div key={c.id} className="flex items-center gap-3 bg-card border border-border rounded-xl p-3">
                  <Award className="w-5 h-5 text-secondary shrink-0" />
                  <div>
                    <p className="font-display font-semibold text-sm text-foreground">{c.title}</p>
                    <p className="text-[11px] text-muted-foreground">{c.issuer}{c.year ? ` · ${c.year}` : ""}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Gallery */}
        {publicGallery.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mb-8">
            <h2 className="font-display font-bold text-sm text-foreground mb-3 flex items-center gap-2"><Image className="w-4 h-4 text-primary" /> Gallery</h2>
            <div className="grid grid-cols-2 gap-2">
              {publicGallery.map(g => (
                <div key={g.id} className="rounded-xl overflow-hidden aspect-square border border-border">
                  <img src={g.image} alt={g.caption} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Footer */}
        <div className="text-center pt-4">
          <p className="text-[10px] text-muted-foreground font-display">Powered by <span className="font-bold">iBloov</span></p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePublic;
