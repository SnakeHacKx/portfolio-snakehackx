import { Component, HostListener } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isMobile = false;
  isMenuOpen = false;

  constructor(private sharedService: SharedService, private router: Router) {
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
    if (this.router.url !== '/') {
      // Asumiendo que '/' es tu HomePage
      this.router.navigate(['/'], { fragment: sectionId }).then(() => {
        // Opcional: espera a que la navegación se complete si es necesario
        setTimeout(() => this.sharedService.scrollToSection(sectionId), 100);
      });
    } else {
      this.sharedService.scrollToSection(sectionId);
    }
    if (this.isMobile) {
      this.isMenuOpen = false;
    }
  }

  checkScreenSize(width: number) {
    this.isMobile = width < 600;
  }
}
