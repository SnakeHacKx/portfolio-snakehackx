import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../../interfaces/project.interface';
import { ProjectsService } from '../../services/projects.service';
import { SkillsService } from '../../services/skills-tools.service';
import { SkillInterface } from '../../interfaces/skills-tools.interface';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss',
})
export class ProjectPageComponent implements OnInit {
  public project?: Project;
  public projectSkills: SkillInterface[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectsService: ProjectsService,
    private skillsService: SkillsService
  ) {
    console.log('ProjectPageComponent instantiated');
  }

  ngOnInit(): void {
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

  loadProjectSkills(skillIds: string[]): void {
    this.skillsService.getSkillsAndTools().subscribe((skills) => {
      this.projectSkills = Object.values(skills)
        .flat()
        .filter((skill) => skillIds.includes(skill.id));
    });
  }

  getGridTemplateColumns(skills: SkillInterface[]): string {
    const columnCount = Math.min(5, skills.length || 1);
    return `repeat(${columnCount}, 1fr)`;
  }
}
