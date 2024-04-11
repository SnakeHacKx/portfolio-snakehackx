import { Component } from '@angular/core';
import { Project } from '../../shared/components/project-slider/interfaces/project.interface';
import { SharedService } from '../../shared/services/shared.service';

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
    'Backends',
    'Diseños',
    'Videojuegos',
    'Ingeniería',
    'Machine Learning',
    'Otros',
  ];

  webPagesProjects: Project[] = [
    {
      heading: 'Natours',
      description: 'Página web estática hecha con HTML5 y SASS.',
      imagePath: '../../../assets/images/placeholder.webp',
    },
    {
      heading: 'FIXPANAMA',
      description:
        'Página web básica desarrollada en WordPress y PHP para la empresa FixPanama ubicada en la Ciudad de Panamá.',
      imagePath: '../../../assets/images/placeholder.webp',
    },
    {
      heading: 'Placeholder 1',
      description:
        'Página web básica desarrollada en WordPress y PHP para la empresa FixPanama ubicada en la Ciudad de Panamá.',
      imagePath: '../../../assets/images/placeholder.webp',
    },
    {
      heading: 'Placeholder 2',
      description:
        'Página web básica desarrollada en WordPress y PHP para la empresa FixPanama ubicada en la Ciudad de Panamá.',
      imagePath: '../../../assets/images/placeholder.webp',
    },
  ];

  mobileAppsProjects: Project[] = [
    {
      heading: 'FindAPro',
      description: 'Aplicación de bolsa de trabajo (app en construcción).',
      imagePath: '../../../assets/images/placeholder.webp',
    },
    {
      heading: 'ChatApp',
      description:
        'Aplicación básica que tiene como objetivo tener un chat privado utilizando web sockets.',
      imagePath: '../../../assets/images/placeholder.webp',
    },
    {
      heading: 'Yes No Maybe App',
      description:
        'Simulación de un chat en la cual se usa un API externo para recibir una respuesta en formato GIF.',
      imagePath: '../../../assets/images/placeholder.webp',
    },
    {
      heading: 'TokTik',
      description:
        'Clon de TikTok en el cual se hace uso de controladores de video, gradientes, loops, mappers y mucho más.',
      imagePath: '../../../assets/images/placeholder.webp',
    },
    {
      heading: 'Widgets App',
      description:
        'Aplicación en donde se muestran funcionando una gran mayoría de widgets disponibles en Flutter y gestionando su estado con Riverpod.',
      imagePath: '../../../assets/images/placeholder.webp',
    },
    {
      heading: 'Cinemapedia',
      description:
        'Aquí podemos encontrar información películas que se estén estrenando en cines, que proximamente saldrán o ya antiguas, todo esto se hace consultando la API de TheMovieDB',
      imagePath: '../../../assets/images/placeholder.webp',
    },
    {
      heading: 'Teslo Shop Mobile',
      description:
        'Tienda de ropa en formato de app en la cual hacemos uso de un backend creato en NestJS utilizando Docker para su desarrollo y desplegado en la nube.',
      imagePath: '../../../assets/images/placeholder.webp',
    },
  ];

  designProjects: Project[] = [
    {
      heading: 'Frigg',
      description:
        'Diseño UI/UX y propotipado en Figma de una aplicación de citas para dispositivos móviles.',
      imagePath: '../../../assets/images/placeholder.webp',
    },
    {
      heading: 'FindAPro',
      description:
        'Diseño UI/UX y prototipo en Figma de una aplicación de bolsa de rabajo para dispositivos móviles.',
      imagePath: '../../../assets/images/placeholder.webp',
    },
    {
      heading: 'Portafolio Personal - Omar Medina',
      description:
        'Diseño UI/UX y prototipado en Figma sobre este portafolio web en el que usted está.',
      imagePath: '../../../assets/images/placeholder.webp',
    },
    {
      heading: 'Sistema de Recomendación',
      description:
        'Diseño UI/UX y prototipado en Figma sobre una aplicación móvil creada para una asignatura universitaria llamada Sistemas Basados en el Conocimiento.',
      imagePath: '../../../assets/images/placeholder.webp',
    },
    {
      heading: 'Finance Admin',
      description:
        'Diseño UI/UX y prototipado en Figma sobre una aplicación web la cual se encarga de administrar los gastos de una cevichería y casa.',
      imagePath: '../../../assets/images/placeholder.webp',
    },
    {
      heading: 'Sistema de Calificación UTP',
      description:
        'Diseño UI/UX y prototipado en Figma sobre una aplicación web a modo de sugerencia a la Universidad Tecnológica de Panamá para el cambio de interfaz e hsitorial de notas de los estudiantes.',
      imagePath: '../../../assets/images/placeholder.webp',
    },
    {
      heading: 'Portafolio Web Personal',
      description:
        'Diseño UI/UX y prototipado en Figma una web estática que serviría como portafolio.',
      imagePath: '../../../assets/images/placeholder.webp',
    },
  ];

  backendProjects: Project[] = [
    {
      heading: 'TO-DO App (NodeJS)',
      description:
        'Aplicación de consola en JS utilizando Inquirer que tiene como ojectivo crear una lista de tareas la cual el usuario puede marcar como hechas o pendientes en NodeJS y vanilla JavaScript.',
      imagePath: '../../../assets/images/placeholder.webp',
    },
    {
      heading: 'Clima App',
      description:
        'Usando la API de OpenWeather tenemos una aplicación de consola que nis brinda información (clima, ubicación, temperatura...) de una ciudad que busquemos, esto nos lo permite el uso de otra API de Mapbox Places en NodeJS y vanilla JavaScrip.',
      imagePath: '../../../assets/images/placeholder.webp',
    },
    {
      heading: 'WebServer',
      description: 'Servidor Web con Express en NodeJS y vanilla JavaScript.',
      imagePath: '../../../assets/images/placeholder.webp',
    },
    {
      heading: 'RESTServer',
      description:
        'Servidor REST con un CRUD usando MongoDB en NodeJS y vanilla JavaScript.',
      imagePath: '../../../assets/images/placeholder.webp',
    },
    {
      heading: 'Auth App',
      description:
        'Autenticación de usuarios utilizando Json Web Tokens (JWT) en NodeJS y vanilla JavaScript.',
      imagePath: '../../../assets/images/placeholder.webp',
    },
    {
      heading: 'Tickets App',
      description:
        'Aplicación de colas en tiempo real haciendo uso de Web Sockets en NodeJS y vanilla JavaScript.',
      imagePath: '../../../assets/images/placeholder.webp',
    },
    {
      heading: 'Socket Chat',
      description:
        'Chat en tiempo real usando Web Sockets en NodeJS y vanilla JavaScript.',
      imagePath: '../../../assets/images/placeholder.webp',
    },
    {
      heading: 'Mongo Pokédex',
      description:
        'CRUD en NestJS y TypeScript contra una base de datos hecha en MongoDB.',
      imagePath: '../../../assets/images/placeholder.webp',
    },
    {
      heading: 'Teslo Shop Web',
      description:
        'Tienda de ropa en formato de web utilizando NestJS y TypeScript contra una base de datos hecha en Postgres utilizando TypeORM. Esta misma aplicación web hace uso de Web Sockets y Gateways.',
      imagePath: '../../../assets/images/placeholder.webp',
    },
    {
      heading: 'TO-DO App (NestJS + GraphQL)',
      description:
        'Aplicación creada y probada en el sandbox de Apollo Studio que tiene como ojectivo crear una lista de tareas la cual el usuario puede marcar como hechas o pendientes.',
      imagePath: '../../../assets/images/placeholder.webp',
    },
    {
      heading: 'AnyList',
      description:
        'Backend completo en NestJS + GraphQL usando Queries y Mutaciones contra una base de datos PostgreSQL la cual permite crear, editar y eliminar items de una lista de productos. Además posee autenticación y autorización mediante JWT.',
      imagePath: '../../../assets/images/placeholder.webp',
    },
  ];

  machineLearningProjects: Project[] = [
    {
      heading: 'Sistema de Recomendación de Películas',
      description: 'Algoritmo para la recomendación de películas usando Python',
      imagePath: '../../../assets/images/placeholder.webp',
    },
    {
      heading: 'Open Jobs',
      description:
        'Algoritmo para análisis y recomendación de trabajos de entre 50 industrias diferentes (software, electrónica, entretenimiento, medicina, etc.)',
      imagePath: '../../../assets/images/placeholder.webp',
    },
    {
      heading: 'Motor de Recomendación de Libros',
      description:
        'Motor de recomendación de libros en Python usando técnicas como NNL (Nearest Neighbor Learning).',
      imagePath: '../../../assets/images/placeholder.webp',
    },
  ];

  skillTabIndex: number = 0;
  projectTabIndex: number = 0;

  constructor(private sharedService: SharedService) {}

  skillTabChanged(tabIndex: number): void {
    this.skillTabIndex = tabIndex;
  }

  projectTabChanged(tabIndex: number): void {
    this.projectTabIndex = tabIndex;
  }

  goToSection(sectionId: string) {
    this.sharedService.scrollToSection(sectionId);
  }
}
