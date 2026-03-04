import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, ArrowRight, Calendar, Gift, Camera, Heart,
  GraduationCap, PartyPopper, Baby, Users, MapPin,
  Clock, DollarSign, Link2, Check, Sparkles, FileText,
  Compass, Zap, Crown, Lock, ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";

const MAX_FREE_LINKS = 3;
const EXISTING_LINKS_COUNT = 2; // Mock: user already has 2 links

const TEMPLATES = [
  { id: "blank", label: "Blank Canvas", emoji: "✨", icon: FileText, desc: "Start from scratch with a custom template", color: "bg-muted text-foreground border-border" },
  { id: "events", label: "Events", emoji: "🎉", icon: PartyPopper, desc: "Concerts, meetups, parties & celebrations", color: "bg-primary/10 text-primary border-primary/20" },
  { id: "places", label: "Places", emoji: "📍", icon: MapPin, desc: "Venues, restaurants, travel destinations", color: "bg-secondary/10 text-secondary border-secondary/20" },
  { id: "wellness", label: "Wellness", emoji: "🧘", icon: Heart, desc: "Yoga, retreats, meditation & health", color: "bg-pink-500/10 text-pink-500 border-pink-500/20" },
  { id: "institute", label: "Institute", emoji: "🎓", icon: GraduationCap, desc: "Courses, workshops & learning programs", color: "bg-purple-500/10 text-purple-500 border-purple-500/20" },
  { id: "fundraiser", label: "Fundraiser", emoji: "💰", icon: DollarSign, desc: "Rally support & collect contributions", color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" },
  { id: "wedding", label: "Wedding", emoji: "💍", icon: Heart, desc: "Your special day, beautifully organized", color: "bg-rose-500/10 text-rose-500 border-rose-500/20" },
  { id: "baby-shower", label: "Baby Shower", emoji: "🍼", icon: Baby, desc: "Welcome the newest arrival", color: "bg-sky-500/10 text-sky-500 border-sky-500/20" },
];

const FEATURES = [
  { id: "rsvp", label: "RSVPs", icon: Users, desc: "Collect guest responses", placeholder: "https://your-rsvp-form.com" },
  { id: "wishlist", label: "Wishlist", icon: Gift, desc: "Gift registry & funding", placeholder: "https://your-registry-link.com" },
  { id: "donations", label: "Donations", icon: DollarSign, desc: "Accept contributions", placeholder: "https://your-payment-link.com" },
  { id: "photos", label: "Photo Gallery", icon: Camera, desc: "Shared photo album", placeholder: "https://your-photo-album.com" },
  { id: "directions", label: "Directions", icon: Compass, desc: "Location & maps", placeholder: "https://maps.google.com/..." },
  { id: "livestream", label: "Livestream", icon: Zap, desc: "Watch remotely", placeholder: "https://your-stream-link.com" },
];

const PLANS = [
  { id: "starter", name: "Starter", price: "$4.99/mo", features: ["Up to 10 AuraLinks", "All templates", "Basic analytics"], color: "border-primary/30" },
  { id: "pro", name: "Pro", price: "$12.99/mo", features: ["Unlimited AuraLinks", "Custom branding", "Advanced analytics", "Priority support"], color: "border-secondary ring-2 ring-secondary/20", popular: true },
  { id: "business", name: "Business", price: "$29.99/mo", features: ["Everything in Pro", "Team collaboration", "API access", "White-label"], color: "border-border" },
];

const CreateAuraLink = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [features, setFeatures] = useState<string[]>(["rsvp"]);
  const [featureLinks, setFeatureLinks] = useState<Record<string, string>>({});
  const [showUpgrade, setShowUpgrade] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    rsvpLimit: "",
    donationGoal: "",
  });

  const totalSteps = 3;
  const isAtLimit = EXISTING_LINKS_COUNT >= MAX_FREE_LINKS;

  const toggleFeature = (id: string) => {
    setFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const updateForm = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const updateFeatureLink = (featureId: string, url: string) => {
    setFeatureLinks((prev) => ({ ...prev, [featureId]: url }));
  };

  const canProceed = () => {
    if (step === 1) return !!selectedTemplate;
    if (step === 2) return form.title.trim() !== "" && form.date !== "";
    return true;
  };

  const handleCreate = () => {
    if (isAtLimit) {
      setShowUpgrade(true);
      return;
    }
    const slug = form.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    toast({
      title: "AuraLink Created! 🎉",
      description: `Your link is live at /aura/${slug}`,
    });

    navigate(`/dashboard/${slug}`);
  };

  // Upgrade modal
  if (showUpgrade) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
          <div className="max-w-4xl mx-auto px-4 h-14 flex items-center">
            <button onClick={() => setShowUpgrade(false)} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-display">
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 py-16 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-5">
              <Crown className="w-8 h-8 text-secondary" />
            </div>
            <h1 className="font-display text-3xl font-bold text-foreground">Upgrade Your Plan</h1>
            <p className="text-muted-foreground mt-3 max-w-md mx-auto">
              You've used your {MAX_FREE_LINKS} free AuraLinks. Unlock unlimited links and premium features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PLANS.map((plan, i) => (
              <motion.div key={plan.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <Card className={`relative h-full ${plan.color} hover:shadow-lg transition-all`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-secondary text-secondary-foreground font-display text-xs">Most Popular</Badge>
                    </div>
                  )}
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="font-display font-bold text-lg text-foreground">{plan.name}</h3>
                    <p className="font-display font-bold text-3xl text-foreground mt-2">{plan.price}</p>
                    <ul className="mt-5 space-y-3 flex-1">
                      {plan.features.map((f) => (
                        <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                          <Check className="w-4 h-4 text-primary shrink-0" /> {f}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`rounded-full font-display mt-6 w-full ${plan.popular ? '' : ''}`}
                      variant={plan.popular ? "default" : "outline"}
                      onClick={() => toast({ title: "Coming soon!", description: "Subscriptions will be available soon." })}
                    >
                      Get {plan.name}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/3 to-secondary/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-pink-500/3 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
          <button
            onClick={() => (step > 1 ? setStep(step - 1) : navigate("/dashboard"))}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-display"
          >
            <ArrowLeft className="w-4 h-4" /> {step > 1 ? "Back" : "Dashboard"}
          </button>
          <div className="flex items-center gap-2">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i + 1 <= step ? "w-8 bg-primary" : "w-4 bg-muted"
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="font-display text-[10px] gap-1">
              {EXISTING_LINKS_COUNT}/{MAX_FREE_LINKS} Free
            </Badge>
            <span className="text-xs text-muted-foreground font-display">
              Step {step}/{totalSteps}
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-10 relative z-10">
        <AnimatePresence mode="wait">
          {/* Step 1: Template Selection */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="text-center mb-8">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h1 className="font-display text-2xl font-bold text-foreground">Choose a Template</h1>
                <p className="text-muted-foreground text-sm mt-2">
                  Pick the type that fits your AuraLink — or start blank
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {TEMPLATES.map((t) => (
                  <Card
                    key={t.id}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      selectedTemplate === t.id
                        ? "border-primary ring-2 ring-primary/20"
                        : "border-border hover:border-primary/30"
                    }`}
                    onClick={() => setSelectedTemplate(t.id)}
                  >
                    <CardContent className="p-5 flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl border ${t.color}`}>
                        {t.emoji}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-display font-bold text-foreground">{t.label}</h3>
                          {selectedTemplate === t.id && (
                            <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                              <Check className="w-3 h-3 text-primary-foreground" />
                            </div>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{t.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 2: Event Details */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="text-center mb-8">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-secondary" />
                </div>
                <h1 className="font-display text-2xl font-bold text-foreground">Event Details</h1>
                <p className="text-muted-foreground text-sm mt-2">
                  Tell us about your {TEMPLATES.find((t) => t.id === selectedTemplate)?.label || "event"}
                </p>
              </div>

              <Card className="backdrop-blur-sm bg-card/80">
                <CardContent className="p-6 space-y-5">
                  <div>
                    <Label htmlFor="title" className="font-display text-sm font-semibold">Event Title *</Label>
                    <Input
                      id="title"
                      placeholder="e.g. Maya Turns 30"
                      value={form.title}
                      onChange={(e) => updateForm("title", e.target.value)}
                      className="mt-1.5"
                    />
                  </div>

                  <div>
                    <Label htmlFor="description" className="font-display text-sm font-semibold">Description</Label>
                    <Input
                      id="description"
                      placeholder="A brief description of your event"
                      value={form.description}
                      onChange={(e) => updateForm("description", e.target.value)}
                      className="mt-1.5"
                    />
                  </div>

                  <Separator />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date" className="font-display text-sm font-semibold flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" /> Date *
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        value={form.date}
                        onChange={(e) => updateForm("date", e.target.value)}
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="time" className="font-display text-sm font-semibold flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" /> Time
                      </Label>
                      <Input
                        id="time"
                        type="time"
                        value={form.time}
                        onChange={(e) => updateForm("time", e.target.value)}
                        className="mt-1.5"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="location" className="font-display text-sm font-semibold flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" /> Location
                    </Label>
                    <Input
                      id="location"
                      placeholder="Venue or address"
                      value={form.location}
                      onChange={(e) => updateForm("location", e.target.value)}
                      className="mt-1.5"
                    />
                  </div>

                  <Separator />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="rsvpLimit" className="font-display text-sm font-semibold flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" /> RSVP Limit
                      </Label>
                      <Input
                        id="rsvpLimit"
                        type="number"
                        placeholder="e.g. 50"
                        value={form.rsvpLimit}
                        onChange={(e) => updateForm("rsvpLimit", e.target.value)}
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="donationGoal" className="font-display text-sm font-semibold flex items-center gap-1.5">
                        <DollarSign className="w-3.5 h-3.5" /> Donation Goal
                      </Label>
                      <Input
                        id="donationGoal"
                        type="number"
                        placeholder="e.g. 2000"
                        value={form.donationGoal}
                        onChange={(e) => updateForm("donationGoal", e.target.value)}
                        className="mt-1.5"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Step 3: Features & Links */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="text-center mb-8">
                <div className="w-12 h-12 rounded-2xl bg-pink-500/10 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-pink-500" />
                </div>
                <h1 className="font-display text-2xl font-bold text-foreground">Enable Features</h1>
                <p className="text-muted-foreground text-sm mt-2">
                  Choose what your guests can do — and paste links for each
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {FEATURES.map((f) => {
                  const active = features.includes(f.id);
                  return (
                    <Card
                      key={f.id}
                      className={`transition-all ${
                        active
                          ? "border-primary ring-2 ring-primary/20"
                          : "border-border hover:border-primary/30"
                      }`}
                    >
                      <CardContent className="p-4">
                        <div
                          className="flex items-center gap-4 cursor-pointer"
                          onClick={() => toggleFeature(f.id)}
                        >
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                            active ? "bg-primary/10" : "bg-muted"
                          }`}>
                            <f.icon className={`w-5 h-5 ${active ? "text-primary" : "text-muted-foreground"}`} />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-display font-semibold text-sm text-foreground">{f.label}</h3>
                            <p className="text-xs text-muted-foreground">{f.desc}</p>
                          </div>
                          {active && (
                            <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                              <Check className="w-3 h-3 text-primary-foreground" />
                            </div>
                          )}
                        </div>

                        {/* Link input for active features */}
                        <AnimatePresence>
                          {active && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="mt-3 pt-3 border-t border-border">
                                <Label className="font-display text-xs text-muted-foreground flex items-center gap-1.5 mb-1.5">
                                  <ExternalLink className="w-3 h-3" /> Link / URL (optional)
                                </Label>
                                <Input
                                  placeholder={f.placeholder}
                                  value={featureLinks[f.id] || ""}
                                  onChange={(e) => updateFeatureLink(f.id, e.target.value)}
                                  className="text-sm"
                                  onClick={(e) => e.stopPropagation()}
                                />
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <Separator className="mb-8" />

              {/* Review Summary */}
              <Card className="bg-card/60 backdrop-blur-sm border-primary/10">
                <CardContent className="p-6">
                  <h3 className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" /> Review
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Template</span>
                      <Badge variant="outline" className="font-display">
                        {TEMPLATES.find((t) => t.id === selectedTemplate)?.emoji}{" "}
                        {TEMPLATES.find((t) => t.id === selectedTemplate)?.label}
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Title</span>
                      <span className="font-display font-semibold text-foreground">{form.title || "—"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Date</span>
                      <span className="text-foreground">{form.date || "—"}</span>
                    </div>
                    {form.location && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Location</span>
                        <span className="text-foreground">{form.location}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Features</span>
                      <div className="flex gap-1 flex-wrap justify-end">
                        {features.map((f) => (
                          <Badge key={f} variant="secondary" className="text-[10px]">
                            {FEATURES.find((ft) => ft.id === f)?.label}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Your link</span>
                      <code className="text-xs font-mono text-primary">
                        /aura/{form.title ? form.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") : "..."}
                      </code>
                    </div>
                  </div>

                  {/* Free limit warning */}
                  {isAtLimit && (
                    <div className="mt-5 p-3 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center gap-3">
                      <Lock className="w-5 h-5 text-secondary shrink-0" />
                      <div>
                        <p className="font-display font-semibold text-sm text-foreground">Free limit reached</p>
                        <p className="text-xs text-muted-foreground">You've used {EXISTING_LINKS_COUNT}/{MAX_FREE_LINKS} free links. Upgrade to continue.</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation buttons */}
        <div className="flex items-center justify-between mt-10">
          <Button
            variant="outline"
            className="rounded-full font-display gap-2"
            onClick={() => (step > 1 ? setStep(step - 1) : navigate("/dashboard"))}
          >
            <ArrowLeft className="w-4 h-4" /> {step > 1 ? "Back" : "Cancel"}
          </Button>

          {step < totalSteps ? (
            <Button
              className="rounded-full font-display gap-2"
              onClick={() => setStep(step + 1)}
              disabled={!canProceed()}
            >
              Continue <ArrowRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              className="rounded-full font-display gap-2"
              onClick={handleCreate}
              disabled={!canProceed()}
            >
              {isAtLimit ? (
                <>
                  <Crown className="w-4 h-4" /> Upgrade to Create
                </>
              ) : (
                <>
                  <Link2 className="w-4 h-4" /> Create AuraLink
                </>
              )}
            </Button>
          )}
        </div>
      </main>
    </div>
  );
};

export default CreateAuraLink;
