import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../../../projects/interfaces/project.interface';

@Component({
  selector: 'shared-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() textContent: string = '';
  @Input() buttonType: 'primary' | 'secondary' | 'tertiary' = 'primary';

  @Input() iconName?: string = ''; // El nombre del ícono del sprite
  @Input() iconCustomClass: string = '';
  @Input() openInNewTab: boolean = false;
  @Input() projectId?: string;

  @Output() buttonClick = new EventEmitter<void>();

  private baseSvgPath: string = '../../../assets/icons/sprite.svg#';

  get fullPath(): string {
    return `${this.baseSvgPath}${this.iconName}`;
  }

  onClick(): void {
    if (this.openInNewTab && this.projectId) {
      // Abrir en una nueva pestaña
      window.open(`https://deployment--snakehackx.netlify.app/projects/${this.projectId}`, '_blank');
    } else {
      // Emitir evento
      this.buttonClick.emit();
    }
  }
}
