export interface AuraLinkData {
  id: string;
  slug: string;
  title: string;
  description: string;
  template: string;
  eventDate: string;
  time: string;
  location: string;
  rsvpLimit: number;
  donationGoal: number;
  features: string[];
  featureLinks: Record<string, string>;
  images: string[]; // base64 data URLs from upload
  rsvps: number;
  donations: number;
  wishlistFunded: number;
  photos: number;
  createdAt: string;
}

const STORAGE_KEY = "auralinks";

const DEFAULT_LINKS: AuraLinkData[] = [
  {
    id: "1", slug: "maya-turns-30", title: "Maya Turns 30 🎉",
    description: "A surprise rooftop celebration with close friends and family under the city lights.",
    template: "Birthday", eventDate: "2026-04-15", time: "7:00 PM", location: "Skyline Rooftop, Downtown LA",
    rsvpLimit: 60, donationGoal: 2000, features: ["rsvp", "wishlist", "donations", "photos"],
    featureLinks: {}, images: [],
    rsvps: 42, donations: 1250, wishlistFunded: 68, photos: 134, createdAt: "2026-02-01",
  },
  {
    id: "2", slug: "johnson-wedding", title: "The Johnson Wedding 💍",
    description: "An intimate garden ceremony followed by dinner and dancing.",
    template: "Wedding", eventDate: "2026-06-20", time: "4:00 PM", location: "Rosewood Gardens, Malibu",
    rsvpLimit: 200, donationGoal: 10000, features: ["rsvp", "wishlist", "donations"],
    featureLinks: {}, images: [],
    rsvps: 156, donations: 8400, wishlistFunded: 82, photos: 0, createdAt: "2026-01-15",
  },
  {
    id: "3", slug: "baby-shower-aria", title: "Baby Shower for Aria 🍼",
    description: "Welcoming baby Aria with love, gifts, and good vibes.",
    template: "Baby Shower", eventDate: "2026-03-01", time: "2:00 PM", location: "Garden Pavilion",
    rsvpLimit: 40, donationGoal: 1500, features: ["rsvp", "wishlist", "photos"],
    featureLinks: {}, images: [],
    rsvps: 28, donations: 620, wishlistFunded: 45, photos: 67, createdAt: "2026-01-20",
  },
  {
    id: "4", slug: "graduation-2026", title: "Class of 2026 Grad Party 🎓",
    description: "Celebrating four years of hard work with the whole crew.",
    template: "Graduation", eventDate: "2025-12-10", time: "6:00 PM", location: "University Hall",
    rsvpLimit: 100, donationGoal: 3000, features: ["rsvp", "donations", "photos"],
    featureLinks: {}, images: [],
    rsvps: 89, donations: 3200, wishlistFunded: 100, photos: 245, createdAt: "2025-11-01",
  },
];

function initStore(): AuraLinkData[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try { return JSON.parse(stored); } catch { /* fall through */ }
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_LINKS));
  return DEFAULT_LINKS;
}

export function getAuraLinks(): AuraLinkData[] {
  return initStore();
}

export function getAuraLink(slug: string): AuraLinkData | undefined {
  return getAuraLinks().find((l) => l.slug === slug);
}

export function saveAuraLink(link: AuraLinkData): void {
  const links = getAuraLinks();
  links.unshift(link);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
}

export function deleteAuraLink(id: string): void {
  const links = getAuraLinks().filter((l) => l.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
}

export function updateAuraLink(id: string, updates: Partial<AuraLinkData>): void {
  const links = getAuraLinks().map((l) => l.id === id ? { ...l, ...updates } : l);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
}
