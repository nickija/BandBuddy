import { Injectable } from '@angular/core';
import { Band } from '../models/band.model';

@Injectable({
  providedIn: 'root'
})
export class BandService {

  constructor() { }
  bandData: Band = new Band();
}
