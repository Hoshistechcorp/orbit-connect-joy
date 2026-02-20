import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2, MapPin, Users, ShoppingBag, ArrowRight, ArrowLeft,
  Check, Upload, Plus, X, Globe, Mail, Phone, Briefcase,
  Calendar, Heart, GraduationCap, Trash2
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

// Step 1: Verify Business
const INDUSTRIES = [
  "Hospitality & Tourism", "Events & Entertainment", "Food & Beverage",
  "Health & Wellness", "Education & Training", "Real Estate",
  "Retail & Shopping", "Sports & Fitness", "Arts & Culture", "Other",
];

const COMPANY_SIZES = [
  { id: "1-10", label: "1–10" },
  { id: "11-50", label: "11–50" },
  { id: "51-200", label: "51–200" },
  { id: "201-1000", label: "201–1,000" },
  { id: "1000+", label: "1,000+" },
];

// Step 4: Products
const PRODUCTS = [
  { id: "events", label: "iBloov Events", desc: "Host & manage events", icon: Calendar, color: "text-ibloov-blue bg-ibloov-blue/10 border-ibloov-blue/20" },
  { id: "places", label: "iBloov Places", desc: "List venues & locations", icon: MapPin, color: "text-ibloov-orange bg-ibloov-orange/10 border-ibloov-orange/20" },
  { id: "wellness", label: "iBloov Wellness", desc: "Wellness programs", icon: Heart, color: "text-pink-500 bg-pink-500/10 border-pink-500/20" },
  { id: "institute", label: "iBloov Institute", desc: "Courses & training", icon: GraduationCap, color: "text-purple-500 bg-purple-500/10 border-purple-500/20" },
];

interface Venue {
  name: string;
  address: string;
  type: string;
}

interface TeamMember {
  name: string;
  email: string;
  role: string;
}

const VENUE_TYPES = ["Restaurant", "Hotel", "Event Space", "Gym/Studio", "Office", "Retail Store", "Other"];
const TEAM_ROLES = ["Admin", "Manager", "Coordinator", "Staff"];

