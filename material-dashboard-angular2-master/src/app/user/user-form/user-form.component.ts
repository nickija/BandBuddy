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
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  show = false;
  visibilityPassword = "visibility_off"
  showHide : String = "password";

  firstNameFormControl = new FormControl(null ,[Validators.required]);  
  lastNameFormControl = new FormControl(null ,[Validators.required]);
  userNameFormControl = new FormControl(null ,[Validators.required]);  
  passWordFormControl = new FormControl(null ,[Validators.required]);


  userRegisterFormGroup = new FormGroup({
    userName: this.userNameFormControl,
    passWord: this.passWordFormControl,
    firstName: this.firstNameFormControl,
    lastName: this.lastNameFormControl,
  })


  constructor(private router: Router,
    private userService: UserService,
    private toastr: ToastrService,
    private location: Location) { 
  }

  
  ngOnInit() {
    
  }

  register(){
    if (this.userRegisterFormGroup.valid){    
      this.userService.persist(this.userRegisterFormGroup.value).subscribe(
        res => {
          this.toastr.success('Registration successful!',res.firstName)
          this.router.navigate(['/login'])
        },
        error => {
          this.toastr.error('Something bad happened')
        }
      );
    }
  }

  toggleShow() {
    this.show = !this.show;
    if (this.show) {
      this.showHide = "text"
      this.visibilityPassword = "visibility"
    }
    else {
      this.showHide = "password"
      this.visibilityPassword = "visibility_off"
    }
  }

  goBack(){
    this.location.back();
  }
}
