import { Component, OnInit } from '@angular/core';
import { ReadsubjectsService } from '../readsubjects.service';

@Component({
  selector: 'app-viewassignments',
  templateUrl: './viewassignments.component.html',
  styleUrls: ['./viewassignments.component.css']
})
export class ViewassignmentsComponent implements OnInit {

  subjects:object[]=[];
  selectedTopics:object[]=[];
  constructor(private readSubService:ReadsubjectsService) { }

  ngOnInit(): void {
    this.subjects=this.readSubService.readSubjects();
  }
  getSelectedSubject(selectedSubject){
    console.log(selectedSubject);
    this.subjects.forEach((subject)=>{
      if(subject["subjectName"]==selectedSubject){
        this.selectedTopics=subject["topics"];
      }
    });
    console.log(this.selectedTopics)
  }

  getSelectedTopic(selectedTopic){

  }
}
