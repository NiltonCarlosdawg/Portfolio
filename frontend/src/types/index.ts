import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  icon?: LucideIcon;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Skill {
  name: string;
  icon: LucideIcon;
  color?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}