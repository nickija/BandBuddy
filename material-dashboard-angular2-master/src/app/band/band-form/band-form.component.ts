import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  isNew: boolean = true;
  modelId: string;
  model: Band;
  
  bandNameFormControl = new FormControl(null ,[Validators.required]);  
  genreFormControl = new FormControl(null ,[Validators.required]);
  ownerIdFormControl = new FormControl(null ,[Validators.required]);
  idFormControl = new FormControl("00000000-0000-0000-0000-000000000000");

  bandRegisterFormGroup = new FormGroup({
    bandName: this.bandNameFormControl,
    genre: this.genreFormControl,
    ownerId: this.ownerIdFormControl,
    id: this.idFormControl
    
  })

  private bandService: BandService;

  constructor(private router: Router, service: BandService, private toastr: ToastrService, 
    private authenticationService: AuthenticationService, private route: ActivatedRoute) { 

    this.bandService = service;
  }

  // showSuccess() {
  //   this.toastr.success('Hello world!', 'Toastr fun!');
  // }

  
  ngOnInit() {
    this.generateUser();
    this.loadBand();
  }

  addBand(){
    if (this.bandRegisterFormGroup.valid){
      console.log(this.bandRegisterFormGroup);    
      
      
      this.bandService.persist(this.bandRegisterFormGroup.value).subscribe(
        res => {
          if(this.modelId)
          {
          this.toastr.success('Band Updated!', res.bandName)

          console.log(res);
          this.router.navigate(['/band'], { relativeTo: this.route });
          }
          else
          {
            this.toastr.success('Band Created!', res.bandName)

            console.log(res);
            this.router.navigate(['/band'], { relativeTo: this.route });
          }
        },
        error => {
          this.toastr.error('Something bad happened')
        }
      );
      
    }
    
  }

  generateUser(){
    this.authenticationService.currentUser.subscribe(x => {
      this.currentUser = x;
      this.ownerIdFormControl.setValue(this.currentUser.id);
    });
  }

  loadBand(){
    this.route.paramMap.subscribe((paramMap)=>{
      if (paramMap.has("id")){
        this.modelId = paramMap.get("id");
        this.getBandDetails(this.modelId);
        
      }
    })
  }

  getBandDetails(id: string){
    this.bandService.getSingle(id).subscribe(res => {
      this.isNew = false;
      this.model = res;
      this.generateEditorModel(this.model);
    })
  } 

  generateEditorModel(model: Band){
    this.bandRegisterFormGroup.get("bandName").setValue(model.bandName);
    this.bandRegisterFormGroup.get("genre").setValue(model.genre);
    this.bandRegisterFormGroup.get("ownerId").setValue(model.ownerId);
    this.bandRegisterFormGroup.get("id").setValue(model.id);
  }

}
