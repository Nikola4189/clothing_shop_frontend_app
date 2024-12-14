import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
    errorExists = false;
    errorText = "";
  
    constructor(private userService: UserService, private router: Router) {}

    onSubmit(form: NgForm) {

      var user = this.userService.getUser(form.value.email);

      if(!user) {

        this.errorExists = true;
        this.errorText = "User with this email already don`t exists " + form.value.email;
        return;

      }else if(this.userService.isPasswordCorrect(form.value.email, form.value.password)) {

          this.errorExists = false;
          user.is_logged = 1;
          this.userService.currentUser = user;

          this.router.navigate(['']);
        }else {
        this.errorExists = true;
        this.errorText = "This password is incorect.";
        }
    }
}
