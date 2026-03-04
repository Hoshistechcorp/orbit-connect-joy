import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, ArrowRight, Calendar, Gift, Camera, Heart,
  GraduationCap, PartyPopper, Baby, Users, MapPin,
  Clock, DollarSign, Link2, Check, Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";

const TEMPLATES = [
  { id: "birthday", label: "Birthday", emoji: "🎂", icon: PartyPopper, desc: "Celebrate another trip around the sun", color: "bg-pink-500/10 text-pink-500 border-pink-500/20" },
  { id: "wedding", label: "Wedding", emoji: "💍", icon: Heart, desc: "Your special day, beautifully organized", color: "bg-rose-500/10 text-rose-500 border-rose-500/20" },
  { id: "baby-shower", label: "Baby Shower", emoji: "🍼", icon: Baby, desc: "Welcome the newest arrival", color: "bg-sky-500/10 text-sky-500 border-sky-500/20" },
  { id: "graduation", label: "Graduation", emoji: "🎓", icon: GraduationCap, desc: "Celebrate academic achievement", color: "bg-purple-500/10 text-purple-500 border-purple-500/20" },
  { id: "fundraiser", label: "Fundraiser", emoji: "💰", icon: DollarSign, desc: "Rally support for a cause", color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" },
  { id: "gathering", label: "Gathering", emoji: "🎉", icon: Users, desc: "Any occasion worth sharing", color: "bg-secondary/10 text-secondary border-secondary/20" },
];

const FEATURES = [
  { id: "rsvp", label: "RSVPs", icon: Users, desc: "Collect guest responses" },
  { id: "wishlist", label: "Wishlist", icon: Gift, desc: "Gift registry & funding" },
  { id: "donations", label: "Donations", icon: DollarSign, desc: "Accept contributions" },
  { id: "photos", label: "Photo Gallery", icon: Camera, desc: "Shared photo album" },
];

const CreateAuraLink = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [features, setFeatures] = useState<string[]>(["rsvp"]);
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

  const toggleFeature = (id: string) => {
    setFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const updateForm = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const canProceed = () => {
    if (step === 1) return !!selectedTemplate;
    if (step === 2) return form.title.trim() !== "" && form.date !== "";
    return true;
  };

  const handleCreate = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
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
          <span className="text-xs text-muted-foreground font-display">
            Step {step} of {totalSteps}
          </span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-10">
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
                <h1 className="font-display text-2xl font-bold text-foreground">Choose a Template</h1>
                <p className="text-muted-foreground text-sm mt-2">
                  Pick the type of event for your AuraLink
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
                <h1 className="font-display text-2xl font-bold text-foreground">Event Details</h1>
                <p className="text-muted-foreground text-sm mt-2">
                  Tell us about your {TEMPLATES.find((t) => t.id === selectedTemplate)?.label || "event"}
                </p>
              </div>

              <Card>
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

          {/* Step 3: Features & Review */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="text-center mb-8">
                <h1 className="font-display text-2xl font-bold text-foreground">Enable Features</h1>
                <p className="text-muted-foreground text-sm mt-2">
                  Choose what your guests can do on your AuraLink
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {FEATURES.map((f) => {
                  const active = features.includes(f.id);
                  return (
                    <Card
                      key={f.id}
                      className={`cursor-pointer transition-all ${
                        active
                          ? "border-primary ring-2 ring-primary/20"
                          : "border-border hover:border-primary/30"
                      }`}
                      onClick={() => toggleFeature(f.id)}
                    >
                      <CardContent className="p-4 flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          active ? "bg-primary/10" : "bg-muted"
                        }`}>
                          <f.icon className={`w-5 h-5 ${active ? "text-primary" : "text-muted-foreground"}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-display font-semibold text-sm text-foreground">{f.label}</h3>
                          <p className="text-xs text-muted-foreground">{f.desc}</p>
                        </div>
                        {active && (
                          <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                            <Check className="w-3 h-3 text-primary-foreground" />
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <Separator className="mb-8" />

              {/* Review Summary */}
              <Card className="bg-muted/30">
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
              <Link2 className="w-4 h-4" /> Create AuraLink
            </Button>
          )}
        </div>
      </main>
    </div>
  );
};

export default CreateAuraLink;
