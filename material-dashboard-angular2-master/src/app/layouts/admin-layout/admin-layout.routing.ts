import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { UserFormComponent } from 'app/user-form/user-form.component';
import { MusicianFormComponent } from 'app/musician-form/musician-form.component';
import { BandFormComponent } from 'app/band-form/band-form.component';
import { JobPostingFormComponent } from 'app/job-posting-form/job-posting-form.component';
import { ProfileDashboardComponent } from 'app/profile-dashboard/profile-dashboard.component';
import { JobPostingPreviewComponent } from 'app/job-posting-preview/job-posting-preview.component';
import { BandJobPostingsComponent } from 'app/band-job-postings/band-job-postings.component';
import { MyJobPostingsComponent } from 'app/my-job-postings/my-job-postings.component';
import { JobPostingApplicantsComponent } from 'app/job-posting-applicants/job-posting-applicants.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'user-form',        component: UserFormComponent },
    { path: 'musician-form',        component: MusicianFormComponent },
    { path: 'band-form',        component: BandFormComponent },
    { path: 'job-posting-form',        component: JobPostingFormComponent },
    { path: 'profile-dashboard',        component: ProfileDashboardComponent },
    { path: 'job-posting-preview',        component: JobPostingPreviewComponent },
    { path: 'band-job-postings',        component: BandJobPostingsComponent },
    { path: 'my-job-postings',        component: MyJobPostingsComponent },
    { path: 'job-posting-applicants',        component: JobPostingApplicantsComponent },




];
