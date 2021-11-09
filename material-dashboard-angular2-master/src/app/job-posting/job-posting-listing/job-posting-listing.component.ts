import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Lookup } from 'app/lookups/lookup';
import { JobPosting } from 'app/models/job-posting.model';
import { JobPostingService } from 'app/services/job-posting.service';

@Component({
  selector: 'app-job-posting-listing',
  templateUrl: './job-posting-listing.component.html',
  styleUrls: ['./job-posting-listing.component.scss']
})
export class JobPostingListingComponent implements OnInit {

  rows: JobPosting[];
  page: number;
  total: number;

  columns = [{ name: 'Skill' }, { name: 'Area' }, { name: 'GenrePlayed' }, {name: 'InstrumentRequired'}];

  constructor(private jobPostingService:JobPostingService) { }

  lookup:Lookup

  ColumnMode = ColumnMode.force;

  ngOnInit(): void {
    this.generateLookup();
    this.setPage({ offset: 0 });
  }

  setPage(pageInfo) {
    this.lookup.start = pageInfo.offset;
    this.jobPostingService.query(this.lookup).subscribe(pagedData => {
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
}
