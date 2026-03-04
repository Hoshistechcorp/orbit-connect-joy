export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  isPublic: boolean;
}

export interface Interest {
  id: string;
  label: string;
  isPublic: boolean;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  isPublic: boolean;
}

export interface GalleryItem {
  id: string;
  image: string; // base64 data URL
  caption: string;
  isPublic: boolean;
}

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  isPublic: boolean;
}

export interface Skill {
  id: string;
  label: string;
  level: number; // 1-5
  isPublic: boolean;
}

export interface ProfileAuraLink {
  id: string;
  isPublic: boolean;
}

export interface UserProfile {
  slug: string;
  displayName: string;
  headline: string;
  bio: string;
  avatar: string; // base64 data URL
  coverImage: string;
  socials: SocialLink[];
  interests: Interest[];
  certifications: Certification[];
  gallery: GalleryItem[];
  workExperience: WorkExperience[];
  skills: Skill[];
  auraLinks: ProfileAuraLink[];
  theme: "light" | "dark" | "gradient";
  updatedAt: string;
}

const STORAGE_KEY = "ibloov-user-profile";

const generateId = () => Math.random().toString(36).substring(2, 10);

export const getDemoProfile = (): UserProfile => ({
  slug: "alex-morgan",
  displayName: "Alex Morgan",
  headline: "Creative Director & Full-Stack Developer",
  bio: "I'm a multi-disciplinary creative who bridges design and engineering. With 8+ years building digital products, I help startups and brands craft experiences that resonate. When I'm not coding, you'll find me photographing street art or experimenting with fermentation recipes.",
  avatar: "",
  coverImage: "",
  socials: [
    { id: generateId(), platform: "instagram", url: "https://instagram.com/alexmorgan", isPublic: true },
    { id: generateId(), platform: "twitter", url: "https://x.com/alexmdev", isPublic: true },
    { id: generateId(), platform: "linkedin", url: "https://linkedin.com/in/alexmorgan", isPublic: true },
    { id: generateId(), platform: "github", url: "https://github.com/alexmorgan", isPublic: true },
    { id: generateId(), platform: "website", url: "https://alexmorgan.dev", isPublic: true },
    { id: generateId(), platform: "youtube", url: "https://youtube.com/@alexcreates", isPublic: false },
  ],
  interests: [
    { id: generateId(), label: "UI/UX Design", isPublic: true },
    { id: generateId(), label: "Street Photography", isPublic: true },
    { id: generateId(), label: "Open Source", isPublic: true },
    { id: generateId(), label: "Fermentation", isPublic: true },
    { id: generateId(), label: "Rock Climbing", isPublic: true },
    { id: generateId(), label: "Sci-Fi Novels", isPublic: false },
    { id: generateId(), label: "Mechanical Keyboards", isPublic: true },
  ],
  certifications: [
    { id: generateId(), title: "AWS Solutions Architect – Associate", issuer: "Amazon Web Services", year: "2024", isPublic: true },
    { id: generateId(), title: "Google UX Design Professional Certificate", issuer: "Google / Coursera", year: "2023", isPublic: true },
    { id: generateId(), title: "Certified ScrumMaster (CSM)", issuer: "Scrum Alliance", year: "2022", isPublic: true },
    { id: generateId(), title: "Meta Front-End Developer Certificate", issuer: "Meta / Coursera", year: "2023", isPublic: false },
  ],
  gallery: [],
  auraLinks: [
    { id: "1", isPublic: true },
    { id: "2", isPublic: true },
    { id: "3", isPublic: false },
    { id: "4", isPublic: true },
  ],
  workExperience: [
    { id: generateId(), role: "Creative Director", company: "Neon Studio", period: "2023 – Present", description: "Leading a team of 12 designers and engineers building brand experiences for Fortune 500 clients. Shipped 15+ major campaigns with a combined reach of 40M+ impressions.", isPublic: true },
    { id: generateId(), role: "Senior Full-Stack Developer", company: "Orbitly", period: "2020 – 2023", description: "Architected and built the core platform serving 500K+ monthly users. Led migration from monolith to micro-services, reducing deployment time by 80%.", isPublic: true },
    { id: generateId(), role: "Front-End Engineer", company: "PixelForge", period: "2018 – 2020", description: "Built responsive web applications and design systems using React and TypeScript. Mentored 4 junior developers.", isPublic: true },
    { id: generateId(), role: "Freelance Web Developer", company: "Self-Employed", period: "2016 – 2018", description: "Delivered 30+ client projects spanning e-commerce, portfolios, and SaaS dashboards.", isPublic: false },
  ],
  skills: [
    { id: generateId(), label: "React / TypeScript", level: 5, isPublic: true },
    { id: generateId(), label: "Node.js / Express", level: 4, isPublic: true },
    { id: generateId(), label: "Figma / Design Systems", level: 5, isPublic: true },
    { id: generateId(), label: "AWS / Cloud Infra", level: 4, isPublic: true },
    { id: generateId(), label: "Python / Data Analysis", level: 3, isPublic: true },
    { id: generateId(), label: "Motion Design", level: 3, isPublic: false },
  ],
  theme: "gradient",
  updatedAt: new Date().toISOString(),
});

export const getDefaultProfile = (): UserProfile => getDemoProfile();

export const getProfile = (): UserProfile => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultProfile();
    return { ...getDefaultProfile(), ...JSON.parse(raw) };
  } catch {
    return getDefaultProfile();
  }
};

export const saveProfile = (profile: UserProfile): void => {
  profile.updatedAt = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
};

export const createId = generateId;

export const SOCIAL_PLATFORMS = [
  { value: "instagram", label: "Instagram", icon: "📸" },
  { value: "twitter", label: "X (Twitter)", icon: "𝕏" },
  { value: "linkedin", label: "LinkedIn", icon: "💼" },
  { value: "tiktok", label: "TikTok", icon: "🎵" },
  { value: "youtube", label: "YouTube", icon: "▶️" },
  { value: "github", label: "GitHub", icon: "🐙" },
  { value: "website", label: "Website", icon: "🌐" },
  { value: "email", label: "Email", icon: "✉️" },
];
