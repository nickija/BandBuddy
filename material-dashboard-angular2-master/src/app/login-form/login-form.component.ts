import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IsActive } from 'app/models/is-active';
import { User } from 'app/models/user.model';
import { AuthenticationService } from 'app/services/authentication.service';
import { LoginService } from 'app/services/login.service';
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



  constructor(private authenticationService : AuthenticationService,private router: Router, service: LoginService, private toastr: ToastrService) { 
  }

  // showSuccess() {
  //   this.toastr.success('Hello world!', 'Toastr fun!');
  // }

  
  ngOnInit() {
  }

  login(){
    if (this.userRegisterFormGroup.valid){
    //   console.log(this.userRegisterFormGroup);    
      
      
     this.authenticationService.login(this.userNameFormControl.value,this.passWordFormControl.value).subscribe(
        res => {
          this.toastr.success('Welcome!',res.firstName)
          console.log(res);
        },
        error => {
          this.toastr.error('Something bad happened')
        }
      );
      console.log("kalispera mesaaaa");
    }
  }

}
