import { Injectable } from '@angular/core';
import { DeleteRequest } from '../models/delete-request.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { DeleteRequestLookup } from '../lookups/delete-request-lookup';
import { QueryResult } from 'app/models/query-result';

@Injectable({
  providedIn: 'root'
})
export class DeleteRequestService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient,) { }

  
  private url = 'http://localhost:5000/api/deleteRequest/'; 

  getSingle(id: string): Observable<DeleteRequest> {
    const url = `${this.url}getSingle/${id}`;
    return this.http.get<DeleteRequest>(url,this.httpOptions);
  }

  query(userLookup : DeleteRequestLookup): Observable<QueryResult<DeleteRequest>>{
    const url = `${this.url}query`;
    
    return this.http.post<QueryResult<DeleteRequest>>(url,userLookup,this.httpOptions);
  }

  persist(persistedDeleteRequest : DeleteRequest) : Observable<DeleteRequest>{
    const url = `${this.url}persist`;
    return this.http.post<DeleteRequest>(url,persistedDeleteRequest,this.httpOptions)
  }

  delete(id : string) : Observable<DeleteRequest>{
    const url = `${this.url}delete/${id}`;
    return this.http.delete<DeleteRequest>(url,this.httpOptions)
  }
}
