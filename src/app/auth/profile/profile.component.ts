import { Component, Inject, OnInit } from '@angular/core';
import { User, UserService } from '../user.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{

  isEditing: boolean = false;
  profileForInput!: User;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public userService: UserService) {}

  ngOnInit(): void {
    
    this.profileForInput = {
      id: this.data.user.id,
      firstName: this.data.user.firstName,
      lastName: this.data.user.lastName,
      email: this.data.user.email,
      date: this.data.date,
      password: this.data.user.password,
      phone: this.data.user.phone,
      address: this.data.user.address,
      is_logged: this.data.user.is_logged,
      favourite: this.data.user.favourite
    }
    
  }

  enableEdit() {
    this.isEditing = !this.isEditing;
    console.log("click");
  }

  finishEditing() {
    this.data.user.email = this.profileForInput.email;
    this.data.user.password = this.profileForInput.password;
    this.data.user.address = this.profileForInput.address;
    this.data.user.favourite = this.profileForInput.favourite;
    
    console.log(this.data.user);
    console.log(UserService.dummyUserList);

    this.isEditing = false;

  }

}
