import { RouterModule, Routes } from '@angular/router';


import { UserFormComponent } from 'app/user-form/user-form.component';
import { MusicianFormComponent } from 'app/musician-form/musician-form.component';
import { BandFormComponent } from 'app/band-form/band-form.component';
import { ProfileDashboardComponent } from 'app/profile-dashboard/profile-dashboard.component';
//import { BandRequestPreviewComponent } from 'app/job-posting-preview/job-posting-preview.component';
import { ApplicantPreviewComponent } from 'app/applicant-preview/applicant-preview.component';
import { NgModule } from '@angular/core';
import { BandRequestListingComponent } from './band-request-listing/band-request-listing.component';


export const routes: Routes = [

    { path: '',      component: BandRequestListingComponent },
    //{ path: ':id',      component: BandRequestPreviewComponent }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BandRequestRoutingModule{ }