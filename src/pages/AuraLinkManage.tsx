import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft, Link2, Users, DollarSign, Gift, Camera,
  Share2, Settings, Edit, Copy, ExternalLink, Calendar,
  Clock, Zap, CalendarCheck, BarChart3, Mail, MessageSquare,
  ImagePlus, ListChecks, TrendingUp, Eye, Sparkles
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";
import { getAuraLink } from "@/lib/auralink-store";

function getEventStatus(dateStr: string) {
  const now = new Date();
  const eventDate = new Date(dateStr);
  const diffDays = Math.ceil((eventDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  if (diffDays < 0) return { label: "Past Event", variant: "secondary" as const, icon: CalendarCheck };
  if (diffDays <= 3) return { label: "Live", variant: "destructive" as const, icon: Zap };
  return { label: "Upcoming", variant: "default" as const, icon: Clock };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });
}

const QUICK_ACTIONS = [
  { label: "Edit Details", icon: Edit, desc: "Update event info" },
  { label: "Guest List", icon: ListChecks, desc: "Manage RSVPs" },
  { label: "Photos", icon: ImagePlus, desc: "View gallery" },
  { label: "Messages", icon: MessageSquare, desc: "Guest messages" },
  { label: "Send Invites", icon: Mail, desc: "Email or SMS" },
  { label: "Analytics", icon: BarChart3, desc: "View insights" },
];

