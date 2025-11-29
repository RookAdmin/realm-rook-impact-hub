export interface ImpactStudy {
  id: string;
  slug: string;
  title: string;
  company: string;
  companyLogo: string;
  impactSummary: string;
  category: string;
  problem: string;
  process: string;
  outcome: string;
  testimonial?: string;
  testimonialAuthor?: string;
  testimonialPosition?: string;
  testimonialAuthorImage?: string;
  featuredImage?: string;
  images: string[];
  tags: string[];
  date: string;
  region?: string;  // Add region as an optional property
}

export interface Insight {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorPosition: string;
  authorAvatar: string;
  readTime: string;
  tags: string[];
  date: string;
  coverImage: string;
}

export interface PressRelease {
  id: string;
  slug: string;
  title: string;
  date: string;
  url: string;
  isExternalLink: boolean;
  pdfUrl?: string;
  category: string;
  year: string;
  content?: string;
  subtitle?: string;
  image?: string;
}

export interface BrandAsset {
  id: string;
  name: string;
  description: string;
  fileTypes: string[];
  downloadUrls: Record<string, string>;
  previewUrl: string;
}
