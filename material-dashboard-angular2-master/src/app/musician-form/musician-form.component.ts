import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AreaEnum } from 'app/models/area-enum';
import { IsActive } from 'app/models/is-active';
import { Musician } from 'app/models/musician.model';
import { SkillEnum } from 'app/models/skill-enum';
import { InstrumentService } from 'app/services/instrument.service';
import { MusicianService } from 'app/services/musician.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-musician-form',
  templateUrl: './musician-form.component.html',
  styleUrls: ['./musician-form.component.css']
})
export class MusicianFormComponent implements OnInit {

  eArea = AreaEnum;
  eSkill = SkillEnum;
  //userid where?
  educationFormControl = new FormControl(null ,[Validators.required]);  
  areaFormControl = new FormControl(null ,[Validators.required]);

  musicianRegisterFormGroup = new FormGroup({
    education: this.educationFormControl,
    area: this.areaFormControl
  })


  //musicianIdFormControl = new FormControl(null ,[Validators.required]);  
  instrumentTypeFormControl = new FormControl(null ,[Validators.required]);
  yearsExperienceTypeFormControl = new FormControl(null ,[Validators.required]);
  skillFormControl = new FormControl(null ,[Validators.required]);

  instrumentRegisterFormGroup = new FormGroup({
    //musicianId: this.musicianIdFormControl,
    instrumentType: this.instrumentTypeFormControl,
    yearsExperience: this.yearsExperienceTypeFormControl,
    skill: this.skillFormControl
  })

  private musicianService: MusicianService;
  private instrumentService: InstrumentService;

  constructor(private router: Router, musicianService: MusicianService, instrumentService: InstrumentService, private toastr: ToastrService) { 
    this.musicianService = musicianService;
    this.instrumentService = instrumentService;
  }

  // showSuccess() {
  //   this.toastr.success('Hello world!', 'Toastr fun!');
  // }

  
  ngOnInit() {
    console.log(this.eSkill);
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
      console.log("kalispera mesaaaa");
      //this.router.navigate(['/login']);
    }
    console.log(this.musicianRegisterFormGroup.value);
    console.log("kalispera");
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
      console.log("kalispera mesaaaa");
      //this.router.navigate(['/login']);
    }
    console.log(this.instrumentRegisterFormGroup.value);
    console.log("kalispera");

  }

}
