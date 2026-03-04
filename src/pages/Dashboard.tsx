import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar, MapPin, Heart, GraduationCap, User, LogOut,
  Bell, Search, Star, Clock, TrendingUp, Users, ChevronRight,
  Compass, Bookmark, Sparkles, Flame, ArrowRight, Plus,
  CalendarPlus, ExternalLink
} from "lucide-react";
import AuraLinksSection from "@/components/dashboard/AuraLinksSection";
import ProfileCard from "@/components/dashboard/ProfileCard";
import { useLocation, useNavigate } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";

const CATEGORIES = [
  { id: "for-you", label: "For You", icon: Sparkles },
  { id: "trending", label: "Trending", icon: Flame },
  { id: "events", label: "Events", icon: Calendar },
  { id: "places", label: "Places", icon: MapPin },
  { id: "wellness", label: "Wellness", icon: Heart },
  { id: "institute", label: "Institute", icon: GraduationCap },
];

const UPCOMING_EVENTS = [
  { title: "Morning Yoga Flow", time: "Today 7:00 AM", date: "2026-03-04", icon: "🧘", category: "Wellness", location: "Zen Studio Downtown" },
  { title: "Community Potluck", time: "Wed 6:30 PM", date: "2026-03-06", icon: "🍲", category: "Events", location: "Community Center Hall B" },
  { title: "Photography Walk", time: "Sat 10:00 AM", date: "2026-03-08", icon: "📷", category: "Events", location: "Central Park East" },
  { title: "IV Therapy Session", time: "Mon 2:00 PM", date: "2026-03-10", icon: "💉", category: "Wellness", location: "Vitality Clinic" },
  { title: "Hospitality Trends Talk", time: "Tue 5:00 PM", date: "2026-03-11", icon: "🎤", category: "Institute", location: "Grand Hotel Ballroom" },
];

const FEATURED = [
  { title: "Weekend Art Festival", subtitle: "This Saturday · 2.4K going", image: "🎨", tag: "Trending", tagColor: "bg-secondary/10 text-secondary" },
  { title: "Rooftop Sunset Session", subtitle: "Tomorrow · 489 going", image: "🌅", tag: "New", tagColor: "bg-primary/10 text-primary" },
];

