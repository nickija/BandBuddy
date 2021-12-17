import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IsActive } from 'app/models/is-active';
import { Band } from 'app/models/band.model';
import { BandService } from 'app/services/band.service';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'app/services/authentication.service';
import { User } from 'app/models/user.model';


@Component({
  selector: 'app-band-form',
  templateUrl: './band-form.component.html',
  styleUrls: ['./band-form.component.css']
})
export class BandFormComponent implements OnInit {

  currentUser: User;
  
  bandNameFormControl = new FormControl(null ,[Validators.required]);  
  genreFormControl = new FormControl(null ,[Validators.required]);
  ownerIdFormControl = new FormControl(null ,[Validators.required]);

  bandRegisterFormGroup = new FormGroup({
    bandName: this.bandNameFormControl,
    genre: this.genreFormControl,
    ownerId: this.ownerIdFormControl
    
  })

  private bandService: BandService;

  constructor(private router: Router, service: BandService, private toastr: ToastrService, private authenticationService: AuthenticationService) { 
    this.bandService = service;
  }

  // showSuccess() {
  //   this.toastr.success('Hello world!', 'Toastr fun!');
  // }

  
  ngOnInit() {
    this.authenticationService.currentUser.subscribe(x => {
      this.currentUser = x;
      this.ownerIdFormControl.setValue(this.currentUser.id);
    });
  }

  addBand(){
    if (this.bandRegisterFormGroup.valid){
      console.log(this.bandRegisterFormGroup);    
      
      
      this.bandService.persist(this.bandRegisterFormGroup.value).subscribe(
        res => {
          this.toastr.success('Band Created!', res.bandName)
          console.log(res);
        },
        error => {
          this.toastr.error('Something bad happened')
        }
      );
      
    }
    
  }

}
