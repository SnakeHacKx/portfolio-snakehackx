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

  data: Item[] = [
    {
      imageSrc:
        'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: '1',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: '2',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1512850183-6d7990f42385?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: '3',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1503327431567-3ab5e6e79140?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: '4',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: '5',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1475727946784-2890c8fdb9c8?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: '6',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1668554245893-2430d0077217?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: '7',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1617042375876-a13e36732a04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: '8',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: '9',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: '10',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: '11',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1635830625698-3b9bd74671ca?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: '12',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1553390774-b4822481c894?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: '13',
    },
  ];
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
}
