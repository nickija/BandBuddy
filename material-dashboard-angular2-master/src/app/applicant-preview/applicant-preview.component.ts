import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Lookup } from 'app/lookups/lookup';
import { AreaEnum } from 'app/models/area-enum';
import { Instrument } from 'app/models/instrument.model';
import { Musician } from 'app/models/musician.model';
import { User } from 'app/models/user.model';
import { InstrumentService } from 'app/services/instrument.service';
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
  private instrumentService: InstrumentService;
  private itemId;
  public userModel: User;
  public musicianModel: Musician;
  public areaEnum = AreaEnum;

  rows: Instrument[];
  page: number;
  total: number;

  columns = [{ name: 'InstrumentType' }, { name: 'YearsExperience' }, { name: 'Skill' }];

  constructor(userService: UserService, musicianService: MusicianService, instrumentService: InstrumentService, private route: ActivatedRoute) { 
    this.musicianService = musicianService;
    this.userService = userService;
    this.instrumentService = instrumentService;
  }

  lookup:Lookup

  ColumnMode = ColumnMode.force;
  
  ngOnInit() {
    this.route.paramMap.subscribe((paramMap)=>{
      if (paramMap.has("id")){
        this.itemId = paramMap.get("id");
        this.getUserDetails(this.itemId);
        this.generateLookup();
        this.setPage({ offset: 0 });
      }
    })
  }

  setPage(pageInfo) {
    this.lookup.start = pageInfo.offset;
    this.instrumentService.query(this.lookup).subscribe(pagedData => {
      this.page = pagedData.count;
      this.rows = pagedData.items;
      this.total = pagedData.total;
    });
  }

  generateLookup(){

    this.lookup = new Lookup();
    this.lookup.limit = 5;
    this.lookup.start = 0;
    //this.lookup.itemId = this.musicianModel.id;
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
