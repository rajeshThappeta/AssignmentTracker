import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  submitLoginForm(ref:NgForm)
  {
    console.log(ref.value);
    if(ref.value.role=="admin")
    {
    this.router.navigate(["../admindashboard"]);
    }

    if(ref.value.role=="faculty")
    {
    this.router.navigate(["../facultydashboard"]);
    }
  }
}
