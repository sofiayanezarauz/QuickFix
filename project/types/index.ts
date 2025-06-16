export type UserType = 'home' | 'business' | 'professional';

export interface User {
  id: string;
  email: string;
  name: string;
  userType: UserType;
  phone?: string;
  location?: Location;
  avatar?: string;
  subscription: SubscriptionPlan;
  createdAt: Date;
  isVerified: boolean;
}

export interface Location {
  latitude: number;
  longitude: number;
  address: string;
  city: string;
  neighborhood: string;
}

export interface Professional extends User {
  skills: string[];
  experience: number;
  rating: number;
  reviewCount: number;
  certifications: string[];
  availability: Availability;
  hourlyRate: number;
  serviceRadius: number;
  backgroundCheck: boolean;
  completedJobs: number;
  responseTime: number; // in minutes
}

export interface Service {
  id: string;
  title: string;
  description: string;
  category: ServiceCategory;
  professionalId: string;
  clientId: string;
  status: ServiceStatus;
  price: number;
  estimatedDuration: number;
  scheduledDate: Date;
  completedDate?: Date;
  location: Location;
  images?: string[];
  rating?: number;
  review?: string;
}

export type ServiceCategory = 
  | 'plumbing' 
  | 'electrical' 
  | 'hvac' 
  | 'carpentry' 
  | 'painting' 
  | 'cleaning' 
  | 'appliance_repair' 
  | 'landscaping' 
  | 'security' 
  | 'general_maintenance';

export type ServiceStatus = 
  | 'requested' 
  | 'quoted' 
  | 'accepted' 
  | 'in_progress' 
  | 'completed' 
  | 'cancelled';

export type SubscriptionPlan = 'free' | 'basic' | 'advanced';

export interface Availability {
  monday: TimeSlot[];
  tuesday: TimeSlot[];
  wednesday: TimeSlot[];
  thursday: TimeSlot[];
  friday: TimeSlot[];
  saturday: TimeSlot[];
  sunday: TimeSlot[];
}

export interface TimeSlot {
  start: string; // HH:MM format
  end: string;   // HH:MM format
}

export interface Quote {
  id: string;
  serviceId: string;
  professionalId: string;
  price: number;
  description: string;
  estimatedDuration: number;
  validUntil: Date;
  status: 'pending' | 'accepted' | 'rejected' | 'expired';
  createdAt: Date;
}

export interface Chat {
  id: string;
  serviceId: string;
  participants: string[];
  messages: Message[];
  lastMessage?: Message;
  createdAt: Date;
}

export interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: Date;
  type: 'text' | 'image' | 'location';
  read: boolean;
}

export interface Tutorial {
  id: string;
  title: string;
  description: string;
  category: ServiceCategory;
  duration: number; // in minutes
  price: number;
  professionalId: string;
  videoUrl: string;
  thumbnailUrl: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tools: string[];
  materials: string[];
  rating: number;
  purchaseCount: number;
}