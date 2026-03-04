import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  User, Heart, Award, Image, Briefcase, Zap, ExternalLink,
  Sparkles, Users, DollarSign, Calendar, MapPin, ArrowUpRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getProfile, SOCIAL_PLATFORMS, type UserProfile } from "@/lib/profile-store";
import { getAuraLinks } from "@/lib/auralink-store";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

const SectionHeader = ({ icon: Icon, label }: { icon: React.ElementType; label: string }) => (
  <div className="flex items-center gap-2 mb-4">
    <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
      <Icon className="w-3.5 h-3.5 text-primary" />
    </div>
    <h2 className="font-display font-bold text-sm tracking-wide uppercase text-foreground/70">{label}</h2>
  </div>
);

const ProfilePublic = () => {
  const { slug } = useParams();
  const profile = getProfile();

  if (profile.slug !== slug) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
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

  // AuraLinks
  const allAuraLinks = getAuraLinks();
  const publicAuraLinks = profile.auraLinks
    .filter(a => a.isPublic)
    .map(a => allAuraLinks.find(l => l.id === a.id))
    .filter(Boolean);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Ambient background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-[100px]" />
      </div>

      <div className="max-w-2xl mx-auto px-4 py-12">
        {/* ─── Hero Card ─── */}
        <motion.div {...fadeUp(0)} className="relative mb-10">
          <div className="relative rounded-3xl border border-border bg-card/60 backdrop-blur-xl overflow-hidden">
            {/* Decorative top bar */}
            <div className="h-24 bg-gradient-to-r from-primary/20 via-secondary/15 to-primary/10 relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.15),transparent_70%)]" />
            </div>
            <div className="px-6 pb-6 -mt-12">
              <div className="flex items-end gap-4 mb-4">
                <div className="w-24 h-24 rounded-2xl bg-muted border-4 border-card shadow-xl overflow-hidden flex-shrink-0">
                  {profile.avatar ? (
                    <img src={profile.avatar} alt={profile.displayName} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                      <User className="w-10 h-10 text-muted-foreground" />
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0 pb-1">
                  <h1 className="font-display text-2xl font-bold text-foreground truncate">{profile.displayName}</h1>
                  {profile.headline && <p className="text-sm text-muted-foreground mt-0.5 truncate">{profile.headline}</p>}
                </div>
              </div>
              {profile.bio && (
                <p className="text-sm text-foreground/75 leading-relaxed">{profile.bio}</p>
              )}
              {/* Social icons row */}
              {publicSocials.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {publicSocials.map(s => {
                    const platform = SOCIAL_PLATFORMS.find(p => p.value === s.platform);
                    return (
                      <a
                        key={s.id}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-muted/60 hover:bg-primary/10 border border-border hover:border-primary/30 rounded-xl px-3 py-2 transition-all group"
                      >
                        <span className="text-base">{platform?.icon || "🔗"}</span>
                        <span className="font-display text-xs font-semibold text-foreground group-hover:text-primary transition-colors">{platform?.label || s.platform}</span>
                        <ArrowUpRight className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* ─── AuraLinks Section ─── */}
        {publicAuraLinks.length > 0 && (
          <motion.section {...fadeUp(0.1)} className="mb-10">
            <SectionHeader icon={Sparkles} label="My Events" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {publicAuraLinks.map((link) => {
                if (!link) return null;
                return (
                  <Link
                    key={link.id}
                    to={`/aura/${link.slug}`}
                    className="group relative rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-4 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="outline" className="text-[10px] font-display">{link.template}</Badge>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="font-display font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1 mb-1">{link.title}</h3>
                    <p className="text-[11px] text-muted-foreground line-clamp-2 leading-relaxed mb-3">{link.description}</p>
                    <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {link.eventDate}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {link.location}</span>
                    </div>
                    <div className="flex items-center gap-4 mt-3 pt-3 border-t border-border">
                      <span className="flex items-center gap-1 text-xs text-muted-foreground"><Users className="w-3 h-3" /> {link.rsvps} RSVPs</span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground"><DollarSign className="w-3 h-3" /> ${link.donations}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </motion.section>
        )}

        {/* ─── Skills Section ─── */}
        {publicSkills.length > 0 && (
          <motion.section {...fadeUp(0.15)} className="mb-10">
            <SectionHeader icon={Zap} label="Skills" />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {publicSkills.map(s => (
                <div key={s.id} className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-4 hover:border-primary/20 transition-colors">
                  <p className="font-display font-semibold text-sm text-foreground mb-2">{s.label}</p>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(l => (
                      <div key={l} className={`h-1.5 flex-1 rounded-full transition-colors ${l <= s.level ? "bg-primary" : "bg-muted"}`} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* ─── Interests ─── */}
        {publicInterests.length > 0 && (
          <motion.section {...fadeUp(0.2)} className="mb-10">
            <SectionHeader icon={Heart} label="Interests" />
            <div className="flex flex-wrap gap-2">
              {publicInterests.map(i => (
                <span key={i.id} className="px-4 py-2 rounded-full text-xs font-display font-semibold bg-primary/8 text-primary border border-primary/15 hover:bg-primary/15 transition-colors">
                  {i.label}
                </span>
              ))}
            </div>
          </motion.section>
        )}

        {/* ─── Work Experience ─── */}
        {publicWork.length > 0 && (
          <motion.section {...fadeUp(0.25)} className="mb-10">
            <SectionHeader icon={Briefcase} label="Experience" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {publicWork.map(w => (
                <div key={w.id} className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-5 hover:border-primary/20 transition-colors">
                  <p className="font-display font-bold text-sm text-foreground">{w.role}</p>
                  <p className="text-xs text-primary font-display font-semibold mt-0.5">{w.company}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{w.period}</p>
                  {w.description && <p className="text-xs text-foreground/65 mt-2 leading-relaxed line-clamp-3">{w.description}</p>}
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* ─── Certifications ─── */}
        {publicCerts.length > 0 && (
          <motion.section {...fadeUp(0.3)} className="mb-10">
            <SectionHeader icon={Award} label="Certifications" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {publicCerts.map(c => (
                <div key={c.id} className="flex items-start gap-3 rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-4 hover:border-secondary/30 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Award className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm text-foreground">{c.title}</p>
                    <p className="text-[11px] text-muted-foreground">{c.issuer}{c.year ? ` · ${c.year}` : ""}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* ─── Gallery ─── */}
        {publicGallery.length > 0 && (
          <motion.section {...fadeUp(0.35)} className="mb-10">
            <SectionHeader icon={Image} label="Gallery" />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {publicGallery.map(g => (
                <div key={g.id} className="rounded-2xl overflow-hidden border border-border aspect-square group relative">
                  <img src={g.image} alt={g.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {g.caption && (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-background text-xs font-display">{g.caption}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Footer */}
        <motion.div {...fadeUp(0.4)} className="text-center pt-6 pb-4">
          <p className="text-[11px] text-muted-foreground font-display">
            Powered by <span className="font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">iBloov</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfilePublic;
