import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  
  errorExists = false;
  errorText = "";
  
  constructor(private userService: UserService, private router: Router) {}

  onSubmit(form: NgForm) {
    if(!this.userService.getUser(form.value.email)) {

      this.errorExists = false;
      var newUser = this.userService.registerUser(form.value.firstName, form.value.lastName, form.value.email, form.value.password, form.value.birthday, form.value.phone, form.value.address, 0);

      this.router.navigate(['/login']);
    }else {
      this.errorExists = true;
      this.errorText = "User with this email already exists.";
    }
  }
}
