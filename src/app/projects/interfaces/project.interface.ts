import { SkillInterface } from './skills-tools.interface';

export interface Project {
  id: string;
  heading: string;
  year: string;
  description: string;
  poster: string;
  develping?: boolean;
  images: string[];
  skillsAndTools: SkillInterface[];
}
