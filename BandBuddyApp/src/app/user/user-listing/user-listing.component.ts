import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserLookup, UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css']
})
export class UserListingComponent implements OnInit {

  public data : User[] = [];

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.loadListing();
  }

  generateLookup() : UserLookup {
    let lookup = new UserLookup();

    lookup.limit = 100;
    lookup.start = 0;

    return lookup;
  }

  loadListing() : void{
    this.userService.query(this.generateLookup()).subscribe(
      res => {
        console.log(res);
        this.data = [...res];
      }
    )
  }

}
