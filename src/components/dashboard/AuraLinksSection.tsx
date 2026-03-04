import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Link2, Plus, MoreVertical, Copy, Edit, BarChart3, Trash2,
  Users, DollarSign, Gift, Camera, Clock, Zap, CalendarCheck,
  Share2, Settings, Sparkles
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuTrigger, DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import { toast } from "@/hooks/use-toast";

interface AuraLink {
  id: string;
  slug: string;
  title: string;
  description: string;
  template: string;
  eventDate: string;
  rsvps: number;
  donations: number;
  wishlistFunded: number;
  photos: number;
}

const MOCK_LINKS: AuraLink[] = [
  {
    id: "1", slug: "maya-turns-30", title: "Maya Turns 30 🎉",
    description: "A surprise rooftop celebration with close friends and family under the city lights.",
    template: "Birthday", eventDate: "2026-04-15",
    rsvps: 42, donations: 1250, wishlistFunded: 68, photos: 134,
  },
  {
    id: "2", slug: "johnson-wedding", title: "The Johnson Wedding 💍",
    description: "An intimate garden ceremony followed by dinner and dancing.",
    template: "Wedding", eventDate: "2026-06-20",
    rsvps: 156, donations: 8400, wishlistFunded: 82, photos: 0,
  },
  {
    id: "3", slug: "baby-shower-aria", title: "Baby Shower for Aria 🍼",
    description: "Welcoming baby Aria with love, gifts, and good vibes.",
    template: "Baby Shower", eventDate: "2026-03-01",
    rsvps: 28, donations: 620, wishlistFunded: 45, photos: 67,
  },
  {
    id: "4", slug: "graduation-2026", title: "Class of 2026 Grad Party 🎓",
    description: "Celebrating four years of hard work with the whole crew.",
    template: "Graduation", eventDate: "2025-12-10",
    rsvps: 89, donations: 3200, wishlistFunded: 100, photos: 245,
  },
];

