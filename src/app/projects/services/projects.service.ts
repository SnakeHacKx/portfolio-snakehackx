// src/app/services/project.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

import { Project } from '../../shared/components/project-slider/interfaces/project.interface';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private dataUrl = 'assets/projects.json';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<{ [key: string]: Project[] }> {
    console.log('getProjects');
    return this.http.get<{ [key: string]: Project[] }>(this.dataUrl);
  }
}
