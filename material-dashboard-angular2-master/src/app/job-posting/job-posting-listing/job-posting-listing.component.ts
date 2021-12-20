import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Lookup } from 'app/lookups/lookup';
import { Band } from 'app/models/band.model';
import { JobPosting } from 'app/models/job-posting.model';
import { Musician } from 'app/models/musician.model';
import { User } from 'app/models/user.model';
import { AuthenticationService } from 'app/services/authentication.service';
import { JobPostingService } from 'app/services/job-posting.service';
import { MusicianService } from 'app/services/musician.service';

@Component({
  selector: 'app-job-posting-listing',
  templateUrl: './job-posting-listing.component.html',
  styleUrls: ['./job-posting-listing.component.scss']
})
export class JobPostingListingComponent implements OnInit {

  rows: JobPosting[];
  page: number;
  total: number;

  filteredJobPostings: JobPosting[];

  currentUser: User;
  musicianModel: Musician;

  modelId: string;

  musicianId: string;

  columns = [{ name: 'GenrePlayed' }, {name: 'InstrumentRequired'}];

  constructor(private jobPostingService:JobPostingService, private musicianService: MusicianService, private route: ActivatedRoute,
     protected router: Router, private authenticationService :AuthenticationService) { }

  lookup:Lookup

  ColumnMode = ColumnMode.force;

  ngOnInit(): void {
    this.generateLookup();
    if(this.route.toString().includes("my")){
      this.authenticationService.currentUser.subscribe(x => {
        this.currentUser = x;
        this.getMusicianDetails(this.currentUser.id);
      });
  }else{
    this.loadBand();
    this.loadListing();
  }

    
    
  }

  getMusicianDetails(id: string){
    this.musicianService.getByUserId(id).subscribe(res => {
      this.musicianModel = res;
      this.musicianId = this.musicianModel.id;
      this.getJobPostingsByMusician();
      
    })
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
      if(this.route.toString().includes("my")){
        const id = event?.row?.id;
        this.router.navigate(["my/job-posting/preview/"+id], {replaceUrl:true});
      }else{
        
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

  getJobPostingsByMusician(){
    this.jobPostingService.getJobPostingsByMusician(this.musicianId).subscribe(
      res => {
        console.log(res)
        this.filteredJobPostings = res;
        this.page = this.filteredJobPostings.length;
      this.rows = this.filteredJobPostings;
      this.total = this.filteredJobPostings.length;
      }
    )
  }
}
