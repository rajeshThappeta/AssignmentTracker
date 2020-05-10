import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addsubject',
  templateUrl: './addsubject.component.html',
  styleUrls: ['./addsubject.component.css']
})
export class AddsubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addSubject(ref:NgForm){
    console.log(ref.value)
  }
}
