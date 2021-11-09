import { RouterModule, Routes } from '@angular/router';


import { UserFormComponent } from 'app/user-form/user-form.component';
import { MusicianFormComponent } from 'app/musician-form/musician-form.component';
import { BandFormComponent } from 'app/band-form/band-form.component';
import { JobPostingFormComponent } from 'app/job-posting-form/job-posting-form.component';
import { ProfileDashboardComponent } from 'app/profile-dashboard/profile-dashboard.component';
import { JobPostingPreviewComponent } from 'app/job-posting-preview/job-posting-preview.component';
import { BandJobPostingsComponent } from 'app/band-job-postings/band-job-postings.component';
import { MyJobPostingsComponent } from 'app/my-job-postings/my-job-postings.component';
import { JobPostingApplicantsComponent } from 'app/job-posting-applicants/job-posting-applicants.component';
import { ApplicantPreviewComponent } from 'app/applicant-preview copy/applicant-preview.component';
import { NgModule } from '@angular/core';
import { JobPostingListingComponent } from './job-posting-listing/job-posting-listing.component';


export const routes: Routes = [

    { path: '',      component: JobPostingListingComponent },
    { path: ':id',      component: JobPostingPreviewComponent }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JobPostingRoutingModule{ }