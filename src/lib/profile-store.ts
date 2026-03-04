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
  theme: "light" | "dark" | "gradient";
  updatedAt: string;
}

const STORAGE_KEY = "ibloov-user-profile";

const generateId = () => Math.random().toString(36).substring(2, 10);

export const getDefaultProfile = (): UserProfile => ({
  slug: "my-profile",
  displayName: "Explorer",
  headline: "Building something amazing",
  bio: "",
  avatar: "",
  coverImage: "",
  socials: [],
  interests: [],
  certifications: [],
  gallery: [],
  workExperience: [],
  skills: [],
  theme: "gradient",
  updatedAt: new Date().toISOString(),
});

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
