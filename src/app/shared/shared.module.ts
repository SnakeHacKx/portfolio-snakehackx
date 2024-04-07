import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { SectionHeadingComponent } from './components/section-heading/section-heading.component';
import { LogoIconComponent } from './components/logo-icon/logo-icon.component';

@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    LogoComponent,
    NavComponent,
    SectionHeadingComponent,
    LogoIconComponent,
  ],
  imports: [CommonModule],
  exports: [
    ButtonComponent,
    HeaderComponent,
    LogoComponent,
    NavComponent,
    SectionHeadingComponent,
    LogoIconComponent,
  ],
})
export class SharedModule {}
