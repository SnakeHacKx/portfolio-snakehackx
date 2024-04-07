import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-section-heading',
  templateUrl: './section-heading.component.html',
  styleUrl: './section-heading.component.scss'
})
export class SectionHeadingComponent {
  @Input() textContent: string = '';
}
