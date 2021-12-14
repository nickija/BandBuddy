import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../models/user.model';
import { UserLookup } from '../lookups/user-lookup';
import { QueryResult } from 'app/models/query-result';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(
    private http: HttpClient,
    ) { }

  private url = 'http://localhost:5000/api/user/'; 

  authenticate(username: string, password: string): Observable<User> {
    const url = `${this.url}authenticate`;
    return this.http.get<User>(url,this.httpOptions);
  }
  
}


