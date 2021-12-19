import { RouterModule, Routes } from '@angular/router';


import { UserFormComponent } from 'app/user/user-form/user-form.component';
import { MusicianFormComponent } from 'app/user/musician-form/musician-form.component';
import { JobPostingFormComponent } from 'app/job-posting/job-posting-form/job-posting-form.component';
import { JobPostingPreviewComponent } from 'app/job-posting/job-posting-preview/job-posting-preview.component';
import { ApplicantPreviewComponent } from 'app/user/applicant-preview/applicant-preview.component';
import { NgModule } from '@angular/core';
import { JobPostingListingComponent } from './job-posting-listing/job-posting-listing.component';


export const routes: Routes = [

    { path: '',      component: JobPostingListingComponent },
    { path: 'preview/:id',      component: JobPostingPreviewComponent },
    //{ path: 'new/:id',      component: JobPostingFormComponent },
    { path: 'edit/:id',      component: JobPostingFormComponent },

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JobPostingRoutingModule{ }