const EnterpriseOnboarding = () => {
  const navigate = useNavigate();
  const loc = useLocation();
  const user = loc.state?.user || { name: "Admin", company: "Company" };

  const [step, setStep] = useState(0);

  // Step 1 state
  const [business, setBusiness] = useState({
    legalName: user.company || "",
    website: "",
    industry: "",
    size: "",
    taxId: "",
    phone: "",
    address: "",
  });

  // Step 2 state
  const [venues, setVenues] = useState<Venue[]>([{ name: "", address: "", type: "" }]);

  // Step 3 state
  const [team, setTeam] = useState<TeamMember[]>([{ name: "", email: "", role: "Manager" }]);

  // Step 4 state
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const STEPS = [
    { title: "Verify Your Business", subtitle: "Tell us about your company", icon: Building2 },
    { title: "Add Venues / Locations", subtitle: "Where do you operate?", icon: MapPin },
    { title: "Team Setup", subtitle: "Invite your team members", icon: Users },
    { title: "Select Products", subtitle: "Choose the tools you need", icon: ShoppingBag },
  ];

  const canProceed = () => {
    if (step === 0) return business.legalName && business.industry && business.size;
    if (step === 1) return venues.some((v) => v.name && v.address);
    if (step === 2) return true; // optional
    if (step === 3) return selectedProducts.length >= 1;
    return false;
  };

  const handleFinish = () => {
    navigate("/dashboard/enterprise", {
      state: { user, business, venues, team, selectedProducts },
    });
  };

  const addVenue = () => setVenues([...venues, { name: "", address: "", type: "" }]);
  const removeVenue = (i: number) => setVenues(venues.filter((_, idx) => idx !== i));
  const updateVenue = (i: number, field: keyof Venue, value: string) => {
    const updated = [...venues];
    updated[i] = { ...updated[i], [field]: value };
    setVenues(updated);
  };

  const addTeamMember = () => setTeam([...team, { name: "", email: "", role: "Staff" }]);
  const removeTeamMember = (i: number) => setTeam(team.filter((_, idx) => idx !== i));
  const updateTeamMember = (i: number, field: keyof TeamMember, value: string) => {
    const updated = [...team];
    updated[i] = { ...updated[i], [field]: value };
    setTeam(updated);
  };

  const toggleProduct = (id: string) => {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-background flex items-start justify-center px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-xl"
      >
        {/* Progress bar */}
        <div className="flex items-center gap-2 mb-2">
          {STEPS.map((s, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full h-1.5 rounded-full overflow-hidden bg-muted">
                <motion.div
                  className="h-full bg-foreground rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: i <= step ? "100%" : "0%" }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mb-8">
          {STEPS.map((s, i) => (
            <span
              key={i}
              className={`text-[10px] font-display font-medium ${
                i <= step ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {s.title.split(" ").slice(0, 2).join(" ")}
            </span>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-foreground/10 flex items-center justify-center">
                {(() => { const Icon = STEPS[step].icon; return <Icon className="w-5 h-5 text-foreground" />; })()}
              </div>
              <div>
                <h1 className="font-display text-xl font-bold text-foreground">{STEPS[step].title}</h1>
                <p className="text-sm text-muted-foreground">{STEPS[step].subtitle}</p>
              </div>
            </div>

            {/* STEP 0: Verify Business */}
            {step === 0 && (
              <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Legal Business Name *"
                    value={business.legalName}
                    onChange={(e) => setBusiness({ ...business, legalName: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-muted border border-border text-sm font-display text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>

                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="url"
                    placeholder="Website (optional)"
                    value={business.website}
                    onChange={(e) => setBusiness({ ...business, website: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-muted border border-border text-sm font-display text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>

                <div>
                  <label className="text-xs font-display font-semibold text-foreground mb-2 block">Industry *</label>
                  <div className="flex flex-wrap gap-2">
                    {INDUSTRIES.map((ind) => (
                      <button
                        key={ind}
                        onClick={() => setBusiness({ ...business, industry: ind })}
                        className={`px-3 py-1.5 rounded-full text-xs font-display font-medium border transition-all ${
                          business.industry === ind
                            ? "bg-foreground text-background border-foreground"
                            : "bg-card border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                        }`}
                      >
                        {ind}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-display font-semibold text-foreground mb-2 block">Company Size *</label>
                  <div className="flex gap-2">
                    {COMPANY_SIZES.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setBusiness({ ...business, size: s.id })}
                        className={`flex-1 py-2.5 rounded-xl text-xs font-display font-semibold border transition-all ${
                          business.size === s.id
                            ? "bg-foreground text-background border-foreground"
                            : "bg-card border-border text-muted-foreground hover:border-foreground/30"
                        }`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Tax ID (optional)"
                      value={business.taxId}
                      onChange={(e) => setBusiness({ ...business, taxId: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-muted border border-border text-sm font-display text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="tel"
                      placeholder="Phone"
                      value={business.phone}
                      onChange={(e) => setBusiness({ ...business, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-muted border border-border text-sm font-display text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                </div>

                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <textarea
                    placeholder="Business Address"
                    value={business.address}
                    onChange={(e) => setBusiness({ ...business, address: e.target.value })}
                    rows={2}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-muted border border-border text-sm font-display text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                  />
                </div>

                {/* Logo upload placeholder */}
                <div className="flex items-center gap-3 p-3 rounded-xl border border-dashed border-border hover:border-primary/30 transition-colors cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                    <Upload className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-display font-semibold text-foreground">Upload Logo</p>
                    <p className="text-xs text-muted-foreground">PNG, JPG up to 2MB</p>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 1: Add Venues */}
            {step === 1 && (
              <div className="space-y-3">
                {venues.map((venue, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-card border border-border rounded-2xl p-4 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-display font-semibold text-muted-foreground">
                        Venue {i + 1}
                      </span>
                      {venues.length > 1 && (
                        <button onClick={() => removeVenue(i)} className="p-1 text-muted-foreground hover:text-destructive transition-colors">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>

                    <input
                      type="text"
                      placeholder="Venue Name *"
                      value={venue.name}
                      onChange={(e) => updateVenue(i, "name", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-sm font-display text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />

                    <input
                      type="text"
                      placeholder="Address *"
                      value={venue.address}
                      onChange={(e) => updateVenue(i, "address", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-sm font-display text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />

                    <div className="flex flex-wrap gap-1.5">
                      {VENUE_TYPES.map((type) => (
                        <button
                          key={type}
                          onClick={() => updateVenue(i, "type", type)}
                          className={`px-2.5 py-1 rounded-full text-[11px] font-display font-medium border transition-all ${
                            venue.type === type
                              ? "bg-foreground text-background border-foreground"
                              : "bg-card border-border text-muted-foreground hover:border-foreground/30"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ))}

                <button
                  onClick={addVenue}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-dashed border-border text-sm font-display font-medium text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all"
                >
                  <Plus className="w-4 h-4" />
                  Add Another Venue
                </button>
              </div>
            )}

            {/* STEP 2: Team Setup */}
            {step === 2 && (
              <div className="space-y-3">
                <p className="text-xs text-muted-foreground mb-1">
                  Invite team members to help manage your iBloov presence. You can skip this and add later.
                </p>

                {team.map((member, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-card border border-border rounded-2xl p-4 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-display font-semibold text-muted-foreground">
                        Member {i + 1}
                      </span>
                      {team.length > 1 && (
                        <button onClick={() => removeTeamMember(i)} className="p-1 text-muted-foreground hover:text-destructive transition-colors">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                          type="text"
                          placeholder="Name"
                          value={member.name}
                          onChange={(e) => updateTeamMember(i, "name", e.target.value)}
                          className="w-full pl-10 pr-3 py-3 rounded-xl bg-muted border border-border text-sm font-display text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                        />
                      </div>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                          type="email"
                          placeholder="Email"
                          value={member.email}
                          onChange={(e) => updateTeamMember(i, "email", e.target.value)}
                          className="w-full pl-10 pr-3 py-3 rounded-xl bg-muted border border-border text-sm font-display text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                        />
                      </div>
                    </div>

                    <div className="flex gap-2">
                      {TEAM_ROLES.map((role) => (
                        <button
                          key={role}
                          onClick={() => updateTeamMember(i, "role", role)}
                          className={`flex-1 py-2 rounded-xl text-xs font-display font-semibold border transition-all ${
                            member.role === role
                              ? "bg-foreground text-background border-foreground"
                              : "bg-card border-border text-muted-foreground hover:border-foreground/30"
                          }`}
                        >
                          {role}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ))}

                <button
                  onClick={addTeamMember}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-dashed border-border text-sm font-display font-medium text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all"
                >
                  <Plus className="w-4 h-4" />
                  Add Another Member
                </button>
              </div>
            )}

            {/* STEP 3: Product Selection */}
            {step === 3 && (
              <div className="space-y-3">
                <p className="text-xs text-muted-foreground mb-1">
                  Choose the products your business needs. You can add more later.
                </p>

                {PRODUCTS.map((product) => {
                  const selected = selectedProducts.includes(product.id);
                  return (
                    <motion.button
                      key={product.id}
                      onClick={() => toggleProduct(product.id)}
                      className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all text-left ${
                        selected
                          ? "bg-foreground/5 border-foreground/30"
                          : "bg-card border-border hover:border-foreground/20"
                      }`}
                      whileTap={{ scale: 0.99 }}
                    >
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${product.color}`}>
                        <product.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display font-bold text-sm text-foreground">{product.label}</h3>
                        <p className="text-xs text-muted-foreground">{product.desc}</p>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                        selected ? "bg-foreground border-foreground" : "border-border"
                      }`}>
                        {selected && <Check className="w-3.5 h-3.5 text-background" />}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
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
            onClick={step === 3 ? handleFinish : () => setStep(step + 1)}
            disabled={!canProceed()}
            className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full font-display font-semibold text-sm transition-all ${
              canProceed()
                ? "bg-foreground text-background"
                : "bg-muted text-muted-foreground cursor-not-allowed"
            }`}
            whileHover={canProceed() ? { scale: 1.02 } : {}}
            whileTap={canProceed() ? { scale: 0.97 } : {}}
          >
            {step === 3 ? "Launch Dashboard" : "Continue"}
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        {step === 2 && (
          <button
            onClick={() => setStep(3)}
            className="w-full text-center text-xs text-muted-foreground hover:text-foreground mt-4 transition-colors"
          >
            Skip — I'll add team members later
          </button>
        )}
      </motion.div>
    </div>
  );
};

export default EnterpriseOnboarding;
