import { RouterModule, Routes } from '@angular/router';


import { UserFormComponent } from 'app/user-form/user-form.component';
import { MusicianFormComponent } from 'app/musician-form/musician-form.component';
import { BandFormComponent } from 'app/band-form/band-form.component';
import { ProfileDashboardComponent } from 'app/profile-dashboard/profile-dashboard.component';
import { ApplicantPreviewComponent } from 'app/applicant-preview/applicant-preview.component';
import { NgModule } from '@angular/core';
import { BandListingComponent } from './band-listing/band-listing.component';


export const routes: Routes = [

    { path: '',      component: BandListingComponent },
    //{ path: ':id',      component: BandPreviewComponent }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BandRoutingModule{ }