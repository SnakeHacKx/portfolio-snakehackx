import { Component } from '@angular/core';

@Component({
  selector: 'shared-project-slider',
  templateUrl: './project-slider.component.html',
  styleUrl: './project-slider.component.scss',
})
export class ProjectSliderComponent {
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
