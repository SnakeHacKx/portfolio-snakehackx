import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() textContent: string = '';
  @Input() buttonType: string = 'primary';

  @Output() buttonClick = new EventEmitter<any>();

  onClick(): void {
    this.buttonClick.emit();
  }
}
