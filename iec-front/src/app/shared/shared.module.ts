import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from './section-title/section-title.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SectionTitleComponent,
    ProductListComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SectionTitleComponent,
    ProductListComponent
  ]
})
export class SharedModule { }
