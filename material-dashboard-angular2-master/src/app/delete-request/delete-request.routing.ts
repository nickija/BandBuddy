import { RouterModule, Routes } from '@angular/router';
//import { DeleteRequestPreviewComponent } from 'app/job-posting-preview/job-posting-preview.component';
import { NgModule } from '@angular/core';
import { DeleteRequestListingComponent } from './delete-request-listing/delete-request-listing.component';


export const routes: Routes = [

    { path: '',      component: DeleteRequestListingComponent },
    //{ path: ':id',      component: DeleteRequestPreviewComponent }

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DeleteRequestRoutingModule{ }