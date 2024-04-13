import { Component, Input } from '@angular/core';
import { Project } from '../../../projects/interfaces/project.interface';

@Component({
  selector: 'shared-project-slider',
  templateUrl: './project-slider.component.html',
  styleUrls: ['./project-slider.component.scss'],
})
export class ProjectSliderComponent {
  @Input() projects: Project[] = [];
  currentIndex = 0; // Inicializa el índice del slide actual en 0

  onNext(): void {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
  }

  onPrev(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.projects.length) % this.projects.length;
  }

  isActive(index: number): boolean {
    return index === this.currentIndex;
  }

  isNext(index: number, offset: number): boolean {
    if (this.projects.length <= offset) {
      return false; // Si no hay suficientes slides para el offset, no mostrar en pequeño
    }
    return index === (this.currentIndex + offset) % this.projects.length;
  }
}
