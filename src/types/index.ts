export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  link?: string;
  video?: string;
  image?: string;
  type: 'live' | 'personal';
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  linkedin: string;
  github: string;
}
