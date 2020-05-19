import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{FormsModule} from '@angular/forms'
import { FacultyRoutingModule } from './faculty-routing.module';
import { FacultydashboardComponent } from './facultydashboard/facultydashboard.component';
import { AddsubjectComponent } from './addsubject/addsubject.component';
import { ViewassignmentsComponent } from './viewassignments/viewassignments.component';
import { CreateassignmentsComponent } from './createassignments/createassignments.component';
import { ReadSubjectsTopicsComponent } from './read-subjects-topics/read-subjects-topics.component';
import { ReadBatchesComponent } from './read-batches/read-batches.component';
import { CreateSubjectTopicComponent } from './create-subject-topic/create-subject-topic.component';
import { AssignmentstatusComponent } from './assignmentstatus/assignmentstatus.component';


@NgModule({
  declarations: [FacultydashboardComponent, AddsubjectComponent, ViewassignmentsComponent, CreateassignmentsComponent, ReadSubjectsTopicsComponent, ReadBatchesComponent, CreateSubjectTopicComponent, AssignmentstatusComponent],
  imports: [
    CommonModule,
    FacultyRoutingModule,
    FormsModule
  ]
})
export class FacultyModule { }
