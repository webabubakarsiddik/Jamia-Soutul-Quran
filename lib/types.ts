export interface NavItem {
  label: string;
  href: string;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  cta: string;
}

export interface GalleryImage {
  id: number;
  url: string;
  caption: string;
}

export interface GalleryVideo {
  id: number;
  title: string;
  description: string;
  youtubeUrl: string;
  thumbnail: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: any; // Lucide icon component
}

export interface Stat {
  id: number;
  value: string;
  label: string;
  icon: any; // Lucide icon component
}
