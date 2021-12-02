import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AreaEnum } from 'app/models/area-enum';
import { Musician } from 'app/models/musician.model';
import { User } from 'app/models/user.model';
import { MusicianService } from 'app/services/musician.service';
import { UserService } from 'app/services/user.service';
import * as Chartist from 'chartist';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-applicant-preview',
  templateUrl: './applicant-preview.component.html',
  styleUrls: ['./applicant-preview.component.css']
})
export class ApplicantPreviewComponent implements OnInit {

  private userService: UserService;
  private musicianService: MusicianService;
  private itemId;
  public userModel: User;
  public musicianModel: Musician;
  public areaEnum = AreaEnum;

  constructor(userService: UserService, musicianService: MusicianService, private route: ActivatedRoute) { 
    this.musicianService = musicianService;
    this.userService = userService;
  }
  
  ngOnInit() {
    this.route.paramMap.subscribe((paramMap)=>{
      if (paramMap.has("id")){
        this.itemId = paramMap.get("id");
        this.getUserDetails(this.itemId);
      }
    })
  }

  getUserDetails(id: string){
    this.userService.getSingle(id).subscribe(res => {
      console.log(res);
      this.userModel = res;
      this.getMusicianDetails(this.userModel.id);
    })
  } 

  getMusicianDetails(id: string){
    this.musicianService.getByUserId(id).subscribe(res => {
      console.log(res);
      this.musicianModel = res;
    })
  } 

  accept(){

    
  }

  reject(){
    
  }

}
