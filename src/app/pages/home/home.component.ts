import { Component, OnInit } from '@angular/core';
import { Project } from '../../projects/interfaces/project.interface';
import { SharedService } from '../../shared/services/shared.service';
import { ProjectsService } from '../../projects/services/projects.service';
import { SkillsService } from '../../projects/services/skills-tools.service';
import { EMPTY, Observable } from 'rxjs';
import { SkillInterface } from '../../projects/interfaces/skills-tools.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  skillsTabs: string[] = [
    'Frontend',
    'Backend',
    'Programación',
    'Diseño',
    'Herramientas',
    'Videojuegos',
    'Otras',
  ];

  projectTabs: string[] = [
    'Apps Móviles',
    'Backends',
    'Páginas Web',
    'Diseños',
    'Videojuegos',
    'Ingeniería',
    'Machine Learning',
    'Otros',
  ];

  mobileAppsProjects: Project[] = [];
  backendProjects: Project[] = [];
  webPagesProjects: Project[] = [];
  designProjects: Project[] = [];
  gamesProjects: Project[] = [];
  engineeringProjects: Project[] = [];
  machineLearningProjects: Project[] = [];
  otherProjects: Project[] = [];

  frontendSkills: SkillInterface[] = [];
  backendSkills: SkillInterface[] = [];
  programmingSkills: SkillInterface[] = [];
  designSkills: SkillInterface[] = [];
  toolsSkills: SkillInterface[] = [];
  gamesSkills: SkillInterface[] = [];
  otherSkills: SkillInterface[] = [];

  skillTabIndex: number = 0;
  projectTabIndex: number = 0;

  constructor(
    private sharedService: SharedService,
    private projectsService: ProjectsService,
    private skillsService: SkillsService
  ) {}

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe((data) => {
      this.mobileAppsProjects = data['mobileAppsProjects'];
      this.backendProjects = data['backendProjects'];
      this.webPagesProjects = data['webPagesProjects'];
      this.designProjects = data['designProjects'];
      this.gamesProjects = data['gamesProjects'];
      this.engineeringProjects = data['engineeringProjects'];
      this.machineLearningProjects = data['machineLearningProjects'];
    });

    this.skillsService.getSkillsAndTools().subscribe((data) => {
      this.frontendSkills = data['skills-frontend'] || [];
      this.backendSkills = data['skills-backend'] || [];
      this.programmingSkills = data['skills-programming'] || [];
      this.designSkills = data['skills-design'] || [];
      this.toolsSkills = data['skills-tools'] || [];
      this.gamesSkills = data['skills-games'] || [];
      this.otherSkills = data['skills-other'] || [];
    });
  }

  skillTabChanged(tabIndex: number): void {
    this.skillTabIndex = tabIndex;
  }

  projectTabChanged(tabIndex: number): void {
    this.projectTabIndex = tabIndex;
  }

  goToSection(sectionId: string) {
    this.sharedService.scrollToSection(sectionId);
  }

  getGridTemplateColumns(skills: any[]): string {
    const columns = Math.min(5, skills.length);
    return `repeat(${columns}, 1fr)`;
  }

  getSkillsByTab(index: number): SkillInterface[] {
    switch(index) {
      case 0: return this.frontendSkills;
      case 1: return this.backendSkills;
      case 2: return this.programmingSkills;
      case 3: return this.designSkills;
      case 4: return this.toolsSkills;
      case 5: return this.gamesSkills;
      case 6: return this.otherSkills;
      default: return [];
    }
  }
}
