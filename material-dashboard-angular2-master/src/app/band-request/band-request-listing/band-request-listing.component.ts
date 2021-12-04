import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Lookup } from 'app/lookups/lookup';
import { BandRequest } from 'app/models/band-request.model';
import { BandRequestService } from 'app/services/band-request.service';

@Component({
  selector: 'app-band-request-listing',
  templateUrl: './band-request-listing.component.html',
  styleUrls: ['./band-request-listing.component.scss']
})
export class BandRequestListingComponent implements OnInit {

  rows: BandRequest[];
  page: number;
  total: number;

  columns = [{ name: 'Summary' }, { name: 'Status' }];

  constructor(private bandRequestService:BandRequestService, private route: ActivatedRoute, protected router: Router) { }

  lookup:Lookup

  ColumnMode = ColumnMode.force;

  ngOnInit(): void {
    this.generateLookup();
    this.setPage({ offset: 0 });
  }

  setPage(pageInfo) {
    this.lookup.start = pageInfo.offset;
    this.bandRequestService.query(this.lookup).subscribe(pagedData => {
      this.page = pagedData.count;
      this.rows = pagedData.items;
      this.total = pagedData.total;
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
