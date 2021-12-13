import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IsActive } from 'app/models/is-active';
import { User } from 'app/models/user.model';
import { UserService } from 'app/services/user.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  userNameFormControl = new FormControl(null ,[Validators.required]);  
  passWordFormControl = new FormControl(null ,[Validators.required]);

  userRegisterFormGroup = new FormGroup({
    userName: this.userNameFormControl,
    passWord: this.passWordFormControl,
  })

  private userService: UserService;

  constructor(private router: Router, service: UserService, private toastr: ToastrService) { 
    this.userService = service;
  }

  // showSuccess() {
  //   this.toastr.success('Hello world!', 'Toastr fun!');
  // }

  
  ngOnInit() {
  }

  login(){
    // if (this.userRegisterFormGroup.valid){
    //   console.log(this.userRegisterFormGroup);    
      
      
    //   this.userService.persist(this.userRegisterFormGroup.value).subscribe(
    //     res => {
    //       this.toastr.success('Welcome!',res.firstName)
    //       console.log(res);
    //     },
    //     error => {
    //       this.toastr.error('Something bad happened')
    //     }
    //   );
    //   console.log("kalispera mesaaaa");
    // }
    // console.log(this.userRegisterFormGroup.value);
    // console.log("kalispera");
  }

}
