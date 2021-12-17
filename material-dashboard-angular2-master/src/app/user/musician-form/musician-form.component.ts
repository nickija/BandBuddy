import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AreaEnum } from 'app/models/area-enum';
import { IsActive } from 'app/models/is-active';
import { Musician } from 'app/models/musician.model';
import { SkillEnum } from 'app/models/skill-enum';
import { User } from 'app/models/user.model';
import { AuthenticationService } from 'app/services/authentication.service';
import { InstrumentService } from 'app/services/instrument.service';
import { MusicianService } from 'app/services/musician.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-musician-form',
  templateUrl: './musician-form.component.html',
  styleUrls: ['./musician-form.component.css']
})
export class MusicianFormComponent implements OnInit {

  currentUser: User;
  musicianModel: Musician;

  eArea = AreaEnum;
  eSkill = SkillEnum;

  educationTextBox: string;
  areaTextBox: AreaEnum;

  //MUSICIAN
  educationFormControl = new FormControl(null ,[Validators.required]);  
  areaFormControl = new FormControl(null ,[Validators.required]);
  idFormControl = new FormControl(null ,[Validators.required]);


  musicianRegisterFormGroup = new FormGroup({
    education: this.educationFormControl,
    area: this.areaFormControl,
    id: this.idFormControl
  })

  //INSTRUMENT
  instrumentTypeFormControl = new FormControl(null ,[Validators.required]);
  yearsExperienceTypeFormControl = new FormControl(null ,[Validators.required]);
  skillFormControl = new FormControl(null ,[Validators.required]);
  musicianIdFormControl = new FormControl(null ,[Validators.required]);


  instrumentRegisterFormGroup = new FormGroup({
    instrumentType: this.instrumentTypeFormControl,
    yearsExperiecnce: this.yearsExperienceTypeFormControl,
    skill: this.skillFormControl,
    musicianId: this.musicianIdFormControl
  })

  private musicianService: MusicianService;
  private instrumentService: InstrumentService;

  constructor(private router: Router, musicianService: MusicianService, instrumentService: InstrumentService, private toastr: ToastrService, private authenticationService :AuthenticationService) { 
    this.musicianService = musicianService;
    this.instrumentService = instrumentService;
  }

  // showSuccess() {
  //   this.toastr.success('Hello world!', 'Toastr fun!');
  // }

  
  ngOnInit() {
    this.authenticationService.currentUser.subscribe(x => {
      this.currentUser = x;

      this.getMusicianDetails(this.currentUser.id);
    });
  }

  getMusicianDetails(id: string){
    this.musicianService.getByUserId(id).subscribe(res => {
      this.musicianModel = res;
      this.educationTextBox = this.musicianModel.education;
      this.areaTextBox = this.musicianModel.area;
      this.idFormControl.setValue(this.musicianModel.id);
      this.musicianIdFormControl.setValue(this.musicianModel.id);
    })
  } 

  updateMusicianProfile(){
    if (this.musicianRegisterFormGroup.valid){
      console.log(this.musicianRegisterFormGroup);    
      
      
      this.musicianService.persist(this.musicianRegisterFormGroup.value).subscribe(
        res => {
          this.toastr.success('Musical Profile Updated!')
          console.log(res);
        },
        error => {
          this.toastr.error('Something bad happened')
        }
      );
      
    }
    
  }

  addInstrument(){
    if (this.instrumentRegisterFormGroup.valid){
      console.log(this.instrumentRegisterFormGroup);    
      
      
      this.instrumentService.persist(this.instrumentRegisterFormGroup.value).subscribe(
        res => {
          this.toastr.success('Instrument Added!')
          console.log(res);
        },
        error => {
          this.toastr.error('Something bad happened')
        }
      );

    }

  }

  // getSkillEnumValues(): Array<number>{
  //   var values = Object.values(SkillEnum);
  //   return values.slice(values.length/2, values.length);
  // }
  getEnumValues(Enum): Array<any>{
    const numericValues: any[] = Object.keys(Enum).map(key => Enum[key]).filter(value => typeof (value) === 'number');
    if (numericValues.length > 0) { return numericValues; }
}

}
