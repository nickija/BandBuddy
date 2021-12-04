import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Lookup } from 'app/lookups/lookup';
import { DeleteRequest } from 'app/models/delete-request.model';
import { DeleteRequestService } from 'app/services/delete-request.service';

@Component({
  selector: 'app-delete-request-listing',
  templateUrl: './delete-request-listing.component.html',
  styleUrls: ['./delete-request-listing.component.scss']
})
export class DeleteRequestListingComponent implements OnInit {

  rows: DeleteRequest[];
  page: number;
  total: number;

  columns = [{ name: 'Reason' }, { name: 'Status' }];

  constructor(private deleteRequestService:DeleteRequestService, private route: ActivatedRoute, protected router: Router) { }

  lookup:Lookup

  ColumnMode = ColumnMode.force;

  ngOnInit(): void {
    this.generateLookup();
    this.setPage({ offset: 0 });
  }

  setPage(pageInfo) {
    this.lookup.start = pageInfo.offset;
    this.deleteRequestService.query(this.lookup).subscribe(pagedData => {
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
