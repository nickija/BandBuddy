import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { UserFormComponent } from './user/user-form/user-form.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MusicianFormComponent } from './user/musician-form/musician-form.component';
import { EditUserFormComponent } from './edit-user-form/edit-user-form.component';
import { BandFormComponent } from './band/band-form/band-form.component';
import { EditBandFormComponent } from './edit-band-form/edit-band-form.component';

const routes: Routes = [
  {

    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
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
      loadChildren: () => import('./band/band.module').then(m => m.BandModule),
    }]
  }, {
    path: 'band-request',
    children: [{
      path: '',
      loadChildren: () => import('./band-request/band-request.module').then(m => m.BandRequestModule)
    }]
  }, {
    path: 'delete-request',
    children: [{
      path: '',
      loadChildren: () => import('./delete-request/delete-request.module').then(m => m.DeleteRequestModule)
    }]
  },
  {
     path: 'dashboard',      component: UserDashboardComponent 
  },
  {
    path: 'login', component: LoginFormComponent
  },
  {
    path: 'home', component: HomePageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
