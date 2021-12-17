import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IsActive } from 'app/models/is-active';
import { User } from 'app/models/user.model';
import { AuthenticationService } from 'app/services/authentication.service';
import { UserService } from 'app/services/user.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-edit-user-form',
  templateUrl: './edit-user-form.component.html',
  styleUrls: ['./edit-user-form.component.css']
})
export class EditUserFormComponent implements OnInit {

  userModel: User;
  currentUser: User;

  userNameTextBox: string;
  passWordTextBox: string;
  firstNameTextBox: string;
  lastNameTextBox: string;
  

  firstNameFormControl = new FormControl(null ,[Validators.required]);  
  lastNameFormControl = new FormControl(null ,[Validators.required]);
  userNameFormControl = new FormControl(null ,[Validators.required]);  
  passWordFormControl = new FormControl(null ,[Validators.required]);
  idFormControl = new FormControl(null ,[Validators.required]);


  userRegisterFormGroup = new FormGroup({
    userName: this.userNameFormControl,
    passWord: this.passWordFormControl,
    firstName: this.firstNameFormControl,
    lastName: this.lastNameFormControl,
    id: this.idFormControl
  })

  private userService: UserService;

  constructor(private router: Router, service: UserService, private toastr: ToastrService, private authenticationService :AuthenticationService) { 
    this.userService = service;
  }

  // showSuccess() {
  //   this.toastr.success('Hello world!', 'Toastr fun!');
  // }

  
  ngOnInit() {
    this.authenticationService.currentUser.subscribe(x => {
      this.currentUser = x;

      this.getUserDetails(this.currentUser.id);
      this.idFormControl.setValue(this.currentUser.id);
    });
  }

  getUserDetails(id: string){
    this.userService.getSingle(this.currentUser.id).subscribe(res => {
      this.userModel = res;

      this.userNameTextBox = this.userModel.username;
      this.passWordTextBox = this.userModel.password;
      this.firstNameTextBox = this.userModel.firstName;
      this.lastNameTextBox = this.userModel.lastName;
    })
  } 

  edit(){
    if (this.userRegisterFormGroup.valid){
      console.log(this.userRegisterFormGroup);    
      
      this.userService.persist(this.userRegisterFormGroup.value).subscribe(
        res => {
          this.toastr.info('Profile Edited!',res.firstName)
          console.log(res);
        },
        error => {
          this.toastr.error('Something bad happened')
        }
      );
      //this.router.navigate(['/login']);
    }
  }

}
