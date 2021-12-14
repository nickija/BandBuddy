import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { UserFormComponent } from './user/user-form/user-form.component';
import { IconsComponent } from './icons/icons.component';
import { NotificationsComponent } from './notifications/notifications.component';
import {
  AgmCoreModule
} from '@agm/core';
import { MaterialModule } from 'material/material.module';
import { ToastrModule } from 'ngx-toastr';
import { MusicianFormComponent } from './user/musician-form/musician-form.component';
import { BandFormComponent } from './band/band-form/band-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    BrowserAnimationsModule, 
    ToastrModule.forRoot() ,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  declarations: [
    AppComponent,
    LoginFormComponent,
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
