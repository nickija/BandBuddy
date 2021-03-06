import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  myJobPosting: boolean

  constructor(
    private jobPostingService: JobPostingService, 
    private route: ActivatedRoute,
    private authenticationService : AuthenticationService,
    private toastr: ToastrService,
    protected router: Router) { 
  }
  
  ngOnInit() {
    this.route.paramMap.subscribe((paramMap)=>{
      if (paramMap.has("id")){
        this.itemId = paramMap.get("id");
        this.getJobPostingDetails(this.itemId);
      }
      if(this.route.toString().includes("band")){
        this.bandJobPosting = true;
      }else if(this.route.toString().includes("my")){
        this.myJobPosting = true;
      }else{
        this.bandJobPosting = false;
        this.myJobPosting = false;
      }
    })
    this.generateCurrentUser();

  }

  getJobPostingDetails(id: string){
    this.jobPostingService.getSingle(id).subscribe(res => {
      this.itemModel = res;
    },
    error => {
      this.toastr.error("You have to complete your musician profile first");
      this.router.navigate(["musician-form"], {replaceUrl:true});
    })

  } 

  apply(){
    let jobPostingRequest : JobPostingRequest = {userId : this.currentUser.id, jobPostingId :  this.itemId};
    this.jobPostingService.applyJob(jobPostingRequest).subscribe(
      res => {
        this.toastr.success('Job Applied!');
        this.router.navigate(["my/job-posting"], {replaceUrl:true});
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

  editJobPosting(){
    this.router.navigate(["band/jobPosting/edit/"+ this.itemId], {replaceUrl:true});
  }
  jobPostingApplicants(){
    this.router.navigate(["band/jobPosting/applicant/"+ this.itemId], {replaceUrl:true});

  }
}
