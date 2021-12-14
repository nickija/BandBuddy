import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { UserFormComponent } from 'app/user/user-form/user-form.component';
import { MusicianFormComponent } from 'app/user/musician-form/musician-form.component';
import { BandFormComponent } from 'app/band/band-form/band-form.component';
import { JobPostingFormComponent } from 'app/job-posting/job-posting-form/job-posting-form.component';
import { JobPostingPreviewComponent } from 'app/job-posting/job-posting-preview/job-posting-preview.component';
import { ApplicantPreviewComponent } from 'app/user/applicant-preview/applicant-preview.component';
import { LoginFormComponent } from 'app/login-form/login-form.component';

export const AdminLayoutRoutes: Routes = [
    
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'login',        component: LoginFormComponent },
    { path: 'user-form',      component: UserFormComponent },







];
