import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';


const routes: Routes = [
  {path:"admindashboard",component:AdmindashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
