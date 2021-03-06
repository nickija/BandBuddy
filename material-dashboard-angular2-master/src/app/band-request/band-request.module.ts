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
import { BandRequestListingComponent } from './band-request-listing/band-request-listing.component';
import { BandRequestRoutingModule } from './band-request.routing';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
//import { BandRequestPreviewComponent } from 'app/job-posting-preview/job-posting-preview.component';

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
    BandRequestRoutingModule,
    NgxDatatableModule
  ],
  declarations: [
    
    BandRequestListingComponent,
    //BandRequestPreviewComponent
  ]
})

export class BandRequestModule {}
