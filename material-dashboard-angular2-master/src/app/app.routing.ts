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
import { JobPostingListingComponent } from './job-posting/job-posting-listing/job-posting-listing.component';
import { JobPostingFormComponent } from './job-posting/job-posting-form/job-posting-form.component';
import { JobPostingPreviewComponent } from './job-posting/job-posting-preview/job-posting-preview.component';
import { UserListingComponent } from './user/user-listing/user-listing.component';
import { BandListingComponent } from './band/band-listing/band-listing.component';
import { AuthGuard } from './core/AuthGuard/auth.guard';

const routes: Routes = [
  {

    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }, {
    path: 'job-posting', canActivate: [AuthGuard] ,
    children: [{
      path: '',
      loadChildren: () => import('./job-posting/job-posting.module').then(m => m.JobPostingModule)
    }]
  }, {
    path: 'applicant', canActivate: [AuthGuard] ,
    children: [{
      path: '',
      loadChildren: () => import('./user/user.module').then(m => m.UserModule)
    }]
  }, {
    path: 'band', canActivate: [AuthGuard] ,
    children: [{
      path: '',
      loadChildren: () => import('./band/band.module').then(m => m.BandModule),
    }]
    }, 
  //   path: 'band-request',
  //   children: [{
  //     path: '',
  //     loadChildren: () => import('./band-request/band-request.module').then(m => m.BandRequestModule)
  //   }]
  // }, {
  //   path: 'delete-request',
  //   children: [{
  //     path: '',
  //     loadChildren: () => import('./delete-request/delete-request.module').then(m => m.DeleteRequestModule)
  //   }]
  // },
  {
     path: 'dashboard',      component: UserDashboardComponent , canActivate: [AuthGuard] 
  },
  {
    path: 'login', component: LoginFormComponent
  },
  {
    path: 'user-form', component: UserFormComponent
  },
  {
    path: 'home', component: HomePageComponent
  },
  {
    path: 'edit-user-form', component: EditUserFormComponent, canActivate: [AuthGuard] 
  },
  {
    path: 'musician-form', component: MusicianFormComponent, canActivate: [AuthGuard] 
  },
  {
    path: 'band/jobPosting/:id', component: JobPostingListingComponent, canActivate: [AuthGuard] 
  },
  {
    path: 'band/jobPosting/new/:id', component: JobPostingFormComponent, canActivate: [AuthGuard] 
  },
  {
    path: 'band/jobPosting/preview/:id', component: JobPostingPreviewComponent, canActivate: [AuthGuard] 
  },
  {
    path: 'band/jobPosting/applicant/:id', component: UserListingComponent, canActivate: [AuthGuard] 
  },
  {
    path: 'band/jobPosting/edit/:id', component: JobPostingFormComponent, canActivate: [AuthGuard] 
  },
  {
    path: 'my/job-posting', component: JobPostingListingComponent, canActivate: [AuthGuard] 
  },
  {
    path: 'my/job-posting/preview/:id', component: JobPostingPreviewComponent, canActivate: [AuthGuard] 
  },
  {
    path: 'member/band', component: BandListingComponent, canActivate: [AuthGuard] 
  },
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
