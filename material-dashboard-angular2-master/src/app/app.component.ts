import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent } from '@angular/common';
import 'rxjs/add/operator/filter';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import PerfectScrollbar from 'perfect-scrollbar';
import * as $ from "jquery";
import { AuthenticationService } from './services/authentication.service';
import { User } from './models/user.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _router: Subscription;
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];
  currentUser: User;
  constructor( public location: Location, private router: Router,private authenticationService : AuthenticationService) {}

  ngOnInit() {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  
  }

  isAuthenticated(){
      return this.currentUser != null;
  }
}
