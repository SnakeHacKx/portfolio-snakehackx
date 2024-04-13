import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../../../shared/components/project-slider/interfaces/project.interface';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss',
})
export class ProjectPageComponent implements OnInit {
  public project?: Project;

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectsService: ProjectsService
  ) {
    console.log('ProjectPageComponent instantiated');
  }

  ngOnInit(): void {
    console.log('ngOnInit del ProjectPageComponent');
    this.activatedRoute.params.subscribe((params) => {
      const projectId = params['id'];
      console.log('Route params:', params);
      this.projectsService.getProjectById(projectId).subscribe({
        next: (project) => {
          this.project = project;
        },
        error: (error) => console.error('Error loading the project:', error),
      });
    });
  }
}
