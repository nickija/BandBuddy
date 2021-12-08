import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Lookup } from 'app/lookups/lookup';
import { Band } from 'app/models/band.model';
import { BandService } from 'app/services/band.service';

@Component({
  selector: 'app-band-listing',
  templateUrl: './band-listing.component.html',
  styleUrls: ['./band-listing.component.scss']
})
export class BandListingComponent implements OnInit {

  rows: Band[];
  page: number;
  total: number;

  columns = [{ name: 'BandName' }, { name: 'Genre' }];

  constructor(private bandService:BandService, private route: ActivatedRoute, protected router: Router) { }

  lookup:Lookup

  ColumnMode = ColumnMode.force;

  ngOnInit(): void {
    this.generateLookup();
    this.loadListing();
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
      this.setPage({offset : this.lookup.start})
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
      this.router.navigate([id], {relativeTo:this.route, replaceUrl:true})
    }

    
  }
}
