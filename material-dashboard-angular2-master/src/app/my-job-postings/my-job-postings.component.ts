import { Component, OnInit } from '@angular/core';
import { Musician } from 'app/models/musician.model';
import { User } from 'app/models/user.model';
import { MusicianService } from 'app/services/musician.service';
import { UserService } from 'app/services/user.service';
import * as Chartist from 'chartist';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-job-postings',
  templateUrl: './my-job-postings.component.html',
  styleUrls: ['./my-job-postings.component.css']
})
export class MyJobPostingsComponent implements OnInit {


  private userService: UserService;
  private musicianService: MusicianService;

  constructor(userService: UserService, musicianService: MusicianService) {
      this.musicianService = musicianService;
      this.userService = userService;
   }
  
  ngOnInit() {

      
      }

     

     getUserDetails(id: string): Observable<User>{
       return this.userService.getSingle(id);
     } 

     getMusicianDetails(id: string): Observable<Musician>{
      return this.musicianService.getSingle(id);
    } 

}