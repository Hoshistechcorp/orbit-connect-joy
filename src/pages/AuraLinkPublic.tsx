import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calendar, MapPin, Clock, Users, Gift, DollarSign, Camera,
  Heart, Share2, Copy, ExternalLink, Check, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";

// Mock event data — in production from API
const MOCK_EVENTS: Record<string, {
  title: string; description: string; template: string; eventDate: string;
  time: string; location: string; hostName: string;
  rsvps: number; rsvpLimit: number; donations: number; donationGoal: number;
  wishlistFunded: number; wishlistItems: { name: string; price: number; funded: boolean }[];
  photos: string[];
}> = {
  "maya-turns-30": {
    title: "Maya Turns 30 🎉", description: "A surprise rooftop celebration with close friends and family under the city lights. Join us for food, music, and unforgettable vibes!",
    template: "Birthday", eventDate: "2026-04-15", time: "7:00 PM", location: "Skyline Rooftop, Downtown LA",
    hostName: "Maya Johnson", rsvps: 42, rsvpLimit: 60, donations: 1250, donationGoal: 2000, wishlistFunded: 68,
    wishlistItems: [
      { name: "Espresso Machine", price: 299, funded: true },
      { name: "Yoga Retreat Weekend", price: 450, funded: false },
      { name: "Art Supply Kit", price: 85, funded: true },
      { name: "Noise-Canceling Headphones", price: 350, funded: false },
    ],
    photos: ["🌅", "🎶", "🍰", "🥂", "🎈", "✨"],
  },
  "johnson-wedding": {
    title: "The Johnson Wedding 💍", description: "An intimate garden ceremony followed by dinner and dancing under the stars. We can't wait to celebrate with you!",
    template: "Wedding", eventDate: "2026-06-20", time: "4:00 PM", location: "Rosewood Gardens, Malibu",
    hostName: "James & Sarah Johnson", rsvps: 156, rsvpLimit: 200, donations: 8400, donationGoal: 10000, wishlistFunded: 82,
    wishlistItems: [
      { name: "Honeymoon Fund", price: 5000, funded: false },
      { name: "Kitchen Aid Mixer", price: 400, funded: true },
      { name: "Dinner Set for 12", price: 250, funded: true },
    ],
    photos: [],
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });
}

