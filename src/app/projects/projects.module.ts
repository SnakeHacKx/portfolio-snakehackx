import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectRoutingModule } from './projects-routing.module';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProjectPageComponent],
  imports: [CommonModule, ProjectRoutingModule, SharedModule],
})
export class ProjectsModule {
  constructor() {
    console.log('ProjectsModule loaded');
  }
}
