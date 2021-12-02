import { Injectable } from '@angular/core';
import { Instrument } from '../models/instrument.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { InstrumentLookup } from '../lookups/instrument-lookup';
import { QueryResult } from 'app/models/query-result';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient,) { }


  private url = 'http://localhost:5000/api/instrument/'; 

  getSingle(id: string): Observable<Instrument> {
    const url = `${this.url}getSingle/${id}`;
    return this.http.get<Instrument>(url,this.httpOptions);
  }

  query(userLookup : InstrumentLookup): Observable<QueryResult<Instrument>>{
    const url = `${this.url}query`;
    
    return this.http.post<QueryResult<Instrument>>(url,userLookup,this.httpOptions);
  }

  persist(persistedInstrument : Instrument) : Observable<Instrument>{
    const url = `${this.url}persist`;
    return this.http.post<Instrument>(url,persistedInstrument,this.httpOptions)
  }

  delete(id : string) : Observable<Instrument>{
    const url = `${this.url}delete/${id}`;
    return this.http.delete<Instrument>(url,this.httpOptions)
  }
}
