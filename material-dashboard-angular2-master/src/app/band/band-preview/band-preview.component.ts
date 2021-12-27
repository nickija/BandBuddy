import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { BandFormComponent } from 'app/band/band-form/band-form.component';
import { Lookup } from 'app/lookups/lookup';
import { AreaEnum } from 'app/models/area-enum';
import { Band } from 'app/models/band.model';
import { User } from 'app/models/user.model';
import { SkillEnum } from 'app/models/skill-enum';
import { BandService } from 'app/services/band.service';
import { UserService } from 'app/services/user.service';
import * as Chartist from 'chartist';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-band-preview',
  templateUrl: './band-preview.component.html',
  styleUrls: ['./band-preview.component.css']
})
export class BandPreviewComponent implements OnInit {

  private itemId;
  private bandService: BandService;
  public itemModel: Band;

  filteredUsers: User[];

  rows: User[];
  page: number;
  total: number;

  columns = [{ name: 'FirstName' }, { name: 'LastName' }];

  constructor(bandService: BandService, private route: ActivatedRoute,protected router: Router) { 
    this.bandService = bandService;
  }
  

  lookup:Lookup;

  ColumnMode = ColumnMode.force;
  
  ngOnInit() {
    this.generateLookup();
    this.route.paramMap.subscribe((paramMap)=>{
      if (paramMap.has("id")){
        this.itemId = paramMap.get("id");
        this.getBandDetails(this.itemId);
      }
    })

  }

  onPageLoad(event: any){

  }

  generateLookup(){
    this.lookup = new Lookup();
    this.lookup.limit = 5;
    this.lookup.start = 0;
  }

  

  getBandDetails(id: string){
    this.bandService.getSingle(id).subscribe(res => {
      console.log(res);
      this.itemModel = res;
      this.getUsersByBandId(id);
    })
  } 

  edit(){
    this.router.navigate(["/band/edit/"+ this.itemId], { relativeTo: this.route });

    
  }
  bandJobPostings(){
    this.router.navigate(["/band/jobPosting/"+ this.itemId], { relativeTo: this.route });
  }

  getUsersByBandId(id: string){
    this.bandService.getUsersByBand(id).subscribe(res => {
      this.filteredUsers = res;
      console.log(res);
      this.page = this.filteredUsers.length;
      this.rows = this.filteredUsers;
      this.total = this.filteredUsers.length;
    })

  }



}
