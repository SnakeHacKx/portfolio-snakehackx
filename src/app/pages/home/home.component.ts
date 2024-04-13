import { Component, OnInit } from '@angular/core';
import { Project } from '../../projects/interfaces/project.interface';
import { SharedService } from '../../shared/services/shared.service';
import { ProjectsService } from '../../projects/services/projects.service';

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

  skillTabIndex: number = 0;
  projectTabIndex: number = 0;

  constructor(
    private sharedService: SharedService,
    private projectsService: ProjectsService
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

    // console.log(this.backendProjects);
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
}
