import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Lookup } from 'app/lookups/lookup';
import { Band } from 'app/models/band.model';
import { User } from 'app/models/user.model';
import { AuthenticationService } from 'app/services/authentication.service';
import { BandService } from 'app/services/band.service';

@Component({
  selector: 'app-band-listing',
  templateUrl: './band-listing.component.html',
  styleUrls: ['./band-listing.component.scss']
})
export class BandListingComponent implements OnInit {
  currentUser: User;
  rows: Band[];
  page: number;
  total: number;
  offset: number = 0;

  member: boolean;

  filteredBands: Band[];

  columns = [{ prop: 'bandName' }, { name: 'Genre' }];

  constructor(private bandService:BandService, private route: ActivatedRoute, protected router: Router, private authenticationService: AuthenticationService) { }

  lookup:Lookup

  ColumnMode = ColumnMode.force;

  ngOnInit(): void {
    this.generateLookup();

    this.authenticationService.currentUser.subscribe(x => {
      this.currentUser = x;
      
      this.lookup.itemId = this.currentUser.id;

    });
    if (this.route.toString().includes("member")) {
      this.getBandsByUser(this.currentUser.id);
      this.member = true;
    }else{
      this.loadListing();
      this.member = false;
    }

    
  }

  loadListing(){
    this.bandService.query(this.lookup).subscribe(pagedData => {
      this.page = pagedData.count;
      this.rows = pagedData.items;
      this.total = pagedData.total;
    });
  }

  onPageLoad(event: any) {
		if (event) {
			this.lookup.start = event.offset * this.lookup.limit ;
      this.offset = event.offset;
      this.setPage({offset : this.lookup.start});
		}
	}

  setPage(pageInfo) {
    this.lookup.start = pageInfo.offset;
    this.bandService.query(this.lookup).subscribe(pagedData => {
      this.page = pagedData.count;
      this.rows = pagedData.items;
    });
  }

  generateLookup(){

    this.lookup = new Lookup();
    this.lookup.limit = 5;
    this.lookup.start = 0;
    
    
  }

  navigateToPreview(event: any){
    if (event.type === "click"){
      const id = event?.row?.id;
      this.router.navigate(["preview/"+id], {relativeTo:this.route, replaceUrl:true});
    }

    
  }

  getBandsByUser(id: string) {
    this.bandService.getBandsByUser(id).subscribe(
      res => {
        this.filteredBands = res;
        this.page = this.filteredBands.length;
        this.rows = this.filteredBands;
        this.total = this.filteredBands.length;
      }
    )
  }
}
