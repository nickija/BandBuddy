import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/services/authentication.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard Profile',  icon: 'person', class: '' },
    { path: '/job-posting', title: 'Search for Job Posting',  icon:'search', class: '' },
    { path: '/band', title: 'My bands',  icon:'dashboard', class: '' },
    { path: '/my/job-posting', title: 'Applied Job Postings',  icon:'content_paste', class: '' },
    { path: '/member/band', title: 'Bands im member of',  icon:'group', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private authenticationService : AuthenticationService,        private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
