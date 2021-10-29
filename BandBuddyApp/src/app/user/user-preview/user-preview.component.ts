import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-preview',
  templateUrl: './user-preview.component.html',
  styleUrls: ['./user-preview.component.css']
})
export class UserPreviewComponent implements OnInit {

  constructor(private userService : UserService) { }

  existingUser: User;
  givenId : string;
  ngOnInit(): void {

  }

  giveMeUser(id : string){
    this.userService.getSingle(id).subscribe(
      res =>{
        console.log(res);
        this.existingUser = res;
      }
    )
  }
}
