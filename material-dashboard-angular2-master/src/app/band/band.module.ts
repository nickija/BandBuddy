import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { TableListComponent } from '../table-list/table-list.component';
import { TypographyComponent } from '../typography/typography.component';
import { IconsComponent } from '../icons/icons.component';
import { MapsComponent } from '../maps/maps.component';
import { NotificationsComponent } from '../notifications/notifications.component';
import { UpgradeComponent } from '../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { BandListingComponent } from './band-listing/band-listing.component';
import { BandRoutingModule } from './band.routing';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BandPreviewComponent } from 'app/band/band-preview/band-preview.component';
import { BandFormComponent } from './band-form/band-form.component';

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
    BandRoutingModule,
    NgxDatatableModule
  ],
  declarations: [
    
    BandListingComponent,
    BandPreviewComponent,
    BandFormComponent
  ]
})

export class BandModule {}
