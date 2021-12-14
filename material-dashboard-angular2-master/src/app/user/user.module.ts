import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationsComponent } from '../notifications/notifications.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { UserListingComponent } from './user-listing/user-listing.component';
import { ApplicantRoutingModule } from './user.routing';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { JobPostingPreviewComponent } from 'app/job-posting/job-posting-preview/job-posting-preview.component';
import { ApplicantPreviewComponent } from 'app/user/applicant-preview/applicant-preview.component';
import { UserFormComponent } from './user-form/user-form.component';
import { Musician } from 'app/models/musician.model';
import { MusicianFormComponent } from './musician-form/musician-form.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    ApplicantRoutingModule,
    NgxDatatableModule,
  ],
  declarations: [
    
    UserListingComponent,
    ApplicantPreviewComponent,
    UserFormComponent,
    MusicianFormComponent,
    UserDashboardComponent
    
  ]
})

export class UserModule {}
