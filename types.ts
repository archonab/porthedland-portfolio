
import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ProjectItem {
  title: string;
  location: string;
  image: string;
  category?: string;
  roles?: string[];
  value?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  qualifications?: string[];
  focus?: string;
  trackRecord?: {
    title: string;
    detail: string;
  }[];
}

export interface CapabilityItem {
  id: string;
  title: string;
  desc: string;
  icon?: LucideIcon;
}
