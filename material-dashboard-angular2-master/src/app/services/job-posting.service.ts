import { Injectable } from '@angular/core';
import { JobPosting } from '../models/job-posting.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { JobPostingLookup } from '../lookups/job-posting-lookup';
import { QueryResult } from 'app/models/query-result';

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
}
