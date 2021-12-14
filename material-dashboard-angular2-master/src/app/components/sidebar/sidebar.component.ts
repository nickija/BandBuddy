import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/applicant', title: 'Dashboard Profile',  icon: 'person', class: '' },
    { path: '/job-posting', title: 'Search for Band',  icon:'search', class: '' },
    { path: '/band', title: 'My bands',  icon:'dashboard', class: '' },
    { path: '/job-posting', title: 'Applied Job Postings',  icon:'content_paste', class: '' },
    
    { path: '/logout', title: 'Logout',  icon:'exit_app', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
