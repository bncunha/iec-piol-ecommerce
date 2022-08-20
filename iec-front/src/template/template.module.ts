import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './header/components/menu/menu.component';
import { HeaderActionButtonsComponent } from './header/components/header-action-buttons/header-action-buttons.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    HeaderActionButtonsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ], exports: [
    HeaderComponent
  ]
})
export class TemplateModule { }
