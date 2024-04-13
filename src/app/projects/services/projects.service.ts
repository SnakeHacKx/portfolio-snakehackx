// src/app/services/project.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, throwError } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { Project } from '../../shared/components/project-slider/interfaces/project.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private dataUrl = 'assets/projects.json'; // Asegúrate de que esta es la ruta correcta a tus datos

  constructor(private http: HttpClient) {}

  getProjects(): Observable<{ [key: string]: Project[] }> {
    return this.http.get<{ [key: string]: Project[] }>(this.dataUrl);
  }

  getProjectById(id: string): Observable<Project> {
    return this.getProjects().pipe(
      mergeMap((projects) => {
        for (let key in projects) {
          const found = projects[key].find((project) => project.id === id);
          if (found) return of(found);
        }
        return throwError(() => new Error('Project not found')); // Emite un error si no se encuentra el proyecto
      }),
      catchError((error) => {
        console.error('Error fetching project by ID', error);
        return throwError(() => error); // Manejo de errores
      })
    );
  }
}
