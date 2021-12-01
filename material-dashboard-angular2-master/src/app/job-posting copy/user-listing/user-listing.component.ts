import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Lookup } from 'app/lookups/lookup';
import { User } from 'app/models/user.model';
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

  columns = [{ name: 'FirstName' }, { name: 'LastName' }, { name: 'Username' }];

  constructor(private userService:UserService, private route: ActivatedRoute, protected router: Router) { }

  lookup:Lookup

  ColumnMode = ColumnMode.force;

  ngOnInit(): void {
    this.generateLookup();
    this.setPage({ offset: 0 });
  }

  setPage(pageInfo) {
    this.lookup.start = pageInfo.offset;
    this.userService.query(this.lookup).subscribe(pagedData => {
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
