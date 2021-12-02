import { Injectable } from '@angular/core';
import { BandRequest } from '../models/band-request.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { BandRequestLookup } from '../lookups/band-request-lookup';
import { QueryResult } from 'app/models/query-result';

@Injectable({
  providedIn: 'root'
})
export class BandRequestService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient,) { }


  private url = 'http://localhost:5000/api/bandRequest/'; 

  getSingle(id: string): Observable<BandRequest> {
    const url = `${this.url}getSingle/${id}`;
    return this.http.get<BandRequest>(url,this.httpOptions);
  }

  query(userLookup : BandRequestLookup): Observable<QueryResult<BandRequest>>{
    const url = `${this.url}query`;
    
    return this.http.post<QueryResult<BandRequest>>(url,userLookup,this.httpOptions);
  }

  persist(persistedBandRequest : BandRequest) : Observable<BandRequest>{
    const url = `${this.url}persist`;
    return this.http.post<BandRequest>(url,persistedBandRequest,this.httpOptions)
  }

  delete(id : string) : Observable<BandRequest>{
    const url = `${this.url}delete/${id}`;
    return this.http.delete<BandRequest>(url,this.httpOptions)
  }
}
