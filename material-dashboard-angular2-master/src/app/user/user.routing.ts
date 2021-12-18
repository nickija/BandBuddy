import { RouterModule, Routes } from '@angular/router';


import { UserFormComponent } from 'app/user/user-form/user-form.component';
import { ApplicantPreviewComponent } from 'app/user/applicant-preview/applicant-preview.component';
import { NgModule } from '@angular/core';
import { UserListingComponent } from './user-listing/user-listing.component';
import { MusicianFormComponent } from './musician-form/musician-form.component';


export const routes: Routes = [

    { path: '',      component: UserListingComponent },
    { path: ':id',      component: ApplicantPreviewComponent },



];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ApplicantRoutingModule{ }