import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {ProjectsComponent} from './projects/projects.component';

export const router: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full'},
  { path: 'projects', component: ProjectsComponent},
  { path: 'about', component: AboutComponent},
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
