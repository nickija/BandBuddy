import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserListingComponent } from './user-listing/user-listing.component';
import { UserPreviewComponent } from './user-preview/user-preview.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    UserListingComponent,
    UserPreviewComponent
  ],
  imports: [
    CommonModule, 
    UserRoutingModule,
    FormsModule
  ],
  providers: [],
})
export class UserModule { }