function getEventStatus(dateStr: string): { label: string; variant: "default" | "secondary" | "destructive" | "outline" } {
  const now = new Date();
  const eventDate = new Date(dateStr);
  const diffDays = Math.ceil((eventDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  if (diffDays < 0) return { label: "Past Event", variant: "secondary" };
  if (diffDays <= 3) return { label: "Live", variant: "destructive" };
  return { label: "Upcoming", variant: "default" };
}

const STAT_ICONS = [
  { key: "links", label: "Total Links", icon: Link2, color: "text-primary" },
  { key: "rsvps", label: "Total RSVPs", icon: Users, color: "text-pink-500" },
  { key: "raised", label: "Total Raised", icon: DollarSign, color: "text-emerald-500" },
  { key: "photos", label: "Total Photos", icon: Camera, color: "text-secondary" },
];

const AuraLinksSection = () => {
  const navigate = useNavigate();
  const [links] = useState<AuraLink[]>(MOCK_LINKS);

  const totalRsvps = links.reduce((s, l) => s + l.rsvps, 0);
  const totalRaised = links.reduce((s, l) => s + l.donations, 0);
  const totalPhotos = links.reduce((s, l) => s + l.photos, 0);
  const statValues = [links.length.toString(), totalRsvps.toString(), `$${totalRaised.toLocaleString()}`, totalPhotos.toString()];

  const copyLink = (slug: string) => {
    navigator.clipboard.writeText(`${window.location.origin}/aura/${slug}`);
    toast({ title: "Link copied!", description: "AuraLink URL copied to clipboard." });
  };

  if (links.length === 0) {
    return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-10">
        <div className="flex flex-col items-center justify-center py-20 px-6 rounded-3xl border border-dashed border-border bg-muted/30">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
            <Sparkles className="w-7 h-7 text-primary" />
          </div>
          <h3 className="font-display font-bold text-xl text-foreground mb-2">No AuraLinks yet</h3>
          <p className="text-muted-foreground text-sm text-center max-w-sm mb-6">
            Create your first smart link to start collecting RSVPs, donations, wishlists, and photos for life's big moments.
          </p>
          <Button className="rounded-full gap-2 font-display">
            <Plus className="w-4 h-4" /> Create Your First AuraLink
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <div>
      {/* Section header */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="font-display text-xl font-bold text-foreground flex items-center gap-2">
            <Link2 className="w-5 h-5 text-primary" /> My AuraLinks
          </h2>
          <p className="text-sm text-muted-foreground mt-1">Manage your smart links for life's big moments</p>
        </div>
        <Button className="rounded-full gap-2 font-display text-xs" size="sm">
          <Plus className="w-3.5 h-3.5" /> Create AuraLink
        </Button>
      </motion.div>

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {STAT_ICONS.map((stat, i) => (
          <motion.div key={stat.key} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
            <Card className="border-border hover:border-primary/20 transition-colors">
              <CardContent className="p-4 text-center">
                <stat.icon className={`w-4 h-4 mx-auto mb-1.5 ${stat.color}`} />
                <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-display">{stat.label}</p>
                <p className="font-display font-bold text-xl text-foreground mt-0.5">{statValues[i]}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* AuraLinks grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {links.map((link, i) => {
          const status = getEventStatus(link.eventDate);
          return (
            <motion.div key={link.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
              <Card className="border-border hover:border-primary/30 hover:shadow-md transition-all group overflow-hidden">
                <CardContent className="p-5">
                  {/* Badges & menu */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant={status.variant} className="text-[10px] font-display uppercase tracking-wider">
                        {status.label === "Live" && <Zap className="w-3 h-3 mr-1" />}
                        {status.label === "Upcoming" && <Clock className="w-3 h-3 mr-1" />}
                        {status.label === "Past Event" && <CalendarCheck className="w-3 h-3 mr-1" />}
                        {status.label}
                      </Badge>
                      <Badge variant="outline" className="text-[10px] font-display">{link.template}</Badge>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-7 w-7 -mr-1 -mt-1">
                          <MoreVertical className="w-4 h-4 text-muted-foreground" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-40">
                        <DropdownMenuItem onClick={() => copyLink(link.slug)}>
                          <Copy className="w-3.5 h-3.5 mr-2" /> Copy Link
                        </DropdownMenuItem>
                        <DropdownMenuItem><Edit className="w-3.5 h-3.5 mr-2" /> Edit</DropdownMenuItem>
                        <DropdownMenuItem><BarChart3 className="w-3.5 h-3.5 mr-2" /> Analytics</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive focus:text-destructive">
                          <Trash2 className="w-3.5 h-3.5 mr-2" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  {/* Title & desc */}
                  <h3 className="font-display font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">{link.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2 leading-relaxed">{link.description}</p>

                  {/* Quick stats */}
                  <div className="grid grid-cols-4 gap-2 mt-4 py-3 border-t border-border">
                    <div className="text-center">
                      <Users className="w-3.5 h-3.5 mx-auto text-pink-500 mb-0.5" />
                      <p className="font-display font-bold text-sm text-foreground">{link.rsvps}</p>
                      <p className="text-[9px] text-muted-foreground">RSVPs</p>
                    </div>
                    <div className="text-center">
                      <DollarSign className="w-3.5 h-3.5 mx-auto text-emerald-500 mb-0.5" />
                      <p className="font-display font-bold text-sm text-foreground">${link.donations}</p>
                      <p className="text-[9px] text-muted-foreground">Raised</p>
                    </div>
                    <div className="text-center">
                      <Gift className="w-3.5 h-3.5 mx-auto text-purple-500 mb-0.5" />
                      <p className="font-display font-bold text-sm text-foreground">{link.wishlistFunded}%</p>
                      <p className="text-[9px] text-muted-foreground">Wishlist</p>
                    </div>
                    <div className="text-center">
                      <Camera className="w-3.5 h-3.5 mx-auto text-secondary mb-0.5" />
                      <p className="font-display font-bold text-sm text-foreground">{link.photos}</p>
                      <p className="text-[9px] text-muted-foreground">Photos</p>
                    </div>
                  </div>

                  {/* Wishlist progress */}
                  {link.wishlistFunded > 0 && (
                    <div className="mt-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] text-muted-foreground font-display">Wishlist funded</span>
                        <span className="text-[10px] font-display font-semibold text-foreground">{link.wishlistFunded}%</span>
                      </div>
                      <Progress value={link.wishlistFunded} className="h-1.5" />
                    </div>
                  )}

                  {/* Action buttons */}
                  <div className="flex items-center gap-2 mt-4">
                    <Button
                      size="sm"
                      className="flex-1 rounded-full font-display text-xs h-8"
                      onClick={() => navigate(`/dashboard/${link.slug}`)}
                    >
                      Manage
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="rounded-full h-8 w-8 p-0"
                      onClick={() => copyLink(link.slug)}
                    >
                      <Share2 className="w-3.5 h-3.5" />
                    </Button>
                    <Button size="sm" variant="outline" className="rounded-full h-8 w-8 p-0">
                      <Settings className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AuraLinksSection;
