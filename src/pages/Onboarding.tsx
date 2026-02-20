import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar, MapPin, Heart, GraduationCap, Music, Utensils, Camera, Palette,
  Dumbbell, BookOpen, Briefcase, Globe, Rocket, Code, PenTool, Users,
  ArrowRight, ArrowLeft, Check, Sparkles
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

// Step 1: Interests
const INTERESTS = [
  { id: "events", label: "Events & Festivals", icon: Calendar, color: "bg-ibloov-blue/10 text-ibloov-blue border-ibloov-blue/20" },
  { id: "travel", label: "Travel & Explore", icon: Globe, color: "bg-ibloov-orange/10 text-ibloov-orange border-ibloov-orange/20" },
  { id: "food", label: "Food & Dining", icon: Utensils, color: "bg-amber-500/10 text-amber-600 border-amber-500/20" },
  { id: "wellness", label: "Wellness & Health", icon: Heart, color: "bg-pink-500/10 text-pink-500 border-pink-500/20" },
  { id: "music", label: "Music & Concerts", icon: Music, color: "bg-purple-500/10 text-purple-500 border-purple-500/20" },
  { id: "fitness", label: "Fitness & Sports", icon: Dumbbell, color: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" },
  { id: "arts", label: "Arts & Culture", icon: Palette, color: "bg-rose-500/10 text-rose-500 border-rose-500/20" },
  { id: "photography", label: "Photography", icon: Camera, color: "bg-sky-500/10 text-sky-500 border-sky-500/20" },
  { id: "learning", label: "Learning & Courses", icon: BookOpen, color: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20" },
  { id: "nightlife", label: "Nightlife", icon: Sparkles, color: "bg-violet-500/10 text-violet-500 border-violet-500/20" },
  { id: "places", label: "Hidden Gems", icon: MapPin, color: "bg-teal-500/10 text-teal-600 border-teal-500/20" },
  { id: "social", label: "Social & Community", icon: Users, color: "bg-cyan-500/10 text-cyan-600 border-cyan-500/20" },
];

// Step 2: Skills
const SKILLS = [
  { id: "design", label: "Design", icon: PenTool },
  { id: "coding", label: "Coding", icon: Code },
  { id: "marketing", label: "Marketing", icon: Rocket },
  { id: "business", label: "Business", icon: Briefcase },
  { id: "teaching", label: "Teaching", icon: GraduationCap },
  { id: "photography", label: "Photography", icon: Camera },
  { id: "writing", label: "Writing", icon: BookOpen },
  { id: "music", label: "Music", icon: Music },
];

// Step 3: Preferences
const VIBES = [
  { id: "solo", label: "Solo adventures", emoji: "🧘" },
  { id: "social", label: "Group experiences", emoji: "🎉" },
  { id: "romantic", label: "Date ideas", emoji: "💕" },
  { id: "family", label: "Family-friendly", emoji: "👨‍👩‍👧‍👦" },
];

const BUDGETS = [
  { id: "free", label: "Free & Low-cost", emoji: "🆓" },
  { id: "mid", label: "Mid-range", emoji: "💰" },
  { id: "premium", label: "Premium", emoji: "✨" },
  { id: "any", label: "Any budget", emoji: "🌈" },
];

const Onboarding = () => {
  const navigate = useNavigate();
  const loc = useLocation();
  const user = loc.state?.user || { name: "Explorer" };
  const continent = loc.state?.continent || "";

  const [step, setStep] = useState(0);
  const [interests, setInterests] = useState<string[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [vibe, setVibe] = useState("");
  const [budget, setBudget] = useState("");

  const toggleItem = (list: string[], setList: (v: string[]) => void, id: string) => {
    setList(list.includes(id) ? list.filter((i) => i !== id) : [...list, id]);
  };

  const canProceed = () => {
    if (step === 0) return interests.length >= 3;
    if (step === 1) return skills.length >= 1;
    if (step === 2) return vibe && budget;
    return false;
  };

  const handleFinish = () => {
    navigate("/dashboard", {
      state: {
        user,
        location: { city: "", continent },
        onboarding: { interests, skills, vibe, budget },
      },
    });
  };

  const STEPS = [
    { title: "What are you into?", subtitle: "Pick at least 3 interests" },
    { title: "What can you share?", subtitle: "Select your skills (pick 1+)" },
    { title: "Your vibe & budget", subtitle: "Help us personalize your feed" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg"
      >
        {/* Progress */}
        <div className="flex items-center gap-2 mb-8">
          {STEPS.map((_, i) => (
            <div key={i} className="flex-1 h-1.5 rounded-full overflow-hidden bg-muted">
              <motion.div
                className="h-full bg-foreground rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: i <= step ? "100%" : "0%" }}
                transition={{ duration: 0.4 }}
              />
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <div className="text-center mb-6">
              <p className="text-xs text-muted-foreground font-display font-semibold uppercase tracking-wider mb-1">
                Step {step + 1} of 3
              </p>
              <h1 className="font-display text-2xl font-bold text-foreground">
                {STEPS[step].title}
              </h1>
              <p className="text-sm text-muted-foreground mt-1">{STEPS[step].subtitle}</p>
            </div>

            {/* Step 0: Interests */}
            {step === 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {INTERESTS.map((item) => {
                  const selected = interests.includes(item.id);
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => toggleItem(interests, setInterests, item.id)}
                      className={`flex items-center gap-2 px-3 py-3 rounded-xl border text-sm font-display font-medium transition-all ${
                        selected
                          ? "bg-foreground text-background border-foreground"
                          : `${item.color} hover:opacity-80`
                      }`}
                      whileTap={{ scale: 0.95 }}
                    >
                      {selected ? (
                        <Check className="w-4 h-4 flex-shrink-0" />
                      ) : (
                        <item.icon className="w-4 h-4 flex-shrink-0" />
                      )}
                      <span className="truncate text-xs">{item.label}</span>
                    </motion.button>
                  );
                })}
              </div>
            )}

            {/* Step 1: Skills */}
            {step === 1 && (
              <div className="grid grid-cols-2 gap-3">
                {SKILLS.map((item) => {
                  const selected = skills.includes(item.id);
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => toggleItem(skills, setSkills, item.id)}
                      className={`flex items-center gap-2.5 px-4 py-3.5 rounded-xl border text-sm font-display font-medium transition-all ${
                        selected
                          ? "bg-foreground text-background border-foreground"
                          : "bg-card border-border text-foreground hover:border-primary/30"
                      }`}
                      whileTap={{ scale: 0.95 }}
                    >
                      {selected ? <Check className="w-4 h-4" /> : <item.icon className="w-4 h-4 text-muted-foreground" />}
                      {item.label}
                    </motion.button>
                  );
                })}
              </div>
            )}

            {/* Step 2: Vibe & Budget */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-display font-semibold text-foreground mb-3">
                    Your ideal experience vibe
                  </p>
                  <div className="grid grid-cols-2 gap-2.5">
                    {VIBES.map((v) => (
                      <motion.button
                        key={v.id}
                        onClick={() => setVibe(v.id)}
                        className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-display font-medium transition-all ${
                          vibe === v.id
                            ? "bg-foreground text-background border-foreground"
                            : "bg-card border-border text-foreground hover:border-primary/30"
                        }`}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>{v.emoji}</span>
                        {v.label}
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-display font-semibold text-foreground mb-3">
                    Budget preference
                  </p>
                  <div className="grid grid-cols-2 gap-2.5">
                    {BUDGETS.map((b) => (
                      <motion.button
                        key={b.id}
                        onClick={() => setBudget(b.id)}
                        className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-display font-medium transition-all ${
                          budget === b.id
                            ? "bg-foreground text-background border-foreground"
                            : "bg-card border-border text-foreground hover:border-primary/30"
                        }`}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>{b.emoji}</span>
                        {b.label}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <div className="flex items-center gap-3 mt-8">
          {step > 0 && (
            <button
              onClick={() => setStep(step - 1)}
              className="flex items-center gap-1 px-5 py-3 rounded-full border border-border text-sm font-display font-semibold text-foreground hover:bg-muted transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          )}

          <motion.button
            onClick={step === 2 ? handleFinish : () => setStep(step + 1)}
            disabled={!canProceed()}
            className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full font-display font-semibold text-sm transition-all ${
              canProceed()
                ? "bg-foreground text-background"
                : "bg-muted text-muted-foreground cursor-not-allowed"
            }`}
            whileHover={canProceed() ? { scale: 1.02 } : {}}
            whileTap={canProceed() ? { scale: 0.97 } : {}}
          >
            {step === 2 ? "Enter My Orbit" : "Continue"}
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Skip */}
        {step < 2 && (
          <button
            onClick={() => setStep(step + 1)}
            className="w-full text-center text-xs text-muted-foreground hover:text-foreground mt-4 transition-colors"
          >
            Skip for now
          </button>
        )}
      </motion.div>
    </div>
  );
};

export default Onboarding;
