import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() textContent: string = '';
  @Input() buttonType: string = 'primary';

  @Input() iconName?: string = ''; // El nombre del ícono del sprite
  @Input() iconCustomClass: string = '';
  private baseSvgPath: string = '../../../assets/icons/sprite.svg#';

  @Output() buttonClick = new EventEmitter<any>();

  get fullPath(): string {
    return `${this.baseSvgPath}${this.iconName}`;
  }

  onClick(): void {
    this.buttonClick.emit();
  }
}
