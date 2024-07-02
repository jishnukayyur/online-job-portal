import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadComponent: () =>
    import('./components/home/home.component').then((c) => c.HomeComponent) },
  { path: 'applied-jobs', loadComponent: () =>
    import('./components/job-applies/job-applies.component').then((c) => c.JobAppliesComponent) },
  { path: 'saved-jobs', loadComponent: () =>
    import('./components/saved-jobs/saved-jobs.component').then((c) => c.SavedJobsComponent) },
  { path: 'submit-job', loadComponent: () =>
    import('./components/submit-page/submit-page.component').then((c) => c.SubmitPageComponent) },
  { path: 'notifications', loadComponent: () =>
    import('./components/notifications/notifications.component').then((c) => c.NotificationsComponent) },
  { path: 'profile', loadComponent: () =>
    import('./components/profile/profile.component').then((c) => c.ProfileComponent) },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash=true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
