import { Component, OnInit } from '@angular/core';
import { JobPostingFormComponent } from 'app/job-posting-form/job-posting-form.component';
import { JobPosting } from 'app/models/job-posting.model';
import { Musician } from 'app/models/musician.model';
import { JobPostingService } from 'app/services/job-posting.service';
import * as Chartist from 'chartist';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-applicant-preview',
  templateUrl: './applicant-preview.component.html',
  styleUrls: ['./applicant-preview.component.css']
})
export class ApplicantPreviewComponent implements OnInit {

  
  private jobPostingService: JobPostingService;

  constructor(jobPostingService: JobPostingService) { 
    this.jobPostingService = jobPostingService;
  }
  
  ngOnInit() {
  }

  getJobPostingDetails(id: string): Observable<JobPosting>{
    return this.jobPostingService.getSingle(id);
  } 

  accept(){

    
  }

  reject(){
    
  }

}
