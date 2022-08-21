import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './header/components/menu/menu.component';
import { HeaderActionButtonsComponent } from './header/components/header-action-buttons/header-action-buttons.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    HeaderActionButtonsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ], exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class TemplateModule { }
