import { Component, OnInit } from '@angular/core';
import { Musician } from 'app/models/musician.model';
import { User } from 'app/models/user.model';
import { MusicianService } from 'app/services/musician.service';
import { UserService } from 'app/services/user.service';
import * as Chartist from 'chartist';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-job-posting-applicants',
  templateUrl: './job-posting-applicants.component.html',
  styleUrls: ['./job-posting-applicants.component.css']
})
export class JobPostingApplicantsComponent implements OnInit {


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
