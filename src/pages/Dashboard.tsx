import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar, MapPin, Heart, GraduationCap, User, LogOut,
  Bell, Search, ChevronRight, Star, Clock, TrendingUp, Users
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const CATEGORIES = [
  { id: "events", label: "Events", icon: Calendar, color: "text-ibloov-blue", bg: "bg-ibloov-blue/10" },
  { id: "places", label: "Places", icon: MapPin, color: "text-ibloov-orange", bg: "bg-ibloov-orange/10" },
  { id: "wellness", label: "Wellness", icon: Heart, color: "text-pink-500", bg: "bg-pink-500/10" },
  { id: "institute", label: "Institute", icon: GraduationCap, color: "text-purple-500", bg: "bg-purple-500/10" },
];

const MOCK_ITEMS = {
  events: [
    { title: "Sunset Yoga on the Beach", date: "Mar 15", attendees: 42, rating: 4.8, image: "🌅" },
    { title: "Community Art Festival", date: "Mar 20", attendees: 156, rating: 4.9, image: "🎨" },
    { title: "Night Market Food Tour", date: "Mar 22", attendees: 89, rating: 4.7, image: "🍜" },
    { title: "Live Jazz in the Park", date: "Mar 28", attendees: 234, rating: 4.6, image: "🎵" },
  ],
  places: [
    { title: "Hidden Garden Café", date: "Open now", attendees: 18, rating: 4.9, image: "☕" },
    { title: "Rooftop Sunset Bar", date: "Opens 5pm", attendees: 45, rating: 4.7, image: "🍸" },
    { title: "Coastal Hiking Trail", date: "All day", attendees: 32, rating: 4.8, image: "🥾" },
    { title: "Underground Art Gallery", date: "10am-8pm", attendees: 27, rating: 4.5, image: "🖼️" },
  ],
  wellness: [
    { title: "Morning Meditation Circle", date: "Daily 7am", attendees: 24, rating: 4.9, image: "🧘" },
    { title: "Sound Healing Session", date: "Thu 6pm", attendees: 16, rating: 4.8, image: "🔔" },
    { title: "Breathwork Workshop", date: "Sat 10am", attendees: 20, rating: 4.7, image: "🌬️" },
    { title: "Forest Bathing Walk", date: "Sun 8am", attendees: 12, rating: 4.9, image: "🌲" },
  ],
  institute: [
    { title: "Digital Marketing 101", date: "Starts Apr 1", attendees: 340, rating: 4.6, image: "📱" },
    { title: "Creative Writing Workshop", date: "Ongoing", attendees: 128, rating: 4.8, image: "✍️" },
    { title: "Photography Masterclass", date: "Apr 10", attendees: 95, rating: 4.7, image: "📷" },
    { title: "Leadership Bootcamp", date: "Apr 15", attendees: 200, rating: 4.9, image: "🚀" },
  ],
};

const STATS = [
  { label: "Upcoming", value: "12", icon: Clock, color: "text-ibloov-blue" },
  { label: "Trending", value: "8", icon: TrendingUp, color: "text-ibloov-orange" },
  { label: "Friends", value: "24", icon: Users, color: "text-pink-500" },
  { label: "Saved", value: "6", icon: Star, color: "text-purple-500" },
];

const Dashboard = () => {
  const loc = useLocation();
  const navigate = useNavigate();
  const user = loc.state?.user || { name: "Explorer" };
  const location = loc.state?.location || { city: "Your City", continent: "" };
  const [activeCategory, setActiveCategory] = useState("events");

  const items = MOCK_ITEMS[activeCategory as keyof typeof MOCK_ITEMS];

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-sm font-display font-semibold text-foreground leading-none">{user.name || "Explorer"}</p>
              <p className="text-xs text-muted-foreground">{location.city || location.continent}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-muted transition-colors">
              <Search className="w-4 h-4 text-muted-foreground" />
            </button>
            <button className="p-2 rounded-full hover:bg-muted transition-colors relative">
              <Bell className="w-4 h-4 text-muted-foreground" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full" />
            </button>
            <button
              onClick={() => navigate("/")}
              className="p-2 rounded-full hover:bg-muted transition-colors"
            >
              <LogOut className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6">
        {/* Welcome */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <h1 className="font-display text-2xl font-bold text-foreground">
            Welcome back, {(user.name || "Explorer").split(" ")[0]} 👋
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Discover what's happening in your orbit
          </p>
        </motion.div>

        {/* Quick stats */}
        <div className="grid grid-cols-4 gap-3 mb-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-card border border-border rounded-xl p-3 text-center"
            >
              <stat.icon className={`w-4 h-4 mx-auto mb-1 ${stat.color}`} />
              <p className="font-display font-bold text-lg text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-display font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? "bg-foreground text-background shadow-md"
                  : `${cat.bg} ${cat.color} hover:opacity-80`
              }`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Items grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-card border border-border rounded-2xl p-4 hover:border-primary/30 hover:shadow-sm transition-all cursor-pointer group"
            >
              <div className="flex items-start gap-3">
                <div className="text-3xl">{item.image}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.date}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Users className="w-3 h-3" /> {item.attendees}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-ibloov-orange">
                      <Star className="w-3 h-3 fill-current" /> {item.rating}
                    </span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors mt-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
