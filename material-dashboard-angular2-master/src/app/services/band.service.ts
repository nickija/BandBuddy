import { Injectable } from '@angular/core';
import { Band } from '../models/band.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { BandLookup } from '../lookups/band-lookup';
import { QueryResult } from 'app/models/query-result';
import { BandUser } from 'app/models/band-user.model';

@Injectable({
  providedIn: 'root'
})
export class BandService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient,) { }


  private url = 'http://localhost:5000/api/band/'; 

  getSingle(id: string): Observable<Band> {
    const url = `${this.url}getSingle/${id}`;
    return this.http.get<Band>(url,this.httpOptions);
  }

  query(userLookup : BandLookup): Observable<QueryResult<Band>>{
    const url = `${this.url}query`;
    
    return this.http.post<QueryResult<Band>>(url,userLookup,this.httpOptions);
  }

  persist(persistedBand : Band) : Observable<Band>{
    const url = `${this.url}persist`;
    return this.http.post<Band>(url,persistedBand,this.httpOptions)
  }

  delete(id : string) : Observable<Band>{
    const url = `${this.url}delete/${id}`;
    return this.http.delete<Band>(url,this.httpOptions)
  }

  acceptApplicant(bandUser : BandUser) : Observable<Boolean>{
    const url = `${this.url}accept`;
    console.log(bandUser);
    return this.http.post<Boolean>(url,bandUser,this.httpOptions);
  }
}
