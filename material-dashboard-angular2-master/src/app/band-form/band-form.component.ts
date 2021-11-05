import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IsActive } from 'app/models/is-active';
import { Band } from 'app/models/band.model';
import { BandService } from 'app/services/band.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-band-form',
  templateUrl: './band-form.component.html',
  styleUrls: ['./band-form.component.css']
})
export class BandFormComponent implements OnInit {


  
  bandNameFormControl = new FormControl(null ,[Validators.required]);  
  genreFormControl = new FormControl(null ,[Validators.required]);

  bandRegisterFormGroup = new FormGroup({
    bandName: this.bandNameFormControl,
    genre: this.genreFormControl,
    
  })

  private bandService: BandService;

  constructor(private router: Router, service: BandService, private toastr: ToastrService) { 
    this.bandService = service;
  }

  // showSuccess() {
  //   this.toastr.success('Hello world!', 'Toastr fun!');
  // }

  
  ngOnInit() {
  }

  register(){
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
      console.log("kalispera mesaaaa");
      //this.router.navigate(['/login']);
    }
    console.log(this.bandRegisterFormGroup.value);
    console.log("kalispera");
  }

}