const AuraLinkManage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const storeLink = slug ? getAuraLink(slug) : null;
  const link = storeLink ? {
    ...storeLink,
    wishlistItems: 0,
    wishlistClaimed: 0,
  } : null;

  if (!link) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5 flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
        <div className="text-center relative z-10">
          <h1 className="font-display text-2xl font-bold text-foreground mb-2">AuraLink not found</h1>
          <p className="text-muted-foreground text-sm mb-6">This link doesn't exist or has been removed.</p>
          <Button onClick={() => navigate("/dashboard")} variant="outline" className="rounded-full gap-2 font-display">
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  const status = getEventStatus(link.eventDate);
  const StatusIcon = status.icon;
  const auraUrl = `${window.location.origin}/aura/${link.slug}`;
  const rsvpPct = Math.round((link.rsvps / link.rsvpLimit) * 100);
  const donationPct = Math.round((link.donations / link.donationGoal) * 100);

  const copyLink = () => {
    navigator.clipboard.writeText(auraUrl);
    toast({ title: "Link copied!", description: "AuraLink URL copied to clipboard." });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/3 to-secondary/5 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      <div className="absolute top-1/2 right-1/4 w-[200px] h-[200px] bg-pink-500/3 rounded-full blur-3xl" />

      {/* Top bar */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <button onClick={() => navigate("/dashboard")} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-display">
            <ArrowLeft className="w-4 h-4" /> Dashboard
          </button>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline" className="rounded-full gap-1.5 text-xs font-display h-8" onClick={copyLink}>
              <Copy className="w-3.5 h-3.5" /> Copy Link
            </Button>
            <Button size="sm" variant="outline" className="rounded-full gap-1.5 text-xs font-display h-8" onClick={() => navigate(`/aura/${link.slug}`)}>
              <ExternalLink className="w-3.5 h-3.5" /> Preview
            </Button>
            <Button size="sm" className="rounded-full gap-1.5 text-xs font-display h-8">
              <Settings className="w-3.5 h-3.5" /> Settings
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 relative z-10">
        {/* Hero section */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Badge variant={status.variant} className="text-xs font-display uppercase tracking-wider">
                  <StatusIcon className="w-3 h-3 mr-1" /> {status.label}
                </Badge>
                <Badge variant="outline" className="text-xs font-display">{link.template}</Badge>
              </div>
              <h1 className="font-display text-3xl font-bold text-foreground">{link.title}</h1>
              <p className="text-muted-foreground mt-2 max-w-lg">{link.description}</p>
              <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" /> {formatDate(link.eventDate)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Link2 className="w-4 h-4" /> /{link.slug}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="rounded-full gap-2 font-display" onClick={copyLink}>
                <Share2 className="w-4 h-4" /> Share
              </Button>
              <Button className="rounded-full gap-2 font-display">
                <Edit className="w-4 h-4" /> Edit Event
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Stats cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "RSVPs", value: `${link.rsvps} / ${link.rsvpLimit}`, pct: rsvpPct, icon: Users, color: "text-pink-500" },
            { label: "Donations", value: `$${link.donations.toLocaleString()}`, pct: donationPct, icon: DollarSign, color: "text-emerald-500", goal: `$${link.donationGoal.toLocaleString()} goal` },
            { label: "Wishlist", value: `${link.wishlistClaimed} / ${link.wishlistItems} items`, pct: link.wishlistFunded, icon: Gift, color: "text-purple-500" },
            { label: "Photos", value: link.photos.toString(), icon: Camera, color: "text-secondary" },
          ].map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
              <Card className="hover:border-primary/20 transition-colors bg-card/80 backdrop-blur-sm">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-muted-foreground font-display uppercase tracking-wider">{stat.label}</span>
                    <stat.icon className={`w-4 h-4 ${stat.color}`} />
                  </div>
                  <p className="font-display font-bold text-2xl text-foreground">{stat.value}</p>
                  {stat.pct !== undefined && (
                    <div className="mt-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] text-muted-foreground">{stat.goal || `${stat.pct}% capacity`}</span>
                        <span className="text-[10px] font-semibold text-foreground">{stat.pct}%</span>
                      </div>
                      <Progress value={Math.min(stat.pct, 100)} className="h-1.5" />
                    </div>
                  )}
                  {stat.label === "Photos" && (
                    <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                      <Eye className="w-3 h-3" /> {link.photos > 0 ? "View gallery" : "No photos yet"}
                    </p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Quick actions */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <h2 className="font-display font-bold text-lg text-foreground mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" /> Quick Actions
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            {QUICK_ACTIONS.map((action, i) => (
              <motion.div key={action.label} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 + i * 0.04 }}>
                <Card className="hover:border-primary/30 hover:shadow-md transition-all cursor-pointer group bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-4 text-center">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2 group-hover:bg-primary/20 transition-colors">
                      <action.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="font-display font-semibold text-sm text-foreground">{action.label}</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{action.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <Separator className="mb-8" />

        {/* Activity & Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <Card className="bg-card/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="font-display text-base flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary" /> Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { text: "Sarah R. confirmed RSVP (+1 guest)", time: "2 hours ago", icon: "✅" },
                  { text: "Anonymous donated $50", time: "5 hours ago", icon: "💰" },
                  { text: "3 new photos uploaded", time: "Yesterday", icon: "📸" },
                  { text: "Mike T. claimed 'Espresso Machine' from wishlist", time: "2 days ago", icon: "🎁" },
                  { text: "Invite batch sent to 12 guests", time: "3 days ago", icon: "📧" },
                ].map((activity, i) => (
                  <div key={i} className="flex items-start gap-3 py-2 border-b border-border last:border-0">
                    <span className="text-lg">{activity.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-foreground">{activity.text}</p>
                      <p className="text-[11px] text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}>
            <Card className="bg-card/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="font-display text-base flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-primary" /> Link Performance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { label: "Link Views", value: "1,247", change: "+18%" },
                  { label: "Unique Visitors", value: "834", change: "+12%" },
                  { label: "RSVP Conversion", value: `${rsvpPct}%`, change: "+5%" },
                  { label: "Avg. Donation", value: link.rsvps > 0 ? `$${Math.round(link.donations / link.rsvps)}` : "$0", change: "+8%" },
                  { label: "Share Rate", value: "23%", change: "+3%" },
                ].map((metric, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                    <span className="text-sm text-muted-foreground">{metric.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-display font-bold text-sm text-foreground">{metric.value}</span>
                      <span className="text-[10px] text-emerald-500 font-display font-semibold">{metric.change}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Share URL bar */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-8">
          <Card className="bg-muted/30 backdrop-blur-sm">
            <CardContent className="p-4 flex flex-col sm:flex-row items-center gap-3">
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <Link2 className="w-4 h-4 text-primary shrink-0" />
                <code className="text-sm text-foreground font-mono truncate">{auraUrl}</code>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="rounded-full text-xs font-display h-8 gap-1.5" onClick={copyLink}>
                  <Copy className="w-3.5 h-3.5" /> Copy
                </Button>
                <Button size="sm" className="rounded-full text-xs font-display h-8 gap-1.5">
                  <Share2 className="w-3.5 h-3.5" /> Share
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
};

export default AuraLinkManage;
