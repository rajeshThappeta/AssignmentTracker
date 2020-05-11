import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultydashboardComponent } from './facultydashboard/facultydashboard.component';
import { AddsubjectComponent } from './addsubject/addsubject.component';
import { ViewassignmentsComponent } from './viewassignments/viewassignments.component';
import { CreateassignmentsComponent } from './createassignments/createassignments.component';


const routes: Routes = [
  {path:"facultydashboard",component:FacultydashboardComponent,
    children:[
              {path:"viewassignments",component:ViewassignmentsComponent},
              {path:"createassignment",component:CreateassignmentsComponent}
            ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacultyRoutingModule { }
