import { Injectable } from '@angular/core';
import { JobPosting } from '../models/job-posting.model';

@Injectable({
  providedIn: 'root'
})
export class JobPostingService {

  constructor() { }
  jobPostingData: JobPosting = new JobPosting();
}
