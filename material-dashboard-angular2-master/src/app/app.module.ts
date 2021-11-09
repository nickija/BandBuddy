import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserFormComponent } from './user-form/user-form.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MaterialModule } from 'material/material.module';
import { ToastrModule } from 'ngx-toastr';
import { MusicianFormComponent } from './musician-form/musician-form.component';
import { BandFormComponent } from './band-form/band-form.component';
import { JobPostingFormComponent } from './job-posting-form/job-posting-form.component';
import { ProfileDashboardComponent } from './profile-dashboard/profile-dashboard.component';
import { BandJobPostingsComponent } from './band-job-postings/band-job-postings.component';
import { MyJobPostingsComponent } from './my-job-postings/my-job-postings.component';
import { JobPostingApplicantsComponent } from './job-posting-applicants/job-posting-applicants.component';
import { JobPostingListingComponent } from './job-posting/job-posting-listing/job-posting-listing.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    BrowserAnimationsModule, 
    ToastrModule.forRoot() 
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    UserFormComponent,
    MusicianFormComponent,
    BandFormComponent,
    JobPostingFormComponent,
    ProfileDashboardComponent,
    BandJobPostingsComponent,
    MyJobPostingsComponent,
    JobPostingApplicantsComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