const RECOMMENDED_DATA: Record<string, Array<{ title: string; desc: string; image: string; rating: number; attendees: number; category: string; location?: string }>> = {
  events: [
    { title: "Night Market Food Tour", desc: "Taste 12 local vendors", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop", rating: 4.9, attendees: 234, category: "events", location: "2.1 mi away" },
    { title: "Sunrise Hike & Brunch", desc: "Mountain trail + chef breakfast", image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop", rating: 4.8, attendees: 67, category: "events", location: "5.3 mi away" },
    { title: "Rooftop Jazz Night", desc: "Live jazz, cocktails & city views", image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=400&h=300&fit=crop", rating: 4.9, attendees: 189, category: "events", location: "0.8 mi away" },
    { title: "Sunset Beach Bonfire", desc: "S'mores, live guitar & good vibes", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop", rating: 4.7, attendees: 142, category: "events", location: "3.2 mi away" },
    { title: "Cultural Food Festival", desc: "50+ cuisines from around the world", image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=400&h=300&fit=crop", rating: 4.8, attendees: 1200, category: "events", location: "1.5 mi away" },
    { title: "Outdoor Cinema Night", desc: "Classic films under the stars", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=300&fit=crop", rating: 4.6, attendees: 310, category: "events", location: "2.7 mi away" },
  ],
  places: [
    { title: "The Grand Meridian Hotel", desc: "5-star luxury with rooftop infinity pool", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop", rating: 4.9, attendees: 1200, category: "places", location: "0.5 mi away" },
    { title: "Hidden Jazz Lounge", desc: "Live music every Friday night", image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=300&fit=crop", rating: 4.9, attendees: 156, category: "places", location: "1.2 mi away" },
    { title: "Skyline Rooftop Bar", desc: "Craft cocktails with panoramic city views", image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&h=300&fit=crop", rating: 4.8, attendees: 890, category: "places", location: "0.3 mi away" },
    { title: "Botanical Garden Café", desc: "Coffee surrounded by rare orchids", image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=400&h=300&fit=crop", rating: 4.7, attendees: 445, category: "places", location: "2.0 mi away" },
    { title: "Underground Speakeasy", desc: "Password-entry bar, 1920s vibes", image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=400&h=300&fit=crop", rating: 4.8, attendees: 320, category: "places", location: "1.8 mi away" },
    { title: "Seaside Boutique Resort", desc: "Beachfront suites with private cabanas", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop", rating: 4.9, attendees: 670, category: "places", location: "12 mi away" },
  ],
  wellness: [
    { title: "Coastal Meditation Retreat", desc: "3-day mindfulness journey by the sea", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop", rating: 4.8, attendees: 42, category: "wellness", location: "8 mi away" },
    { title: "IV Therapy & Recovery Lab", desc: "Vitamin drips, NAD+ & hydration therapy", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop", rating: 4.9, attendees: 198, category: "wellness", location: "0.9 mi away" },
    { title: "Hot Yoga & Sound Bath", desc: "Infrared heat + crystal singing bowls", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop", rating: 4.7, attendees: 134, category: "wellness", location: "1.4 mi away" },
    { title: "Cryotherapy Studio", desc: "3-min whole body cryo sessions", image: "https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=400&h=300&fit=crop", rating: 4.8, attendees: 267, category: "wellness", location: "2.1 mi away" },
    { title: "Float Sensory Tank", desc: "90-min zero-gravity float experience", image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=400&h=300&fit=crop", rating: 4.9, attendees: 89, category: "wellness", location: "3.5 mi away" },
    { title: "Breathwork & Ice Bath", desc: "Wim Hof method guided sessions", image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&h=300&fit=crop", rating: 4.8, attendees: 56, category: "wellness", location: "1.7 mi away" },
  ],
  institute: [
    { title: "Hotel Revenue Management", desc: "Master pricing strategy & yield optimization", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop", rating: 4.9, attendees: 89, category: "institute", location: "Online + In-Person" },
    { title: "F&B Operations Masterclass", desc: "Run a world-class restaurant operation", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop", rating: 4.8, attendees: 134, category: "institute", location: "Online + In-Person" },
    { title: "Luxury Guest Experience Design", desc: "Create unforgettable 5-star guest journeys", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop", rating: 4.9, attendees: 67, category: "institute", location: "Online" },
    { title: "Event Planning Certification", desc: "Full event lifecycle from concept to execution", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop", rating: 4.7, attendees: 312, category: "institute", location: "8-week program" },
    { title: "Spa & Wellness Management", desc: "Build and manage resort-level spa programs", image: "https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=400&h=300&fit=crop", rating: 4.8, attendees: 78, category: "institute", location: "6-week program" },
    { title: "Hospitality Leadership", desc: "Executive skills for hotel & resort GMs", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop", rating: 4.9, attendees: 156, category: "institute", location: "12-week program" },
  ],
};

// "For You" and "Trending" pull a mix
const FOR_YOU_MIX = [
  RECOMMENDED_DATA.events[0], RECOMMENDED_DATA.places[0], RECOMMENDED_DATA.wellness[0],
  RECOMMENDED_DATA.institute[0], RECOMMENDED_DATA.events[1], RECOMMENDED_DATA.wellness[1],
];
const TRENDING_MIX = [
  RECOMMENDED_DATA.places[2], RECOMMENDED_DATA.events[3], RECOMMENDED_DATA.wellness[4],
  RECOMMENDED_DATA.institute[3], RECOMMENDED_DATA.places[4], RECOMMENDED_DATA.events[4],
];

const QUICK_STATS = [
  { label: "Upcoming", value: "12", icon: Clock, color: "text-primary" },
  { label: "Trending Near You", value: "8", icon: TrendingUp, color: "text-secondary" },
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

  const getRecommended = () => {
    if (activeCategory === "for-you") return FOR_YOU_MIX;
    if (activeCategory === "trending") return TRENDING_MIX;
    return RECOMMENDED_DATA[activeCategory] || FOR_YOU_MIX;
  };

  const addToCalendar = (event: typeof UPCOMING_EVENTS[0]) => {
    const startDate = new Date(event.date).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    const endDate = new Date(new Date(event.date).getTime() + 2 * 60 * 60 * 1000).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${startDate}/${endDate}&location=${encodeURIComponent(event.location)}&details=${encodeURIComponent(`Category: ${event.category}`)}`;
    window.open(url, "_blank");
    toast({ title: "Opening Google Calendar", description: `Adding "${event.title}" to your calendar.` });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
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

      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Welcome */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="font-display text-2xl font-bold text-foreground">
            Welcome back, {firstName} 👋
          </h1>
          <p className="text-muted-foreground text-sm mt-1">Here's what's happening in your orbit</p>
        </motion.div>

        {/* Quick stats */}
        <section className="mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {QUICK_STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-xl p-4 text-center cursor-pointer hover:border-primary/30 transition-all"
              >
                <stat.icon className={`w-4 h-4 mx-auto mb-1.5 ${stat.color}`} />
                <p className="font-display font-bold text-lg text-foreground">{stat.value}</p>
                <p className="text-[10px] text-muted-foreground leading-tight">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <Separator className="mb-10" />

        {/* My Profile Section */}
        <section className="mb-10">
          <ProfileCard />
        </section>

        <Separator className="mb-10" />

        {/* AuraLinks Section */}
        <section className="mb-10">
          <AuraLinksSection />
        </section>

        <Separator className="mb-10" />

        {/* Your Upcoming — with calendar integration */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-lg font-bold text-foreground flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" /> Your Upcoming
            </h2>
            <Button
              variant="ghost"
              size="sm"
              className="text-xs text-primary font-display font-semibold gap-1"
              onClick={() => {
                window.open("https://calendar.google.com", "_blank");
              }}
            >
              <ExternalLink className="w-3 h-3" /> Open Calendar
            </Button>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {UPCOMING_EVENTS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="min-w-[260px] bg-card border border-border rounded-xl p-4 hover:border-primary/30 transition-all cursor-pointer flex-shrink-0 group"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl mt-0.5">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-display font-semibold text-sm text-foreground truncate">{item.title}</p>
                      <Badge variant="outline" className="text-[9px] font-display shrink-0">{item.category}</Badge>
                    </div>
                    <p className="text-[11px] text-muted-foreground">{item.time}</p>
                    <p className="text-[10px] text-muted-foreground flex items-center gap-1 mt-0.5">
                      <MapPin className="w-2.5 h-2.5" /> {item.location}
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 px-2 mt-2 text-[10px] text-primary font-display gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCalendar(item);
                      }}
                    >
                      <CalendarPlus className="w-3 h-3" /> Add to Calendar
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
            {/* Add event card */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="min-w-[140px] bg-muted/40 border border-dashed border-border rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer hover:border-primary/30 transition-all flex-shrink-0"
              onClick={() => navigate("/dashboard/create")}
            >
              <Plus className="w-5 h-5 text-muted-foreground mb-1" />
              <p className="text-[11px] text-muted-foreground font-display font-semibold">Add Event</p>
            </motion.div>
          </div>
        </section>

        <Separator className="mb-10" />

        {/* Featured */}
        <section className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-lg font-bold text-foreground flex items-center gap-2">
              <Flame className="w-4 h-4 text-secondary" /> Featured
            </h2>
            <button className="text-xs text-primary font-display font-semibold flex items-center gap-1 hover:underline">
              See all <ChevronRight className="w-3 h-3" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
        </section>

        <Separator className="mb-10" />

        {/* Recommended — category-specific */}
        <section className="pb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-lg font-bold text-foreground flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" /> Recommended
            </h2>
          </div>
          <div className="flex gap-2 mb-5 overflow-x-auto pb-1">
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

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {getRecommended().map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="bg-card border border-border rounded-2xl p-4 hover:border-primary/30 hover:shadow-sm transition-all cursor-pointer group"
                >
                  <div className="flex items-start gap-3">
                    <img src={item.image} alt={item.title} className="w-14 h-14 rounded-xl object-cover shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5 truncate">{item.desc}</p>
                      {item.location && (
                        <p className="text-[10px] text-muted-foreground flex items-center gap-1 mt-1">
                          <MapPin className="w-2.5 h-2.5" /> {item.location}
                        </p>
                      )}
                      <div className="flex items-center gap-3 mt-2">
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Users className="w-3 h-3" /> {item.attendees}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-secondary">
                          <Star className="w-3 h-3 fill-current" /> {item.rating}
                        </span>
                      </div>
                    </div>
                    <Bookmark className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
