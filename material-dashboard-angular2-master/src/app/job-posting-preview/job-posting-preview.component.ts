import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobPostingFormComponent } from 'app/job-posting-form/job-posting-form.component';
import { AreaEnum } from 'app/models/area-enum';
import { JobPosting } from 'app/models/job-posting.model';
import { Musician } from 'app/models/musician.model';
import { SkillEnum } from 'app/models/skill-enum';
import { JobPostingService } from 'app/services/job-posting.service';
import * as Chartist from 'chartist';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-job-posting-preview',
  templateUrl: './job-posting-preview.component.html',
  styleUrls: ['./job-posting-preview.component.css']
})
export class JobPostingPreviewComponent implements OnInit {

  private itemId;
  private jobPostingService: JobPostingService;
  public itemModel: JobPosting;
  public skillEnum = SkillEnum;
  public areaEnum = AreaEnum;

  constructor(jobPostingService: JobPostingService, private route: ActivatedRoute) { 
    this.jobPostingService = jobPostingService;
  }
  
  ngOnInit() {
    this.route.paramMap.subscribe((paramMap)=>{
      if (paramMap.has("id")){
        this.itemId = paramMap.get("id");
        this.getJobPostingDetails(this.itemId);
      }
    })

  }

  getJobPostingDetails(id: string){
    this.jobPostingService.getSingle(id).subscribe(res => {
      console.log(res);
      this.itemModel = res;
    })
  } 

  apply(/*musician: Musician*/){

    //add musician to this jobposting list
  }

}
