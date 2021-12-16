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
    { path: '/applicant', title: 'Search for Band',  icon:'search', class: '' },
    { path: '/band', title: 'My bands',  icon:'dashboard', class: '' },
    { path: '/job-posting', title: 'Applied Job Postings',  icon:'content_paste', class: '' },
    { path: '/user-form', title: 'Edit User Profile',  icon:'edit', class: '' },
    { path: '/musician-form', title: 'Edit Musical Profile',  icon:'edit', class: '' },


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
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

  logout(){
    this.authenticationService.logout();
    this.router.navigate(['/home']);
    }
}
