import { Injectable } from '@angular/core';
import { Musician } from '../models/musician.model';

@Injectable({
  providedIn: 'root'
})
export class MusicianService {

  constructor() { }
  musicianData: Musician = new Musician();
}
