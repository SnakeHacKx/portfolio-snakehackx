import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../../interfaces/project.interface';
import { ProjectsService } from '../../services/projects.service';
import { SkillsService } from '../../services/skills-tools.service';
import { SkillInterface } from '../../interfaces/skills-tools.interface';
import { Item } from '../../../shared/components/gallery/interfaces/item.interface';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss',
})
export class ProjectPageComponent implements OnInit {
  public project?: Project;
  public projectSkills: SkillInterface[] = [];

  gridColumnTemplate: string = 'repeat(3, 1fr)';

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
      this.projectsService.getProjectById(projectId).subscribe({
        next: (project) => {
          this.project = project;
          this.loadProjectSkills(
            project.skillsAndTools.map((skill) => skill.id)
          );
        },
        error: (error) => console.error('Error loading the project:', error),
      });
    });
  }

  loadProjectSkills(skillIds: string[]): void {
    this.skillsService.getSkillsAndTools().subscribe((skills) => {
      const allSkills = Object.values(skills).flat();
      this.projectSkills = allSkills.filter((skill) =>
        skillIds.includes(skill.id)
      );
    });
  }

  getGridTemplateColumns(skills: SkillInterface[]): string {
    const columnCount = Math.min(5, skills.length || 1);
    return `repeat(${columnCount}, 1fr)`;
  }

  openUrl(url: string) {
    window.open(url, '_blank');
  }
}
