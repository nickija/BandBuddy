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
import { DeleteRequestListingComponent } from './delete-request-listing/delete-request-listing.component';
import { DeleteRequestRoutingModule } from './delete-request.routing';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
//import { DeleteRequestPreviewComponent } from 'app/job-posting-preview/job-posting-preview.component';

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
    DeleteRequestRoutingModule,
    NgxDatatableModule
  ],
  declarations: [
    
    DeleteRequestListingComponent,
    //DeleteRequestPreviewComponent
  ]
})

export class DeleteRequestModule {}
