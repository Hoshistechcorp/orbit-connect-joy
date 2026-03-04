import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft, User, Link2, Heart, Award, Image, Briefcase, Zap,
  Plus, Trash2, Eye, EyeOff, Save, ExternalLink, Camera, GripVertical
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";
import {
  getProfile, saveProfile, createId, SOCIAL_PLATFORMS,
  type UserProfile, type SocialLink, type Interest, type Certification,
  type GalleryItem, type WorkExperience, type Skill
} from "@/lib/profile-store";

const SECTIONS = [
  { id: "bio", label: "Bio", icon: User },
  { id: "socials", label: "Social Links", icon: Link2 },
  { id: "interests", label: "Interests", icon: Heart },
  { id: "certifications", label: "Certifications", icon: Award },
  { id: "gallery", label: "Gallery", icon: Image },
  { id: "work", label: "Work Experience", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Zap },
];

const ProfileEdit = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<UserProfile>(getProfile);
  const [activeSection, setActiveSection] = useState("bio");
  const avatarRef = useRef<HTMLInputElement>(null);
  const galleryRef = useRef<HTMLInputElement>(null);

  const update = (partial: Partial<UserProfile>) => {
    setProfile(prev => ({ ...prev, ...partial }));
  };

  const handleSave = () => {
    saveProfile(profile);
    toast({ title: "Profile saved!", description: "Your changes have been saved locally." });
  };

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => update({ avatar: reader.result as string });
    reader.readAsDataURL(file);
  };

  const handleGalleryUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const newItems: GalleryItem[] = [];
    let loaded = 0;
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {
        newItems.push({ id: createId(), image: reader.result as string, caption: "", isPublic: true });
        loaded++;
        if (loaded === files.length) {
          update({ gallery: [...profile.gallery, ...newItems] });
        }
      };
      reader.readAsDataURL(file);
    });
  };

  // Social links
  const addSocial = () => {
    update({ socials: [...profile.socials, { id: createId(), platform: "instagram", url: "", isPublic: true }] });
  };
  const updateSocial = (id: string, partial: Partial<SocialLink>) => {
    update({ socials: profile.socials.map(s => s.id === id ? { ...s, ...partial } : s) });
  };
  const removeSocial = (id: string) => {
    update({ socials: profile.socials.filter(s => s.id !== id) });
  };

  // Interests
  const [newInterest, setNewInterest] = useState("");
  const addInterest = () => {
    if (!newInterest.trim()) return;
    update({ interests: [...profile.interests, { id: createId(), label: newInterest.trim(), isPublic: true }] });
    setNewInterest("");
  };
  const toggleInterestVisibility = (id: string) => {
    update({ interests: profile.interests.map(i => i.id === id ? { ...i, isPublic: !i.isPublic } : i) });
  };
  const removeInterest = (id: string) => {
    update({ interests: profile.interests.filter(i => i.id !== id) });
  };

  // Certifications
  const addCert = () => {
    update({ certifications: [...profile.certifications, { id: createId(), title: "", issuer: "", year: "", isPublic: true }] });
  };
  const updateCert = (id: string, partial: Partial<Certification>) => {
    update({ certifications: profile.certifications.map(c => c.id === id ? { ...c, ...partial } : c) });
  };
  const removeCert = (id: string) => {
    update({ certifications: profile.certifications.filter(c => c.id !== id) });
  };

  // Work experience
  const addWork = () => {
    update({ workExperience: [...profile.workExperience, { id: createId(), role: "", company: "", period: "", description: "", isPublic: true }] });
  };
  const updateWork = (id: string, partial: Partial<WorkExperience>) => {
    update({ workExperience: profile.workExperience.map(w => w.id === id ? { ...w, ...partial } : w) });
  };
  const removeWork = (id: string) => {
    update({ workExperience: profile.workExperience.filter(w => w.id !== id) });
  };

  // Skills
  const addSkill = () => {
    update({ skills: [...profile.skills, { id: createId(), label: "", level: 3, isPublic: true }] });
  };
  const updateSkill = (id: string, partial: Partial<Skill>) => {
    update({ skills: profile.skills.map(s => s.id === id ? { ...s, ...partial } : s) });
  };
  const removeSkill = (id: string) => {
    update({ skills: profile.skills.filter(s => s.id !== id) });
  };

  // Gallery
  const updateGalleryItem = (id: string, partial: Partial<GalleryItem>) => {
    update({ gallery: profile.gallery.map(g => g.id === id ? { ...g, ...partial } : g) });
  };
  const removeGalleryItem = (id: string) => {
    update({ gallery: profile.gallery.filter(g => g.id !== id) });
  };

  const VisibilityToggle = ({ isPublic, onToggle }: { isPublic: boolean; onToggle: () => void }) => (
    <button onClick={onToggle} className="flex items-center gap-1 text-[10px] text-muted-foreground hover:text-foreground transition-colors">
      {isPublic ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
      {isPublic ? "Public" : "Private"}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
          <button onClick={() => navigate("/dashboard")} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4" /> Dashboard
          </button>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="text-xs font-display gap-1" onClick={() => navigate(`/profile/${profile.slug}`)}>
              <ExternalLink className="w-3 h-3" /> Preview
            </Button>
            <Button size="sm" className="text-xs font-display gap-1" onClick={handleSave}>
              <Save className="w-3 h-3" /> Save
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Avatar & Basic Info */}
        <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex items-center gap-5">
            <div className="relative group">
              <div className="w-20 h-20 rounded-full bg-muted border-2 border-border overflow-hidden flex items-center justify-center">
                {profile.avatar ? (
                  <img src={profile.avatar} alt="Avatar" className="w-full h-full object-cover" />
                ) : (
                  <User className="w-8 h-8 text-muted-foreground" />
                )}
              </div>
              <button
                onClick={() => avatarRef.current?.click()}
                className="absolute inset-0 rounded-full bg-foreground/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity"
              >
                <Camera className="w-5 h-5 text-background" />
              </button>
              <input ref={avatarRef} type="file" accept="image/*" className="hidden" onChange={handleAvatarUpload} />
            </div>
            <div className="flex-1 space-y-2">
              <Input
                value={profile.displayName}
                onChange={e => update({ displayName: e.target.value })}
                placeholder="Your Name"
                className="font-display font-bold text-lg h-auto py-1 border-none shadow-none px-0 focus-visible:ring-0"
              />
              <Input
                value={profile.headline}
                onChange={e => update({ headline: e.target.value })}
                placeholder="Your headline — e.g. Creative Director & Wellness Coach"
                className="text-sm text-muted-foreground h-auto py-1 border-none shadow-none px-0 focus-visible:ring-0"
              />
            </div>
          </div>
        </motion.section>

        {/* Section tabs */}
        <div className="flex gap-1.5 overflow-x-auto pb-2 mb-6">
          {SECTIONS.map(s => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-display font-semibold whitespace-nowrap transition-all ${
                activeSection === s.id
                  ? "bg-foreground text-background shadow-sm"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              <s.icon className="w-3.5 h-3.5" />
              {s.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={activeSection} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.15 }}>

            {/* BIO */}
            {activeSection === "bio" && (
              <div className="space-y-4">
                <h2 className="font-display font-bold text-foreground flex items-center gap-2"><User className="w-4 h-4 text-primary" /> About You</h2>
                <Textarea
                  value={profile.bio}
                  onChange={e => update({ bio: e.target.value })}
                  placeholder="Tell people about yourself, your passions, and what makes you unique..."
                  className="min-h-[160px] text-sm"
                />
                <div className="flex items-center justify-between">
                  <p className="text-xs text-muted-foreground">{profile.bio.length} / 500 characters</p>
                  <Badge variant="outline" className="text-[10px]">Always Public</Badge>
                </div>
              </div>
            )}

            {/* SOCIALS */}
            {activeSection === "socials" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="font-display font-bold text-foreground flex items-center gap-2"><Link2 className="w-4 h-4 text-primary" /> Social Links</h2>
                  <Button variant="outline" size="sm" className="text-xs font-display gap-1" onClick={addSocial}><Plus className="w-3 h-3" /> Add Link</Button>
                </div>
                {profile.socials.length === 0 && (
                  <div className="text-center py-10 text-muted-foreground text-sm">No social links yet. Click "Add Link" to get started.</div>
                )}
                <div className="space-y-3">
                  {profile.socials.map(s => (
                    <div key={s.id} className="bg-card border border-border rounded-xl p-4 flex items-center gap-3">
                      <span className="text-xl">{SOCIAL_PLATFORMS.find(p => p.value === s.platform)?.icon || "🔗"}</span>
                      <select
                        value={s.platform}
                        onChange={e => updateSocial(s.id, { platform: e.target.value })}
                        className="bg-muted rounded-lg px-2 py-1.5 text-xs font-display border-none outline-none"
                      >
                        {SOCIAL_PLATFORMS.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
                      </select>
                      <Input
                        value={s.url}
                        onChange={e => updateSocial(s.id, { url: e.target.value })}
                        placeholder="https://..."
                        className="flex-1 text-sm h-8"
                      />
                      <VisibilityToggle isPublic={s.isPublic} onToggle={() => updateSocial(s.id, { isPublic: !s.isPublic })} />
                      <button onClick={() => removeSocial(s.id)} className="text-muted-foreground hover:text-destructive transition-colors">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* INTERESTS */}
            {activeSection === "interests" && (
              <div className="space-y-4">
                <h2 className="font-display font-bold text-foreground flex items-center gap-2"><Heart className="w-4 h-4 text-primary" /> Interests</h2>
                <div className="flex gap-2">
                  <Input
                    value={newInterest}
                    onChange={e => setNewInterest(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && addInterest()}
                    placeholder="Add an interest — e.g. Photography, Travel, Yoga..."
                    className="flex-1 text-sm"
                  />
                  <Button variant="outline" size="sm" onClick={addInterest}><Plus className="w-3 h-3" /></Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {profile.interests.map(i => (
                    <div key={i.id} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-display font-semibold border transition-all ${i.isPublic ? "bg-primary/10 text-primary border-primary/20" : "bg-muted text-muted-foreground border-border"}`}>
                      {i.label}
                      <button onClick={() => toggleInterestVisibility(i.id)}>
                        {i.isPublic ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                      </button>
                      <button onClick={() => removeInterest(i.id)} className="hover:text-destructive"><Trash2 className="w-3 h-3" /></button>
                    </div>
                  ))}
                </div>
                {profile.interests.length === 0 && <p className="text-center py-8 text-muted-foreground text-sm">No interests added yet.</p>}
              </div>
            )}

            {/* CERTIFICATIONS */}
            {activeSection === "certifications" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="font-display font-bold text-foreground flex items-center gap-2"><Award className="w-4 h-4 text-primary" /> Certifications</h2>
                  <Button variant="outline" size="sm" className="text-xs font-display gap-1" onClick={addCert}><Plus className="w-3 h-3" /> Add</Button>
                </div>
                <div className="space-y-3">
                  {profile.certifications.map(c => (
                    <div key={c.id} className="bg-card border border-border rounded-xl p-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <Input value={c.title} onChange={e => updateCert(c.id, { title: e.target.value })} placeholder="Certification title" className="font-display font-semibold text-sm h-8 border-none shadow-none px-0 focus-visible:ring-0 flex-1" />
                        <div className="flex items-center gap-2">
                          <VisibilityToggle isPublic={c.isPublic} onToggle={() => updateCert(c.id, { isPublic: !c.isPublic })} />
                          <button onClick={() => removeCert(c.id)} className="text-muted-foreground hover:text-destructive"><Trash2 className="w-3.5 h-3.5" /></button>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Input value={c.issuer} onChange={e => updateCert(c.id, { issuer: e.target.value })} placeholder="Issued by" className="text-xs h-7 flex-1" />
                        <Input value={c.year} onChange={e => updateCert(c.id, { year: e.target.value })} placeholder="Year" className="text-xs h-7 w-20" />
                      </div>
                    </div>
                  ))}
                </div>
                {profile.certifications.length === 0 && <p className="text-center py-8 text-muted-foreground text-sm">No certifications added yet.</p>}
              </div>
            )}

            {/* GALLERY */}
            {activeSection === "gallery" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="font-display font-bold text-foreground flex items-center gap-2"><Image className="w-4 h-4 text-primary" /> Gallery</h2>
                  <Button variant="outline" size="sm" className="text-xs font-display gap-1" onClick={() => galleryRef.current?.click()}><Plus className="w-3 h-3" /> Add Photos</Button>
                  <input ref={galleryRef} type="file" accept="image/*" multiple className="hidden" onChange={handleGalleryUpload} />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {profile.gallery.map(g => (
                    <div key={g.id} className="relative group rounded-xl overflow-hidden border border-border aspect-square">
                      <img src={g.image} alt={g.caption} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                        <Input
                          value={g.caption}
                          onChange={e => updateGalleryItem(g.id, { caption: e.target.value })}
                          placeholder="Caption..."
                          className="w-4/5 text-xs h-7 bg-background/90"
                          onClick={e => e.stopPropagation()}
                        />
                        <div className="flex gap-2">
                          <button onClick={() => updateGalleryItem(g.id, { isPublic: !g.isPublic })} className="text-background text-[10px] flex items-center gap-1">
                            {g.isPublic ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                            {g.isPublic ? "Public" : "Private"}
                          </button>
                          <button onClick={() => removeGalleryItem(g.id)} className="text-destructive text-[10px] flex items-center gap-1">
                            <Trash2 className="w-3 h-3" /> Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {profile.gallery.length === 0 && <p className="text-center py-8 text-muted-foreground text-sm">No photos yet. Add some to showcase your work.</p>}
              </div>
            )}

            {/* WORK EXPERIENCE */}
            {activeSection === "work" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="font-display font-bold text-foreground flex items-center gap-2"><Briefcase className="w-4 h-4 text-primary" /> Work Experience</h2>
                  <Button variant="outline" size="sm" className="text-xs font-display gap-1" onClick={addWork}><Plus className="w-3 h-3" /> Add</Button>
                </div>
                <div className="space-y-3">
                  {profile.workExperience.map(w => (
                    <div key={w.id} className="bg-card border border-border rounded-xl p-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <Input value={w.role} onChange={e => updateWork(w.id, { role: e.target.value })} placeholder="Role / Title" className="font-display font-semibold text-sm h-8 border-none shadow-none px-0 focus-visible:ring-0 flex-1" />
                        <div className="flex items-center gap-2">
                          <VisibilityToggle isPublic={w.isPublic} onToggle={() => updateWork(w.id, { isPublic: !w.isPublic })} />
                          <button onClick={() => removeWork(w.id)} className="text-muted-foreground hover:text-destructive"><Trash2 className="w-3.5 h-3.5" /></button>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Input value={w.company} onChange={e => updateWork(w.id, { company: e.target.value })} placeholder="Company" className="text-xs h-7 flex-1" />
                        <Input value={w.period} onChange={e => updateWork(w.id, { period: e.target.value })} placeholder="2022 – Present" className="text-xs h-7 w-32" />
                      </div>
                      <Textarea value={w.description} onChange={e => updateWork(w.id, { description: e.target.value })} placeholder="Brief description of your role..." className="text-xs min-h-[60px]" />
                    </div>
                  ))}
                </div>
                {profile.workExperience.length === 0 && <p className="text-center py-8 text-muted-foreground text-sm">No work experience added yet.</p>}
              </div>
            )}

            {/* SKILLS */}
            {activeSection === "skills" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="font-display font-bold text-foreground flex items-center gap-2"><Zap className="w-4 h-4 text-primary" /> Skills</h2>
                  <Button variant="outline" size="sm" className="text-xs font-display gap-1" onClick={addSkill}><Plus className="w-3 h-3" /> Add</Button>
                </div>
                <div className="space-y-3">
                  {profile.skills.map(s => (
                    <div key={s.id} className="bg-card border border-border rounded-xl p-4 flex items-center gap-3">
                      <Input value={s.label} onChange={e => updateSkill(s.id, { label: e.target.value })} placeholder="Skill name" className="font-display text-sm h-8 flex-1" />
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map(level => (
                          <button
                            key={level}
                            onClick={() => updateSkill(s.id, { level })}
                            className={`w-3 h-3 rounded-full transition-colors ${level <= s.level ? "bg-primary" : "bg-muted"}`}
                          />
                        ))}
                      </div>
                      <VisibilityToggle isPublic={s.isPublic} onToggle={() => updateSkill(s.id, { isPublic: !s.isPublic })} />
                      <button onClick={() => removeSkill(s.id)} className="text-muted-foreground hover:text-destructive"><Trash2 className="w-3.5 h-3.5" /></button>
                    </div>
                  ))}
                </div>
                {profile.skills.length === 0 && <p className="text-center py-8 text-muted-foreground text-sm">No skills added yet.</p>}
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default ProfileEdit;
