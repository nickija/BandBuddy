import { RouterModule, Routes } from '@angular/router';


import { BandFormComponent } from 'app/band/band-form/band-form.component';
import { NgModule } from '@angular/core';
import { BandListingComponent } from './band-listing/band-listing.component';
import { BandPreviewComponent } from 'app/band/band-preview/band-preview.component';


export const routes: Routes = [

    { path: '',      component: BandListingComponent },
    { path: 'preview/:id',      component: BandPreviewComponent },
    { path: 'new',      component: BandFormComponent },
    { path: 'edit/:id',      component: BandFormComponent },

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BandRoutingModule{ }