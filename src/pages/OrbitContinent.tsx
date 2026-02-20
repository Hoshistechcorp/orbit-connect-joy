import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar, MapPin, Heart, GraduationCap, Lock, ArrowRight,
  Star, Users, ChevronLeft, Search, Filter, Eye
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import AccountTypeModal from "@/components/orbit/AccountTypeModal";

const CONTINENT_DATA: Record<string, { emoji: string; tagline: string; color: string }> = {
  africa: { emoji: "🌍", tagline: "Vibrant cultures, boundless adventures", color: "from-amber-500/20 to-orange-500/10" },
  asia: { emoji: "🌏", tagline: "Ancient wisdom meets modern wonder", color: "from-red-500/20 to-pink-500/10" },
  europe: { emoji: "🌍", tagline: "Heritage, innovation, and charm", color: "from-blue-500/20 to-indigo-500/10" },
  "north-america": { emoji: "🌎", tagline: "Endless horizons, diverse experiences", color: "from-emerald-500/20 to-teal-500/10" },
  "south-america": { emoji: "🌎", tagline: "Rhythm, passion, and natural beauty", color: "from-yellow-500/20 to-lime-500/10" },
  oceania: { emoji: "🌏", tagline: "Island dreams and coastal vibes", color: "from-cyan-500/20 to-sky-500/10" },
};

const CATEGORIES = [
  { id: "events", label: "Events", icon: Calendar, count: 12 },
  { id: "places", label: "Places", icon: MapPin, count: 18 },
  { id: "wellness", label: "Wellness", icon: Heart, count: 8 },
  { id: "institute", label: "Institute", icon: GraduationCap, count: 6 },
];

const PREVIEW_ITEMS = [
  { title: "Sunset Cultural Festival", category: "events", image: "🎭", rating: 4.9, attendees: 320, locked: false },
  { title: "Artisan Market Walk", category: "events", image: "🛍️", rating: 4.7, attendees: 145, locked: false },
  { title: "Mountain Retreat Lodge", category: "places", image: "🏔️", rating: 4.8, attendees: 67, locked: false },
  { title: "Heritage Cooking Class", category: "events", image: "🍲", rating: 4.9, attendees: 42, locked: true },
  { title: "Oceanfront Wellness Spa", category: "wellness", image: "🧖", rating: 4.8, attendees: 89, locked: true },
  { title: "Wildlife Photography Tour", category: "places", image: "📸", rating: 4.6, attendees: 56, locked: true },
  { title: "Digital Nomad Hub", category: "institute", image: "💻", rating: 4.7, attendees: 203, locked: true },
  { title: "Traditional Dance Workshop", category: "events", image: "💃", rating: 4.5, attendees: 78, locked: true },
];

const OrbitContinent = () => {
  const { continent } = useParams<{ continent: string }>();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");
  const [showModal, setShowModal] = useState(false);

  const continentKey = continent?.toLowerCase() || "africa";
  const data = CONTINENT_DATA[continentKey] || CONTINENT_DATA.africa;
  const displayName = continentKey.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase());

  const filteredItems = activeCategory === "all"
    ? PREVIEW_ITEMS
    : PREVIEW_ITEMS.filter((item) => item.category === activeCategory);

  const handleLockedClick = () => setShowModal(true);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero banner */}
      <div className={`relative bg-gradient-to-br ${data.color} border-b border-border`}>
        <div className="max-w-5xl mx-auto px-4 pt-16 pb-10">
          <button
            onClick={() => navigate("/detect")}
            className="flex items-center gap-1 text-muted-foreground hover:text-foreground text-sm mb-6 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Change region
          </button>

          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{data.emoji}</span>
            <div>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
                {displayName} Orbit
              </h1>
              <p className="text-muted-foreground mt-1">{data.tagline}</p>
            </div>
          </div>

          {/* Search bar */}
          <div className="relative mt-6 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder={`Search ${displayName}...`}
              className="w-full pl-10 pr-10 py-3 rounded-xl bg-background/80 backdrop-blur border border-border text-sm font-display text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <Filter className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 py-6">
        {/* Category pills */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full text-sm font-display font-semibold whitespace-nowrap transition-all ${
              activeCategory === "all"
                ? "bg-foreground text-background"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            All ({PREVIEW_ITEMS.length})
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-display font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? "bg-foreground text-background"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              <cat.icon className="w-3.5 h-3.5" />
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>

        {/* Limited access banner */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20 mb-6"
        >
          <Eye className="w-5 h-5 text-primary flex-shrink-0" />
          <div className="flex-1">
            <p className="text-sm font-display font-semibold text-foreground">
              You're viewing a limited preview
            </p>
            <p className="text-xs text-muted-foreground">
              Sign up to unlock all experiences, save favorites, and join events
            </p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 rounded-full bg-foreground text-background text-xs font-display font-semibold whitespace-nowrap"
          >
            Sign Up Free
          </button>
        </motion.div>

        {/* Items grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              onClick={item.locked ? handleLockedClick : undefined}
              className={`relative bg-card border border-border rounded-2xl p-4 transition-all group ${
                item.locked
                  ? "cursor-pointer hover:border-primary/30"
                  : "hover:border-primary/30 hover:shadow-sm cursor-pointer"
              }`}
            >
              {/* Lock overlay */}
              {item.locked && (
                <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] rounded-2xl z-10 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                      <Lock className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <p className="text-xs font-display font-semibold text-muted-foreground">
                      Sign up to unlock
                    </p>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-3">
                <span className="text-3xl">{item.image}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground capitalize mt-0.5">{item.category}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Users className="w-3 h-3" /> {item.attendees}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-ibloov-orange">
                      <Star className="w-3 h-3 fill-current" /> {item.rating}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10 mb-6"
        >
          <p className="text-muted-foreground text-sm mb-4 font-display">
            Ready to explore everything {displayName} has to offer?
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-display font-semibold text-sm"
          >
            Join {displayName} Orbit
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </main>

      {/* Account type modal */}
      <AccountTypeModal
        open={showModal}
        onClose={() => setShowModal(false)}
        continent={displayName}
      />
    </div>
  );
};

export default OrbitContinent;
