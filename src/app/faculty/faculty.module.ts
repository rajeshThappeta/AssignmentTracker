import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{FormsModule} from '@angular/forms'
import { FacultyRoutingModule } from './faculty-routing.module';
import { FacultydashboardComponent } from './facultydashboard/facultydashboard.component';
import { AddsubjectComponent } from './addsubject/addsubject.component';


@NgModule({
  declarations: [FacultydashboardComponent, AddsubjectComponent],
  imports: [
    CommonModule,
    FacultyRoutingModule,
    FormsModule
  ]
})
export class FacultyModule { }
