import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Lookup } from 'app/lookups/lookup';
import { AreaEnum } from 'app/models/area-enum';
import { Instrument } from 'app/models/instrument.model';
import { Musician } from 'app/models/musician.model';
import { SkillEnum } from 'app/models/skill-enum';
import { User } from 'app/models/user.model';
import { AuthenticationService } from 'app/services/authentication.service';
import { InstrumentService } from 'app/services/instrument.service';
import { MusicianService } from 'app/services/musician.service';
import { UserService } from 'app/services/user.service';
import * as Chartist from 'chartist';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  private itemId;
  public userModel: User;
  public musicianModel: Musician;
  public areaEnum = AreaEnum;
  currentUser : User;

  rows: Instrument[];
  page: number;
  total: number;

  columns = [{ name:"Instrument Type" ,prop: 'instrumentType' }, {name:"Years experience",prop:'yearsExperiecnce'}, { name: 'Skill' ,pipe :this.skillPipe() }];

  constructor(private authenticationService : AuthenticationService ,
    private userService: UserService, 
    private musicianService: MusicianService,
    private instrumentService: InstrumentService, 
    private route: ActivatedRoute) { 
  }

  lookup:Lookup

  ColumnMode = ColumnMode.force;
  
  ngOnInit() {
    this.generateLookup();
    this.authenticationService.currentUser.subscribe(x => {
      this.currentUser = x;
      console.log(this.currentUser.id, this.currentUser.username);
    });
    this.getUserDetails(this.currentUser.id);
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
      this.getMusicianDetails(this.userModel?.id);
    })
  } 

  getMusicianDetails(id: string){
    this.musicianService.getByUserId(id).subscribe(res => {
      this.musicianModel = res;
      if(this.musicianModel){
        this.lookup.itemId = this.musicianModel.id;
        this.loadListing();
      }
    })
  } 

  accept(){

    
  }

  reject(){
    
  }

  skillPipe () {
    return {transform: (value) =>  value != null ? SkillEnum[value] : "-"};
  }

}
