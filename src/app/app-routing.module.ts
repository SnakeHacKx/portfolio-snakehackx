import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent, // O el componente que actúa como tu "Home"
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./projects/projects.module').then(
        (module) => module.ProjectsModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
