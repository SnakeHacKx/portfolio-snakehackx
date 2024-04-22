import { Component, HostListener, OnInit } from '@angular/core';
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
  public email: string = 'omar.medina@utp.ac.pa';

  skillsTabs: string[] = [
    'Frontend',
    'Backend',
    'Programación',
    'Diseño',
    'Herramientas',
    'Videojuegos',
    'Cloud',
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
  ];

  mobileAppsProjects: Project[] = [];
  backendProjects: Project[] = [];
  webPagesProjects: Project[] = [];
  designProjects: Project[] = [];
  gamesProjects: Project[] = [];
  engineeringProjects: Project[] = [];
  machineLearningProjects: Project[] = [];

  frontendSkills: SkillInterface[] = [];
  backendSkills: SkillInterface[] = [];
  programmingSkills: SkillInterface[] = [];
  designSkills: SkillInterface[] = [];
  toolsSkills: SkillInterface[] = [];
  gamesSkills: SkillInterface[] = [];
  cloudSkills: SkillInterface[] = [];
  otherSkills: SkillInterface[] = [];

  skillTabIndex: number = 0;
  projectTabIndex: number = 0;
  gridColumnTemplate: string = 'repeat(3, 1fr)';

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
      this.cloudSkills = data['skills-cloud'] || [];
      this.otherSkills = data['skills-other'] || [];

      this.updateGridColumns(window.innerWidth);
    });
  }

  skillTabChanged(tabIndex: number): void {
    this.skillTabIndex = tabIndex;
    this.updateGridColumns(window.innerWidth); // Actualizar el número de columnas cuando cambia el tab
  }

  projectTabChanged(tabIndex: number): void {
    this.projectTabIndex = tabIndex;
  }

  goToSection(sectionId: string) {
    this.sharedService.scrollToSection(sectionId);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateGridColumns(event.target.innerWidth);
  }

  updateGridColumns(width: number): void {
    const skills = this.getSkillsByTab(this.skillTabIndex);
    const numSkills = skills.length;
    const maxColumns = width < 600 ? 2 : width >= 600 && width < 900 ? 4 : 5;

    // El número de columnas será el menor entre el número máximo y la cantidad de habilidades
    this.gridColumnTemplate = `repeat(${Math.min(maxColumns, numSkills)}, 1fr)`;
  }

  copyText(text: string) {
    navigator.clipboard.writeText(text).then(
      () => {
        alert('Elemento copiado');
      },
      (err) => {
        console.error('Failed to copy text: ', err);
      }
    );
  }

  getSkillsByTab(index: number): SkillInterface[] {
    switch (index) {
      case 0:
        return this.frontendSkills;
      case 1:
        return this.backendSkills;
      case 2:
        return this.programmingSkills;
      case 3:
        return this.designSkills;
      case 4:
        return this.toolsSkills;
      case 5:
        return this.gamesSkills;
      case 6:
        return this.cloudSkills;
      case 7:
        return this.otherSkills;
      default:
        return [];
    }
  }

  redirectToWhatsApp(): void {
    const whatsappUrl = 'https://wa.me/50762429147';
    window.open(whatsappUrl, '_blank');
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/CV-Omar-Medina-Ing-Sistemas.pdf';
    link.download = 'CV-Omar-Medina-Ing-Sistemas.pdf';
    link.dispatchEvent(
      new MouseEvent('click', { bubbles: true, cancelable: true, view: window })
    );
    link.remove();
  }
}
