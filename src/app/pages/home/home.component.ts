import { Component } from '@angular/core';
import { Project } from '../../shared/components/project-slider/interfaces/project.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  skillsTabs: string[] = [
    'Frontend',
    'Backend',
    'Programación',
    'Diseño',
    'Herramientas',
    'Videojuegos',
    'Otras',
  ];

  projectTabs: string[] = [
    'Páginas Web',
    'Apps Móviles',
    'Diseños',
    'Videojuegos',
    'Ingeniería',
    'Otros',
  ];

  projects: Project[] = [
    {
      heading: 'FindAPro',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
      imagePath: '../../../assets/images/projects/mobile-app.jpg',
    },
    {
      heading: 'Videojuego 2D',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
      imagePath: '../../../assets/images/projects/game.jpg',
    },
    {
      heading: 'Portafolio Personal',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
      imagePath: '../../../assets/images/projects/ui-design.jpg',
    },
    {
      heading: 'Natours',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
      imagePath: '../../../assets/images/projects/webpage.jpg',
    },
    {
      heading: 'Métodos Numéricos',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!',
      imagePath: '../../../assets/images/projects/console-app.jpg',
    },
  ];

  activatedTabIndex: number = 0;

  tabChanged(tabIndex: number): void {
    this.activatedTabIndex = tabIndex;
  }
}
