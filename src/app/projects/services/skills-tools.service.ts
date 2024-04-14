import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, throwError } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { SkillInterface } from '../interfaces/skills-tools.interface';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private dataUrl = 'assets/skills-tools.json'; // Asegúrate de que esta es la ruta correcta a tus datos

  constructor(private http: HttpClient) {}

  getSkillsAndTools(): Observable<{ [key: string]: SkillInterface[] }> {
    return this.http.get<{ [key: string]: SkillInterface[] }>(this.dataUrl);
  }

  getProjectById(id: string): Observable<SkillInterface> {
    return this.getSkillsAndTools().pipe(
      mergeMap((skills) => {
        for (let key in skills) {
          const found = skills[key].find((skill) => skill.id === id);
          if (found) return of(found);
        }
        return throwError(() => new Error('Skill or Tool not found')); // Emite un error si no se encuentra el proyecto
      }),
      catchError((error) => {
        console.error('Error fetching skill or tool by ID', error);
        return throwError(() => error); // Manejo de errores
      })
    );
  }
}
