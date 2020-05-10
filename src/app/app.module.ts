import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { FacultyModule } from './faculty/faculty.module';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AdminModule,
    UserModule,
    FacultyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
