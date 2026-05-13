import { LucideIcon } from 'lucide-react';

export interface Hall {
  id: string;
  name: string;
  description: string;
  capacity: string;
  price: string;
  image: string;
  amenities: string[];
  features: string[];
  type: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface EventType {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Package {
  id: string;
  name: string;
  price: string;
  features: string[];
  type: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  comment: string;
  rating: number;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}
