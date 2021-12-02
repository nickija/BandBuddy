import { Injectable } from '@angular/core';
import { Musician } from '../models/musician.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MusicianLookup } from '../lookups/musician-lookup';
import { QueryResult } from 'app/models/query-result';

@Injectable({
  providedIn: 'root'
})
export class MusicianService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,) { }

  private url = 'http://localhost:5000/api/musician/'; 
  
  getSingle(id: string): Observable<Musician> {
    const url = `${this.url}getSingle/${id}`;
    return this.http.get<Musician>(url,this.httpOptions);
  }

  query(userLookup : MusicianLookup): Observable<QueryResult<Musician>>{
    const url = `${this.url}query`;
    
    return this.http.post<QueryResult<Musician>>(url,userLookup,this.httpOptions);
  }
  

  persist(persistedMusician : Musician) : Observable<Musician>{
    const url = `${this.url}persist`;
    return this.http.post<Musician>(url,persistedMusician,this.httpOptions)
  }

  delete(id : string) : Observable<Musician>{
    const url = `${this.url}delete/${id}`;
    return this.http.delete<Musician>(url,this.httpOptions)
  }
}
