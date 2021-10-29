import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(
    private http: HttpClient,
    ) { }

  private url = 'http://localhost:5000/api/user/'; 

  getSingle(id: string): Observable<User> {
    const url = `${this.url}getSingle/${id}`;
    return this.http.get<User>(url,this.httpOptions);
  }

  query(userLookup : UserLookup): Observable<User[]>{
    const url = `${this.url}query`;
    return this.http.post<User[]>(url,userLookup,this.httpOptions);
  }

  persist(persistedUser : User) : Observable<User>{
    const url = `${this.url}persist`;
    return this.http.post<User>(url,persistedUser,this.httpOptions)
  }

  delete(id : string) : Observable<User>{
    const url = `${this.url}delete/${id}`;
    return this.http.delete<User>(url,this.httpOptions)
  }
  
}

export class Lookup{
  start : number;
  limit : number;
  like : string;
}


export class UserLookup extends Lookup{


}


