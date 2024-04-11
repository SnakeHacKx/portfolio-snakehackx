import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-logo-icon',
  templateUrl: './logo-icon.component.html',
  styleUrl: './logo-icon.component.scss',
})
export class LogoIconComponent {
  @Input() text: string = '';
  @Input() iconName: string = '';
  @Input() customClass: string = '';
  @Input() url: string = '';

  private baseSvgPath: string = '../../../assets/icons/sprite.svg#';

  get fullPath() {
    return `${this.baseSvgPath}${this.iconName}`;
    // ../../../assets/icons/sprite.svg#icon-github
  }
}
