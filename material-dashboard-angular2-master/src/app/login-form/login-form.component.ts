import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IsActive } from 'app/models/is-active';
import { User } from 'app/models/user.model';
import { AuthenticationService } from 'app/services/authentication.service';
import { UserService } from 'app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';


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



  constructor(
    private authenticationService : AuthenticationService,
    private router: Router, 
    private toastr: ToastrService,
    private location: Location) { 
  }
  
  ngOnInit() {
  }

  login(){
    if (this.userRegisterFormGroup.valid){
     this.authenticationService.login(this.userNameFormControl.value,this.passWordFormControl.value).subscribe(
        res => {
          this.toastr.success('Welcome!',res.firstName)

          this.router.navigate(['/dashboard'])
        },
        error => {
          this.toastr.error('Something bad happened')
        }
      );
    }
  }
  goBack(){
    this.location.back();
  }
}
