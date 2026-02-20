import { useState } from "react";
import { motion } from "framer-motion";
import {
  Building2, BarChart3, Users, Calendar, Settings, LogOut,
  TrendingUp, DollarSign, Eye, ChevronRight, Bell, Search,
  MapPin, Heart, GraduationCap, Briefcase
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const NAV_ITEMS = [
  { id: "overview", label: "Overview", icon: BarChart3 },
  { id: "events", label: "Events", icon: Calendar },
  { id: "places", label: "Places", icon: MapPin },
  { id: "wellness", label: "Wellness", icon: Heart },
  { id: "institute", label: "Institute", icon: GraduationCap },
  { id: "team", label: "Team", icon: Users },
];

const METRICS = [
  { label: "Total Revenue", value: "$24,580", change: "+12.5%", icon: DollarSign, up: true },
  { label: "Active Users", value: "1,284", change: "+8.2%", icon: Users, up: true },
  { label: "Events Created", value: "34", change: "+23%", icon: Calendar, up: true },
  { label: "Page Views", value: "45.2K", change: "+5.1%", icon: Eye, up: true },
];

const RECENT_ACTIVITY = [
  { action: "New event booking", detail: "Corporate Retreat — 48 attendees", time: "2m ago", icon: Calendar },
  { action: "Venue partnership", detail: "Skyline Rooftop approved", time: "1h ago", icon: MapPin },
  { action: "Wellness program", detail: "Q2 mindfulness series launched", time: "3h ago", icon: Heart },
  { action: "Course enrollment", detail: "Leadership Bootcamp — 28 new", time: "5h ago", icon: GraduationCap },
  { action: "Team member added", detail: "Sarah J. joined as coordinator", time: "1d ago", icon: Users },
];

const PRODUCT_PERFORMANCE = [
  { name: "Events", revenue: "$12,400", bookings: 156, growth: "+18%", icon: Calendar, color: "text-ibloov-blue" },
  { name: "Places", revenue: "$6,200", bookings: 89, growth: "+12%", icon: MapPin, color: "text-ibloov-orange" },
  { name: "Wellness", revenue: "$3,800", bookings: 64, growth: "+25%", icon: Heart, color: "text-pink-500" },
  { name: "Institute", revenue: "$2,180", bookings: 42, growth: "+31%", icon: GraduationCap, color: "text-purple-500" },
];

const EnterpriseDashboard = () => {
  const loc = useLocation();
  const navigate = useNavigate();
  const user = loc.state?.user || { name: "Admin", company: "Company" };
  const [activeNav, setActiveNav] = useState("overview");

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-60 border-r border-border bg-card p-4">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
            <Building2 className="w-4 h-4 text-background" />
          </div>
          <div>
            <p className="font-display font-bold text-sm text-foreground leading-none">{user.company || "Company"}</p>
            <p className="text-xs text-muted-foreground">Enterprise</p>
          </div>
        </div>

        <nav className="flex-1 space-y-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-display font-medium transition-all ${
                activeNav === item.id
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="space-y-1 pt-4 border-t border-border">
          <button className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-all">
            <Settings className="w-4 h-4" />
            Settings
          </button>
          <button
            onClick={() => navigate("/")}
            className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
          <div className="px-6 h-14 flex items-center justify-between">
            {/* Mobile nav label */}
            <div className="md:hidden flex items-center gap-2">
              <Building2 className="w-5 h-5 text-foreground" />
              <span className="font-display font-bold text-sm">{user.company || "Enterprise"}</span>
            </div>
            <div className="hidden md:block">
              <h2 className="font-display font-semibold text-foreground capitalize">{activeNav}</h2>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-full hover:bg-muted transition-colors">
                <Search className="w-4 h-4 text-muted-foreground" />
              </button>
              <button className="p-2 rounded-full hover:bg-muted transition-colors relative">
                <Bell className="w-4 h-4 text-muted-foreground" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full" />
              </button>
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-primary" />
              </div>
            </div>
          </div>
        </header>

        {/* Mobile nav */}
        <div className="md:hidden flex gap-2 px-4 py-3 overflow-x-auto border-b border-border">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-display font-semibold whitespace-nowrap transition-all ${
                activeNav === item.id
                  ? "bg-foreground text-background"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              <item.icon className="w-3.5 h-3.5" />
              {item.label}
            </button>
          ))}
        </div>

        <main className="flex-1 p-6 overflow-y-auto">
          {/* Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {METRICS.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-2xl p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <m.icon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-xs font-semibold text-primary flex items-center gap-0.5">
                    <TrendingUp className="w-3 h-3" />
                    {m.change}
                  </span>
                </div>
                <p className="font-display font-bold text-xl text-foreground">{m.value}</p>
                <p className="text-xs text-muted-foreground">{m.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Product Performance */}
            <div className="bg-card border border-border rounded-2xl p-5">
              <h3 className="font-display font-bold text-foreground mb-4">Product Performance</h3>
              <div className="space-y-3">
                {PRODUCT_PERFORMANCE.map((p) => (
                  <div key={p.name} className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors cursor-pointer group">
                    <div className={`w-9 h-9 rounded-lg bg-muted flex items-center justify-center`}>
                      <p.icon className={`w-4 h-4 ${p.color}`} />
                    </div>
                    <div className="flex-1">
                      <p className="font-display font-semibold text-sm text-foreground">{p.name}</p>
                      <p className="text-xs text-muted-foreground">{p.bookings} bookings</p>
                    </div>
                    <div className="text-right">
                      <p className="font-display font-bold text-sm text-foreground">{p.revenue}</p>
                      <p className="text-xs text-primary">{p.growth}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-card border border-border rounded-2xl p-5">
              <h3 className="font-display font-bold text-foreground mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {RECENT_ACTIVITY.map((a, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                      <a.icon className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-display font-semibold text-sm text-foreground">{a.action}</p>
                      <p className="text-xs text-muted-foreground truncate">{a.detail}</p>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">{a.time}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EnterpriseDashboard;
