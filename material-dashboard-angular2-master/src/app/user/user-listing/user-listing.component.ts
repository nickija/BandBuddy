import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Lookup } from 'app/lookups/lookup';
import { Musician } from 'app/models/musician.model';
import { User } from 'app/models/user.model';
import { JobPostingService } from 'app/services/job-posting.service';
import { UserService } from 'app/services/user.service';


@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.scss']
})
export class UserListingComponent implements OnInit {

  rows: User[];
  page: number;
  total: number;

  modelId: string;
  jobPostingMusicians: Musician[];
  jobPostingUsers: User[] = [];

  columns = [{ name: 'FirstName' }, { name: 'LastName' }, { name: 'Username' }];

  constructor(private userService:UserService, private route: ActivatedRoute, protected router: Router, private jobPostingService: JobPostingService) { }

  lookup:Lookup

  ColumnMode = ColumnMode.force;

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap)=>{
      if (paramMap.has("id")){
        this.modelId = paramMap.get("id");
        this.lookup.itemId = this.modelId;

      }
    });
    this.generateLookup();
    //this.loadListing();
    this.getMusiciansByJobPosting();

  }

  loadListing(){
    this.userService.query(this.lookup).subscribe(pagedData => {
      this.page = pagedData.count;
      this.rows = pagedData.items;
      this.total = pagedData.total;
    });
  }
  getMusiciansByJobPosting(){
    this.jobPostingService.getMusiciansByJobPosting(this.modelId).subscribe(
      res => {
        this.jobPostingMusicians = res;
        console.log(this.jobPostingMusicians)
        this.getUsers();
        
      }
      
    )
  }

  getUsers(){
    for (let musician of this.jobPostingMusicians){
      this.jobPostingUsers.push(musician.user);
    }
    console.log(this.jobPostingUsers);
    this.page = this.jobPostingUsers.length;
    this.rows = this.jobPostingUsers
    this.total = this.jobPostingUsers.length;
  }

  onPageLoad(event: any) {
		if (event) {
			this.lookup.start = event.offset * this.lookup.limit ;
      this.setPage({offset : this.lookup.start})
		}
	}

  setPage(pageInfo) {
    this.lookup.start = pageInfo.offset;
    this.userService.query(this.lookup).subscribe(pagedData => {
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
      const jpId = this.modelId;
      this.router.navigate(["applicant/preview/"+ id + "/" + jpId], { replaceUrl:true})
    }

    
  }
}
