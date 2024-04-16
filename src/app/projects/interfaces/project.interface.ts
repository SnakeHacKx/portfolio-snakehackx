import { Item } from '../../shared/components/gallery/interfaces/item.interface';
import { SkillInterface } from './skills-tools.interface';

export interface Project {
  id: string;
  heading: string;
  year: string;
  description: string;
  poster: string;
  develping?: boolean;
  images: Item[];
  skillsAndTools: SkillInterface[];
  codeUrl?: string;
  demoUrl?: string;
}
