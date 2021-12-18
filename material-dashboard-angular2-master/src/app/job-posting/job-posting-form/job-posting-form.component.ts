import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AreaEnum } from 'app/models/area-enum';
import { IsActive } from 'app/models/is-active';
import { JobPosting } from 'app/models/job-posting.model';
import { SkillEnum } from 'app/models/skill-enum';
import { JobPostingService } from 'app/services/job-posting.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-job-posting-form',
  templateUrl: './job-posting-form.component.html',
  styleUrls: ['./job-posting-form.component.css']
})
export class JobPostingFormComponent implements OnInit {

  isNew: boolean = true;
  eArea = AreaEnum;
  eSkill = SkillEnum;

  genrePlayedFormControl = new FormControl(null ,[Validators.required]);  
  instrumentRequiredFormControl = new FormControl(null ,[Validators.required]);
  skillFormControl = new FormControl(null ,[Validators.required]);  
  areaFormControl = new FormControl(null ,[Validators.required]);

  jobPostingRegisterFormGroup = new FormGroup({
    genrePlayed: this.genrePlayedFormControl,
    instrumentRequired: this.instrumentRequiredFormControl,
    skill: this.skillFormControl,
    area: this.areaFormControl
  })

  private jobPostingService: JobPostingService;

  constructor(private router: Router, service: JobPostingService, private toastr: ToastrService) { 
    this.jobPostingService = service;
  }

  // showSuccess() {
  //   this.toastr.success('Hello world!', 'Toastr fun!');
  // }

  
  ngOnInit() {
  }

  register(){
    if (this.jobPostingRegisterFormGroup.valid){
      console.log(this.jobPostingRegisterFormGroup);    
      
      
      this.jobPostingService.persist(this.jobPostingRegisterFormGroup.value).subscribe(
        res => {
          this.toastr.success('Welcome!')
          console.log(res);
        },
        error => {
          this.toastr.error('Something bad happened')
        }
      );
      console.log("kalispera mesaaaa");
      //this.router.navigate(['/login']);
    }
    console.log(this.jobPostingRegisterFormGroup.value);
    console.log("kalispera");
  }

  getEnumValues(Enum): Array<any>{
    const numericValues: any[] = Object.keys(Enum).map(key => Enum[key]).filter(value => typeof (value) === 'number');
    if (numericValues.length > 0) { return numericValues; }
}
}
