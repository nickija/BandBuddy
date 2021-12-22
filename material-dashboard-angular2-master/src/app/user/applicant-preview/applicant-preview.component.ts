import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Lookup } from 'app/lookups/lookup';
import { AreaEnum } from 'app/models/area-enum';
import { BandUser } from 'app/models/band-user.model';
import { Instrument } from 'app/models/instrument.model';
import { Musician } from 'app/models/musician.model';
import { User } from 'app/models/user.model';
import { BandService } from 'app/services/band.service';
import { InstrumentService } from 'app/services/instrument.service';
import { JobPostingService } from 'app/services/job-posting.service';
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
  private itemId: string;
  private jpId: string;
  //private bandId: string;
  private bandUser: BandUser = new BandUser();
  public userModel: User;
  public musicianModel: Musician;
  public areaEnum = AreaEnum;

  rows: Instrument[];
  page: number;
  total: number;

  columns = [{ name: 'InstrumentType' }, { name: 'YearsExperiecnce' }, { name: 'Skill' }];

  constructor(userService: UserService, musicianService: MusicianService, instrumentService: InstrumentService, 
    private jobPostingService: JobPostingService, private bandService: BandService, private route: ActivatedRoute) { 
    this.musicianService = musicianService;
    this.userService = userService;
    this.instrumentService = instrumentService;
  }

  lookup:Lookup

  ColumnMode = ColumnMode.force;
  
  ngOnInit() {
    this.generateLookup();

    this.route.paramMap.subscribe((paramMap)=>{
      if (paramMap.has("id")){
        this.itemId = paramMap.get("id");
        this.getUserDetails(this.itemId);
      }
      if (paramMap.has("jpId")){
        this.jpId = paramMap.get("jpId");
      }
    })
  }

  onPageLoad(event: any) {
		if (event) {
			this.lookup.start = event.offset * this.lookup.limit ;
      this.setPage({offset : this.lookup.start})
		}
	}

  loadListing(){
    this.instrumentService.query(this.lookup).subscribe(pagedData => {
      this.page = pagedData.count;
      this.rows = pagedData.items;
      this.total = pagedData.total;
    });
  }
  

  setPage(pageInfo) {
    this.lookup.start = pageInfo.offset;
    this.instrumentService.query(this.lookup).subscribe(pagedData => {
      this.page = pagedData.count;
      this.rows = pagedData.items;
    });
  }

  generateLookup(){
    this.lookup = new Lookup();
    this.lookup.limit = 5;
    this.lookup.start = 0;
  }

  getUserDetails(id: string){
    this.userService.getSingle(id).subscribe(res => {
      this.userModel = res;
      this.getMusicianDetails(this.userModel.id);
    })
  } 

  getMusicianDetails(id: string){
    this.musicianService.getByUserId(id).subscribe(res => {
      this.musicianModel = res;
      this.lookup.itemId = this.musicianModel.id;
      this.loadListing();
    })
  } 

  accept(){
    this.jobPostingService.getSingle(this.jpId).subscribe(res => {
      this.bandUser.bandId = res.bandId;
      this.bandUser.userId = this.itemId;
      this.bandService.acceptApplicant(this.bandUser).subscribe(res =>{
        console.log(res);
      });
    })
   
    //const id = this.bandId
    //this.router.navigate(["band/preview/"+ id ], { replaceUrl:true})
    
  }

  reject(){
    
  }

}
