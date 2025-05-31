
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  category: string;
}

export interface Skill {
  name: string;
  level?: number; 
  icon?: React.ReactNode; 
}

export interface NavLink {
  href: string;
  label: string;
}