function getDaysUntil(dateStr: string) {
  const diff = Math.ceil((new Date(dateStr).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
  if (diff < 0) return "Event has passed";
  if (diff === 0) return "Today!";
  if (diff === 1) return "Tomorrow!";
  return `${diff} days away`;
}

const AuraLinkPublic = () => {
  const { slug } = useParams<{ slug: string }>();
  const [rsvpName, setRsvpName] = useState("");
  const [rsvpDone, setRsvpDone] = useState(false);

  const event = slug ? MOCK_EVENTS[slug] : null;

  if (!event) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 flex items-center justify-center">
        <div className="text-center px-4">
          <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-5">
            <ExternalLink className="w-7 h-7 text-muted-foreground" />
          </div>
          <h1 className="font-display text-2xl font-bold text-foreground mb-2">AuraLink Not Found</h1>
          <p className="text-muted-foreground text-sm max-w-sm mx-auto">
            This link may have expired or doesn't exist. Check the URL and try again.
          </p>
        </div>
      </div>
    );
  }

  const rsvpPct = Math.round((event.rsvps / event.rsvpLimit) * 100);
  const donationPct = Math.round((event.donations / event.donationGoal) * 100);
  const daysLabel = getDaysUntil(event.eventDate);
  const isPast = daysLabel === "Event has passed";

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({ title: "Link copied!", description: "Share this AuraLink with others." });
  };

  const handleRsvp = () => {
    if (!rsvpName.trim()) return;
    setRsvpDone(true);
    toast({ title: "You're in! 🎉", description: `Thanks ${rsvpName}, see you there!` });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="max-w-2xl mx-auto px-4 pt-12 pb-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <Badge variant="outline" className="font-display text-xs mb-4">
              {event.template}
            </Badge>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
              {event.title}
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
              {event.description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-primary" /> {formatDate(event.eventDate)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-primary" /> {event.time}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-primary" /> {event.location}
              </span>
            </div>

            <div className="mt-4">
              <Badge
                variant={isPast ? "secondary" : "default"}
                className="font-display"
              >
                {daysLabel}
              </Badge>
            </div>

            <p className="text-xs text-muted-foreground mt-4">
              Hosted by <span className="font-semibold text-foreground">{event.hostName}</span>
            </p>
          </motion.div>
        </div>
      </div>

      <main className="max-w-2xl mx-auto px-4 pb-16">
        {/* RSVP Section */}
        {!isPast && (
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-10"
          >
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <h2 className="font-display font-bold text-lg text-foreground mb-1 flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" /> RSVP
                </h2>
                <p className="text-xs text-muted-foreground mb-4">
                  {event.rsvps} of {event.rsvpLimit} spots filled
                </p>
                <Progress value={rsvpPct} className="h-2 mb-4" />

                {rsvpDone ? (
                  <div className="text-center py-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-3">
                      <Check className="w-6 h-6 text-emerald-500" />
                    </div>
                    <p className="font-display font-semibold text-foreground">You're on the list!</p>
                    <p className="text-xs text-muted-foreground mt-1">We'll send you a reminder before the event.</p>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <Input
                      placeholder="Your name"
                      value={rsvpName}
                      onChange={(e) => setRsvpName(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleRsvp()}
                    />
                    <Button className="rounded-full font-display shrink-0" onClick={handleRsvp}>
                      RSVP <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.section>
        )}

        {/* Donations */}
        {event.donationGoal > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-10"
          >
            <Card>
              <CardContent className="p-6">
                <h2 className="font-display font-bold text-lg text-foreground mb-1 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-emerald-500" /> Contribute
                </h2>
                <p className="text-xs text-muted-foreground mb-4">
                  ${event.donations.toLocaleString()} raised of ${event.donationGoal.toLocaleString()} goal
                </p>
                <Progress value={donationPct} className="h-2 mb-5" />
                <div className="grid grid-cols-3 gap-2">
                  {[25, 50, 100].map((amt) => (
                    <Button
                      key={amt}
                      variant="outline"
                      className="rounded-full font-display"
                      onClick={() =>
                        toast({ title: "Thank you! 💖", description: `$${amt} contribution recorded.` })
                      }
                    >
                      ${amt}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.section>
        )}

        {/* Wishlist */}
        {event.wishlistItems.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-10"
          >
            <Card>
              <CardContent className="p-6">
                <h2 className="font-display font-bold text-lg text-foreground mb-1 flex items-center gap-2">
                  <Gift className="w-4 h-4 text-purple-500" /> Wishlist
                </h2>
                <p className="text-xs text-muted-foreground mb-4">{event.wishlistFunded}% funded</p>
                <Progress value={event.wishlistFunded} className="h-2 mb-5" />

                <div className="space-y-3">
                  {event.wishlistItems.map((item, i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                        item.funded
                          ? "border-emerald-500/20 bg-emerald-500/5"
                          : "border-border hover:border-primary/30"
                      }`}
                    >
                      <div>
                        <p className={`font-display text-sm font-semibold ${
                          item.funded ? "text-muted-foreground line-through" : "text-foreground"
                        }`}>
                          {item.name}
                        </p>
                        <p className="text-xs text-muted-foreground">${item.price}</p>
                      </div>
                      {item.funded ? (
                        <Badge variant="secondary" className="text-[10px] font-display gap-1">
                          <Check className="w-3 h-3" /> Funded
                        </Badge>
                      ) : (
                        <Button
                          size="sm"
                          variant="outline"
                          className="rounded-full font-display text-xs h-8"
                          onClick={() =>
                            toast({ title: "Gift reserved! 🎁", description: `You're funding "${item.name}".` })
                          }
                        >
                          <Heart className="w-3 h-3 mr-1" /> Fund
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.section>
        )}

        {/* Photos */}
        {event.photos.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-10"
          >
            <Card>
              <CardContent className="p-6">
                <h2 className="font-display font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Camera className="w-4 h-4 text-secondary" /> Photos
                </h2>
                <div className="grid grid-cols-3 gap-3">
                  {event.photos.map((photo, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-xl bg-muted flex items-center justify-center text-3xl border border-border hover:border-primary/30 transition-all cursor-pointer"
                    >
                      {photo}
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 rounded-full font-display gap-2">
                  <Camera className="w-4 h-4" /> Upload Photo
                </Button>
              </CardContent>
            </Card>
          </motion.section>
        )}

        <Separator className="mb-8" />

        {/* Share */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-3 font-display">Share this AuraLink</p>
          <div className="flex justify-center gap-2">
            <Button variant="outline" className="rounded-full font-display gap-2" onClick={copyLink}>
              <Copy className="w-4 h-4" /> Copy Link
            </Button>
            <Button variant="outline" className="rounded-full font-display gap-2" onClick={copyLink}>
              <Share2 className="w-4 h-4" /> Share
            </Button>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default AuraLinkPublic;
