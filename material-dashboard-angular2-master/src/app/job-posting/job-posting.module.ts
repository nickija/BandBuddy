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
import { JobPostingListingComponent } from './job-posting-listing/job-posting-listing.component';
import { JobPostingRoutingModule } from './job-posting.routing';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { JobPostingPreviewComponent } from 'app/job-posting/job-posting-preview/job-posting-preview.component';
import { JobPostingFormComponent } from './job-posting-form/job-posting-form.component';
import { JobPostingFiltersComponent } from './job-posting-filters/job-posting-filters.component';

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
    JobPostingRoutingModule,
    NgxDatatableModule
  ],
  declarations: [
    JobPostingListingComponent,
    JobPostingPreviewComponent,
    JobPostingFormComponent,
    JobPostingFiltersComponent
  ],
  exports:[
    JobPostingListingComponent,
    JobPostingPreviewComponent,
    JobPostingFormComponent,
    JobPostingFiltersComponent
  ]
})

export class JobPostingModule {}
