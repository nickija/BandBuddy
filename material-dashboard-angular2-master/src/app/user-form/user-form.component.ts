import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IsActive } from 'app/models/is-active';
import { User } from 'app/models/user.model';
import { UserService } from 'app/services/user.service';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  private createdUser: User;

  firstNameFormControl = new FormControl(null ,[Validators.required]);  
  lastNameFormControl = new FormControl(null ,[Validators.required]);
  userNameFormControl = new FormControl(null ,[Validators.required]);  
  passWordFormControl = new FormControl(null ,[Validators.required]);

  userRegisterFormGroup = new FormGroup({
    userName: this.userNameFormControl,
    passWord: this.passWordFormControl,
    firstName: this.firstNameFormControl,
    lastName: this.lastNameFormControl
  })

  private userService: UserService;

  constructor(private router: Router, service: UserService) { 
    this.userService = service;
  }

  
  ngOnInit() {
  }

  register(){
    if (this.userRegisterFormGroup.valid){
      console.log(this.userRegisterFormGroup);

      // this.createdUser.id = "";
      // this.createdUser.isActive = IsActive.Active;
      
      this.createdUser.firstName = this.firstNameFormControl.value;
      this.createdUser.lastName = this.lastNameFormControl.value;
      this.createdUser.username = this.userNameFormControl.value;
      this.createdUser.password = this.passWordFormControl.value;

      
      this.userService.persist(this.createdUser)
      console.log("kalispera mesaaaa");
      //this.router.navigate(['/login']);
    }
    console.log("kalispera");
  }

}
