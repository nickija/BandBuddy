import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobPostingFormComponent } from 'app/job-posting/job-posting-form/job-posting-form.component';
import { AreaEnum } from 'app/models/area-enum';
import { JobPosting } from 'app/models/job-posting.model';
import { Musician } from 'app/models/musician.model';
import { JobPostingRequest } from 'app/models/requests/job-posting-request.model';
import { SkillEnum } from 'app/models/skill-enum';
import { User } from 'app/models/user.model';
import { AuthenticationService } from 'app/services/authentication.service';
import { JobPostingService } from 'app/services/job-posting.service';
import * as Chartist from 'chartist';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-job-posting-preview',
  templateUrl: './job-posting-preview.component.html',
  styleUrls: ['./job-posting-preview.component.css']
})
export class JobPostingPreviewComponent implements OnInit {
  currentUser : User;
  private itemId;
  public itemModel: JobPosting;
  public skillEnum = SkillEnum;
  public areaEnum = AreaEnum;
  bandJobPosting: boolean

  constructor(
    private jobPostingService: JobPostingService, 
    private route: ActivatedRoute,
    private authenticationService : AuthenticationService,
    private toastr: ToastrService) { 
  }
  
  ngOnInit() {
    this.route.paramMap.subscribe((paramMap)=>{
      if (paramMap.has("id")){
        this.itemId = paramMap.get("id");
        this.getJobPostingDetails(this.itemId);
      }
      if(this.route.toString().includes("band")){
        this.bandJobPosting = true;
      }else{
        this.bandJobPosting = false;
      }
    })
    this.generateCurrentUser();

  }

  getJobPostingDetails(id: string){
    this.jobPostingService.getSingle(id).subscribe(res => {
      this.itemModel = res;

      this.getMusiciansByJobPosting();
    })

  } 

  apply(){
    let jobPostingRequest : JobPostingRequest = {userId : this.currentUser.id, jobPostingId :  this.itemId};
    this.jobPostingService.applyJob(jobPostingRequest).subscribe(
      res => {
        this.toastr.success('Job Applied!');
      },
      error =>{
        this.toastr.error("Something bad happens");
      }
    )
  }

  generateCurrentUser(){
    this.authenticationService.currentUser.subscribe(x => {
      this.currentUser = x;
    });
  }

  getMusiciansByJobPosting(){
    this.jobPostingService.getMusiciansByJobPosting(this.itemId).subscribe(
      res => console.log(res)
    )
  }

  edit(){

  }
  jobPostingApplicants(){

  }
}
