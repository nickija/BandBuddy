import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  {

    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  }, {
    path: 'job-posting',
    children: [{
      path: '',
      loadChildren: () => import('./job-posting/job-posting.module').then(m => m.JobPostingModule)
    }]
  }, {
    path: 'applicant',
    children: [{
      path: '',
      loadChildren: () => import('./user/user.module').then(m => m.UserModule)
    }]
  }, {
    path: 'band',
    children: [{
      path: '',
      loadChildren: () => import('./band/band.module').then(m => m.BandModule)
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
