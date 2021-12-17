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
  selector: 'app-edit-band-form',
  templateUrl: './edit-band-form.component.html',
  styleUrls: ['./edit-band-form.component.css']
})
export class EditBandFormComponent implements OnInit {

  bandId: string;
  bandModel: Band;
  
  bandNameFormControl = new FormControl(null ,[Validators.required]);  
  genreFormControl = new FormControl(null ,[Validators.required]);
  idFormControl = new FormControl(null ,[Validators.required]);
  

  bandRegisterFormGroup = new FormGroup({
    bandName: this.bandNameFormControl,
    genre: this.genreFormControl,
    id: this.idFormControl
    
  })

  private bandService: BandService;

  constructor(private router: Router, service: BandService, private toastr: ToastrService) { 
    this.bandService = service;
  }

  // showSuccess() {
  //   this.toastr.success('Hello world!', 'Toastr fun!');
  // }

  
  ngOnInit() {
    
    this.getBandDetails(this.bandId);
    
  }

  addBand(){
    if (this.bandRegisterFormGroup.valid){
      console.log(this.bandRegisterFormGroup);    
      
      
      this.bandService.persist(this.bandRegisterFormGroup.value).subscribe(
        res => {
          this.toastr.info('Band Updated!', res.bandName)
          console.log(res);
        },
        error => {
          this.toastr.error('Something bad happened')
        }
      );
      
    }
    
  }

  getBandDetails(id: string){
    this.bandService.getSingle(id).subscribe(res => {
      this.bandModel = res;
      this.idFormControl.setValue(this.bandModel.id);
    })
  } 

}
