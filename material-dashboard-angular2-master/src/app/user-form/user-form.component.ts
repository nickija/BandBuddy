import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IsActive } from 'app/models/is-active';
import { User } from 'app/models/user.model';
import { UserService } from 'app/services/user.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {


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

  constructor(private router: Router, service: UserService, private toastr: ToastrService) { 
    this.userService = service;
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  
  ngOnInit() {
  }

  register(){
    if (this.userRegisterFormGroup.valid){
      console.log(this.userRegisterFormGroup);    
      
      
      this.userService.persist(this.userRegisterFormGroup.value).subscribe(
        res => {
          this.toastr.success('Welcome!',res.firstName)
          console.log(res);
        },
        error => {
          this.toastr.error('Something bad happened')
        }
      );
      console.log("kalispera mesaaaa");
      //this.router.navigate(['/login']);
    }
    console.log(this.userRegisterFormGroup.value);
    console.log("kalispera");
  }

}
