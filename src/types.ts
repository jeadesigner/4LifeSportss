export type ProductCategory = 'cardio' | 'musculacao' | 'acessorios';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  fullDescription: string;
  badge: string; // e.g., 'PROFISSIONAL', 'CARDIO', 'MUSCULAÇÃO', 'DESTAQUE'
  musclesTargeted: string; // e.g., '🔴 Quadríceps · Glúteos'
  muscleColor: 'red' | 'yellow' | 'green' | 'purple' | 'blue';
  image: string;
  isPopular?: boolean;
  specs: {
    dimensions?: string;
    weight?: string;
    maxUserWeight?: string;
    structure?: string;
    warranty?: string;
    features?: string[];
  };
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  image: string;
  ctaText: string;
  categoryTarget: ProductCategory | 'contact';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface QuoteItem {
  product: Product;
  quantity: number;
}
