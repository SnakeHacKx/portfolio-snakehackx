import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private sharedService: SharedService) {

  }
  goToSection(sectionId: string) {
    this.sharedService.scrollToSection(sectionId);
   }
}
