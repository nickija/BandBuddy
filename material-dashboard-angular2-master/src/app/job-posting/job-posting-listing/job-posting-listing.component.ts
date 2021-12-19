import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Lookup } from 'app/lookups/lookup';
import { Band } from 'app/models/band.model';
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

  modelId: string;

  columns = [{ name: 'GenrePlayed' }, {name: 'InstrumentRequired'}];

  constructor(private jobPostingService:JobPostingService, private route: ActivatedRoute, protected router: Router) { }

  lookup:Lookup

  ColumnMode = ColumnMode.force;

  ngOnInit(): void {
    this.generateLookup();
    this.loadBand();
    this.loadListing();
  }

  loadListing(){
    this.jobPostingService.query(this.lookup).subscribe(pagedData => {
      this.page = pagedData.count;
      this.rows = pagedData.items;
      this.total = pagedData.total;
    });
  }

  setPage(pageInfo) {
    this.lookup.start = pageInfo.offset;
    this.jobPostingService.query(this.lookup).subscribe(pagedData => {
      this.page = pagedData.count;
      this.rows = pagedData.items;
    });
  }

  onPageLoad(event: any) {
		if (event) {
			this.lookup.start = event.offset * this.lookup.limit ;
      this.setPage({offset : this.lookup.start})
		}
	}

  

  generateLookup(){

    this.lookup = new Lookup();
    this.lookup.limit = 10;
    this.lookup.start = 0;
  }

  navigateToPreview(event: any){
    if (event.type === "click"){
      if (this.modelId){
        const id = event?.row?.id;
        this.router.navigate(["band/jobPosting/preview/"+id], {replaceUrl:true});

      }
      else{
      const id = event?.row?.id;
      this.router.navigate(["preview/"+id], {relativeTo:this.route, replaceUrl:true});
      }
    }
  }

  changeFilter(likeText : string){
     this.lookup.like = likeText;
     this.loadListing();
  }

  loadBand(){
    this.route.paramMap.subscribe((paramMap)=>{
      if (paramMap.has("id")){
        this.modelId = paramMap.get("id");
        this.lookup.itemId = this.modelId;

      }
    })
  }

  addJobPosting(){
    
    this.router.navigate(["/band/jobPosting/new/"+this.modelId], {relativeTo:this.route, replaceUrl:true})
  }
}
