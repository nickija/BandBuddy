import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  modelId: string;

  genrePlayedFormControl = new FormControl(null ,[Validators.required]);  
  instrumentRequiredFormControl = new FormControl(null ,[Validators.required]);
  skillFormControl = new FormControl(null ,[Validators.required]);  
  areaFormControl = new FormControl(null ,[Validators.required]);
  bandIdFormControl = new FormControl(null ,[Validators.required]);
  idFormControl = new FormControl("00000000-0000-0000-0000-000000000000");
  

  jobPostingRegisterFormGroup = new FormGroup({
    genrePlayed: this.genrePlayedFormControl,
    instrumentRequired: this.instrumentRequiredFormControl,
    skill: this.skillFormControl,
    area: this.areaFormControl,
    bandId: this.bandIdFormControl,
    id: this.idFormControl
  })

  private jobPostingService: JobPostingService;

  constructor(private router: Router, service: JobPostingService, private toastr: ToastrService, private route: ActivatedRoute) { 
    this.jobPostingService = service;
  }
  
  ngOnInit() {
    this.loadBand();
  }

  register(){
    if (this.jobPostingRegisterFormGroup.valid){
        
      this.jobPostingService.persist(this.jobPostingRegisterFormGroup.value).subscribe(
        res => {
          this.toastr.success('Job posting added!')
          console.log(res);
        },
        error => {
          this.toastr.error('Something bad happened')
        }
      );
    }
  }

  getEnumValues(Enum): Array<any>{
    const numericValues: any[] = Object.keys(Enum).map(key => Enum[key]).filter(value => typeof (value) === 'number');
    if (numericValues.length > 0) { return numericValues; }
  }

  loadBand(){
    this.route.paramMap.subscribe((paramMap)=>{
      if (paramMap.has("id")){
        this.modelId = paramMap.get("id");   
        this.bandIdFormControl.setValue(this.modelId);   
      }
    })
  }
}
