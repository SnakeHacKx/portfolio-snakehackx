// import { Component, Input } from '@angular/core';
// import { Project } from './interfaces/project.interface';

// @Component({
//   selector: 'shared-project-slider',
//   templateUrl: './project-slider.component.html',
//   styleUrls: ['./project-slider.component.scss'],
// })
// export class ProjectSliderComponent {
//   @Input() projects: Project[] = [];
//   currentIndex = 0; // Inicializa el índice del slide actual en 0

//   onNext(): void {
//     this.currentIndex = (this.currentIndex + 1) % this.projects.length;
//   }

//   onPrev(): void {
//     this.currentIndex =
//       (this.currentIndex - 1 + this.projects.length) % this.projects.length;
//   }

//   isActive(index: number): boolean {
//     return index === this.currentIndex;
//   }

//   isNext(index: number, offset: number): boolean {
//     return index === (this.currentIndex + offset) % this.projects.length;
//   }
// }

import { Component, Input } from '@angular/core';
import { Project } from './interfaces/project.interface';

@Component({
  selector: 'shared-project-slider',
  templateUrl: './project-slider.component.html',
  styleUrl: './project-slider.component.scss',
})
export class ProjectSliderComponent {

  @Input() projects: Project[] = [];

  next = document.querySelector('.next');
  prev = document.querySelector('.prev');

  onNext(): void {
    const items = document.querySelectorAll('.slide__item');
    document.querySelector('.slide')?.appendChild(items[0]);
  }

  onPrev(): void {
    const items = document.querySelectorAll('.slide__item');
    document.querySelector('.slide')?.prepend(items[items.length - 1]);
  }
}
