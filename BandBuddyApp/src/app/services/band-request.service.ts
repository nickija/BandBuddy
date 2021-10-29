import { Injectable } from '@angular/core';
import { BandRequest } from '../models/band-request.model';

@Injectable({
  providedIn: 'root'
})
export class BandRequestService {

  constructor() { }
  bandRequestData: BandRequest = new BandRequest();
}
