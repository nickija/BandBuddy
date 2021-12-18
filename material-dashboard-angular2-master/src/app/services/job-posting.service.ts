import { Injectable } from '@angular/core';
import { JobPosting } from '../models/job-posting.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { JobPostingLookup } from '../lookups/job-posting-lookup';
import { QueryResult } from 'app/models/query-result';
import { JobPostingRequest } from 'app/models/requests/job-posting-request.model';
import { Musician } from 'app/models/musician.model';

@Injectable({
  providedIn: 'root'
})
export class JobPostingService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,) { }


  private url = 'http://localhost:5000/api/jobPosting/'; 

  getSingle(id: string): Observable<JobPosting> {
    const url = `${this.url}getSingle/${id}`;
    return this.http.get<JobPosting>(url,this.httpOptions);
  }

  query(jobPostingLookup : JobPostingLookup): Observable<QueryResult<JobPosting>>{
    const url = `${this.url}query`;
    
    return this.http.post<QueryResult<JobPosting>>(url,jobPostingLookup,this.httpOptions);
  }

  persist(persistedJobPosting : JobPosting) : Observable<JobPosting>{
    const url = `${this.url}persist`;
    return this.http.post<JobPosting>(url,persistedJobPosting,this.httpOptions)
  }

  delete(id : string) : Observable<JobPosting>{
    const url = `${this.url}delete/${id}`;
    return this.http.delete<JobPosting>(url,this.httpOptions)
  }

  applyJob(JobPostingRequest : JobPostingRequest) : Observable<Boolean>{
    const url = `${this.url}applyJobPosting`;
    return this.http.post<Boolean>(url,JobPostingRequest,this.httpOptions);
  }

  getJobPostingsByMusician(musicianId : string) : Observable<JobPosting[]>{
    const url = `${this.url}getJobPostingsByMusician/${musicianId}`
    return this.http.get<JobPosting[]>(url,this.httpOptions)
  }

  getMusiciansByJobPosting(jobPostingId : string) : Observable<Musician[]>{
    const url = `${this.url}getMusiciansByJobPosting/${jobPostingId}`
    return this.http.get<Musician[]>(url,this.httpOptions)
  }
}
