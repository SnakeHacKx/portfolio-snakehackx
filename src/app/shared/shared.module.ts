import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { SectionHeadingComponent } from './components/section-heading/section-heading.component';
import { LogoIconComponent } from './components/logo-icon/logo-icon.component';
import { ProjectSliderComponent } from './components/project-slider/project-slider.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ProjectRoutingModule } from '../projects/projects-routing.module';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    LogoComponent,
    NavComponent,
    SectionHeadingComponent,
    LogoIconComponent,
    ProjectSliderComponent,
    TabsComponent,
    FooterComponent,
  ],
  imports: [CommonModule, ProjectRoutingModule],
  exports: [
    ButtonComponent,
    HeaderComponent,
    LogoComponent,
    NavComponent,
    SectionHeadingComponent,
    LogoIconComponent,
    ProjectSliderComponent,
    TabsComponent,
    FooterComponent
  ],
})
export class SharedModule {}
