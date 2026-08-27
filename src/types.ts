export interface WisdomQuote {
  id: string;
  text: string;
  category: 'wisdom' | 'gospel' | 'proverb' | 'condiment';
  source?: string;
  author?: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: 'book' | 'sparkles' | 'bell' | 'sliders';
  badge: string;
}

export interface GospelChapter {
  id: number;
  title: string;
  subtitle: string;
  excerpt: string;
  fullText: string;
  pageNumber: number;
}
