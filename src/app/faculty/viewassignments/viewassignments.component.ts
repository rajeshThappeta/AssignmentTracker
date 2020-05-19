import { Component, OnInit } from '@angular/core';
import { ReadsubjectsService } from '../readsubjects.service';
import { CreateOrReadBatchesService } from '../create-or-read-batches.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewassignments',
  templateUrl: './viewassignments.component.html',
  styleUrls: ['./viewassignments.component.css']
})
export class ViewassignmentsComponent implements OnInit {

  subjects:object[]=[];
  selectedTopics:object[]=[];
  assignmentsFromSelectedTopic:string[]=[];
  batches:string[]=[];
  constructor(private readSubService:ReadsubjectsService,private createOrReadService:CreateOrReadBatchesService,private router:Router) { }

  ngOnInit(): void {
    this.subjects=this.readSubService.readSubjects();
    this.batches=this.createOrReadService.getbatches();
  }


  //choose subject
  getSelectedSubject(selectedSubject){
    console.log(selectedSubject);
    this.subjects.forEach((subject)=>{
      if(subject["subjectName"]==selectedSubject){
        this.selectedTopics=subject["topics"];
      }
    });
    console.log(this.selectedTopics)
  }


  //choose topic
  getSelectedTopic(selectedTopicFromForm){
    console.log("selectedTopicFromForm",selectedTopicFromForm);
    console.log("selected topics",this.selectedTopics)
   

    this.selectedTopics.forEach((selectedTopic)=>{
      console.log(selectedTopicFromForm,"    ",selectedTopic["topicName"],"    ",selectedTopic["assignments"])
      if(selectedTopicFromForm==selectedTopic["topicName"]){
        this.assignmentsFromSelectedTopic=selectedTopic["assignments"];
        console.log(this.assignmentsFromSelectedTopic)
      }
      
    })
  }


  assigned:boolean=false;
  //assign to students
  assignToStudent(assignment){
    this.assigned=true;
    console.log(assignment);
  }


   gotoViewAssignmentsComponents(){
    this.router.navigateByUrl("/facultydashboard/assignmentstatus");
   }
}
