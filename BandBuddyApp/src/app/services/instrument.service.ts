import { Injectable } from '@angular/core';
import { Instrument } from '../models/instrument.model';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {

  constructor() { }
  instrumentData: Instrument = new Instrument();
}
