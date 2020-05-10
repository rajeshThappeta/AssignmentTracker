import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultydashboardComponent } from './facultydashboard/facultydashboard.component';
import { AddsubjectComponent } from './addsubject/addsubject.component';


const routes: Routes = [
  {path:"facultydashboard",component:FacultydashboardComponent,children:[{path:"addsubject",component:AddsubjectComponent}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacultyRoutingModule { }
