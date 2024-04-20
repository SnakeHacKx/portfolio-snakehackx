import { Component, HostListener } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isMobile = false;
  isMenuOpen = false;

  constructor(private sharedService: SharedService) {
    this.checkScreenSize(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize(event.target.innerWidth);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  goToSection(sectionId: string) {
    this.sharedService.scrollToSection(sectionId);
    if (this.isMobile) {
      this.isMenuOpen = false;
    }
  }

  checkScreenSize(width: number) {
    this.isMobile = width < 600;
  }
}
