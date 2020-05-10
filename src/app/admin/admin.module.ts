import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';


@NgModule({
  declarations: [AdmindashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
