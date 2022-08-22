import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusRoutingModule } from './status-routing.module';
import { StatusComponent } from './status.component';
import { StatusSituationComponent } from './components/status-situation/status-situation.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    StatusComponent,
    StatusSituationComponent
  ],
  imports: [
    CommonModule,
    StatusRoutingModule,
    SharedModule
  ]
})
export class StatusModule { }
