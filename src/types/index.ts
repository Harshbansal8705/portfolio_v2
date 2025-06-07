// Project types
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  codeSnippet?: string;
  language?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

// Skill types
export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'frontend' | 'backend' | 'devops' | 'other';
  icon?: string;
}

// Experience types
export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
  location?: string;
}

// Social links
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

// Command types
export interface Command {
  name: string;
  description: string;
  usage: string;
  execute: (args?: string[]) => void;
}

// Navigation items
export interface NavItem {
  name: string;
  path: string;
  icon: string;
}