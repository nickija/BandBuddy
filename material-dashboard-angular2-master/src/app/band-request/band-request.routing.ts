import { RouterModule, Routes } from '@angular/router';

//import { BandRequestPreviewComponent } from 'app/job-posting-preview/job-posting-preview.component';
import { ApplicantPreviewComponent } from 'app/user/applicant-preview/applicant-preview.component';
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