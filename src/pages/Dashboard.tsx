import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar, MapPin, Heart, GraduationCap, User, LogOut,
  Bell, Search, Star, Clock, TrendingUp, Users, ChevronRight,
  Compass, Bookmark, Sparkles, Flame, ArrowRight
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const CATEGORIES = [
  { id: "for-you", label: "For You", icon: Sparkles },
  { id: "trending", label: "Trending", icon: Flame },
  { id: "events", label: "Events", icon: Calendar },
  { id: "places", label: "Places", icon: MapPin },
  { id: "wellness", label: "Wellness", icon: Heart },
  { id: "institute", label: "Institute", icon: GraduationCap },
];

const FEATURED = [
  { title: "Weekend Art Festival", subtitle: "This Saturday · 2.4K going", image: "🎨", tag: "Trending", tagColor: "bg-ibloov-orange/10 text-ibloov-orange" },
  { title: "Rooftop Sunset Session", subtitle: "Tomorrow · 489 going", image: "🌅", tag: "New", tagColor: "bg-primary/10 text-primary" },
];

const UPCOMING = [
  { title: "Morning Yoga Flow", time: "Today 7:00 AM", icon: "🧘", category: "Wellness" },
  { title: "Community Potluck", time: "Wed 6:30 PM", icon: "🍲", category: "Events" },
  { title: "Photography Walk", time: "Sat 10:00 AM", icon: "📷", category: "Events" },
];

const RECOMMENDED = [
  { title: "Hidden Jazz Lounge", desc: "Live music every Friday", image: "🎵", rating: 4.9, attendees: 156, category: "places" },
  { title: "Coastal Meditation Retreat", desc: "3-day mindfulness journey", image: "🌊", rating: 4.8, attendees: 42, category: "wellness" },
  { title: "Creative Writing Workshop", desc: "8-week intensive course", image: "✍️", rating: 4.7, attendees: 89, category: "institute" },
  { title: "Night Market Food Tour", desc: "Taste 12 local vendors", image: "🍜", rating: 4.9, attendees: 234, category: "events" },
  { title: "Sunrise Hike & Brunch", desc: "Mountain trail + chef breakfast", image: "🥾", rating: 4.8, attendees: 67, category: "events" },
  { title: "Digital Art Masterclass", desc: "From beginner to portfolio", image: "🎨", rating: 4.6, attendees: 312, category: "institute" },
];

const QUICK_STATS = [
  { label: "Upcoming", value: "12", icon: Clock, color: "text-ibloov-blue" },
  { label: "Trending Near You", value: "8", icon: TrendingUp, color: "text-ibloov-orange" },
  { label: "Your Circle", value: "24", icon: Users, color: "text-pink-500" },
  { label: "Saved", value: "6", icon: Bookmark, color: "text-purple-500" },
];

const Dashboard = () => {
  const loc = useLocation();
  const navigate = useNavigate();
  const user = loc.state?.user || { name: "Explorer" };
  const location = loc.state?.location || { city: "Your City", continent: "" };
  const [activeCategory, setActiveCategory] = useState("for-you");

  const firstName = (user.name || "Explorer").split(" ")[0];

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-sm font-display font-semibold text-foreground leading-none">{user.name || "Explorer"}</p>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {location.city || location.continent || "Everywhere"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button className="p-2 rounded-full hover:bg-muted transition-colors">
              <Compass className="w-4 h-4 text-muted-foreground" />
            </button>
            <button className="p-2 rounded-full hover:bg-muted transition-colors">
              <Search className="w-4 h-4 text-muted-foreground" />
            </button>
            <button className="p-2 rounded-full hover:bg-muted transition-colors relative">
              <Bell className="w-4 h-4 text-muted-foreground" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full" />
            </button>
            <button onClick={() => navigate("/")} className="p-2 rounded-full hover:bg-muted transition-colors">
              <LogOut className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6">
        {/* Welcome */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
          <h1 className="font-display text-2xl font-bold text-foreground">
            Welcome back, {firstName} 👋
          </h1>
          <p className="text-muted-foreground text-sm mt-1">Here's what's happening in your orbit</p>
        </motion.div>

        {/* Quick stats */}
        <div className="grid grid-cols-4 gap-3 mb-6">
          {QUICK_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-card border border-border rounded-xl p-3 text-center cursor-pointer hover:border-primary/30 transition-all"
            >
              <stat.icon className={`w-4 h-4 mx-auto mb-1 ${stat.color}`} />
              <p className="font-display font-bold text-lg text-foreground">{stat.value}</p>
              <p className="text-[10px] text-muted-foreground leading-tight">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Featured cards */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-display font-bold text-foreground">Featured</h2>
            <button className="text-xs text-primary font-display font-semibold flex items-center gap-1">
              See all <ChevronRight className="w-3 h-3" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {FEATURED.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-card border border-border rounded-2xl p-5 hover:border-primary/30 hover:shadow-sm transition-all cursor-pointer group overflow-hidden"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{item.image}</span>
                  <div className="flex-1">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-1.5 ${item.tagColor}`}>
                      {item.tag}
                    </span>
                    <h3 className="font-display font-bold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.subtitle}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Upcoming */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-display font-bold text-foreground">Your Upcoming</h2>
            <button className="text-xs text-primary font-display font-semibold flex items-center gap-1">
              View calendar <ChevronRight className="w-3 h-3" />
            </button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {UPCOMING.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="min-w-[200px] bg-card border border-border rounded-xl p-3.5 hover:border-primary/30 transition-all cursor-pointer flex-shrink-0"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-display font-semibold text-sm text-foreground">{item.title}</p>
                    <p className="text-[11px] text-muted-foreground">{item.time}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Category tabs + Recommended */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-display font-bold text-foreground">Recommended</h2>
          </div>
          <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-display font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? "bg-foreground text-background shadow-sm"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                <cat.icon className="w-3.5 h-3.5" />
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {RECOMMENDED.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="bg-card border border-border rounded-2xl p-4 hover:border-primary/30 hover:shadow-sm transition-all cursor-pointer group"
              >
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{item.image}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5 truncate">{item.desc}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Users className="w-3 h-3" /> {item.attendees}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-ibloov-orange">
                        <Star className="w-3 h-3 fill-current" /> {item.rating}
                      </span>
                    </div>
                  </div>
                  <Bookmark className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
