import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from './section-title/section-title.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { RouterModule } from '@angular/router';
import { ProductTableComponent } from './product-table/product-table.component';
import { ErrorDisplayComponent } from './error-display/error-display.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    SectionTitleComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductTableComponent,
    ErrorDisplayComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SectionTitleComponent,
    ProductListComponent,
    ProductTableComponent,
    ErrorDisplayComponent,
    FormsModule,
  ]
})
export class SharedModule { }
