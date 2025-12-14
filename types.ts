export interface ServiceItem {
  title: string;
  price: string;
  description: string;
  features: string[];
}

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  projectUrl?: string;
}

export interface WhyUsItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}