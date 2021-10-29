import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListingComponent } from './user-listing/user-listing.component';
import { UserPreviewComponent } from './user-preview/user-preview.component';

const routes: Routes = [
  {
    path: '',
    component: UserListingComponent
  },
  {
    path: 'preview',
    component: UserPreviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
