import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {ProjectsComponent} from './projects/projects.component';
import {TaskManagerComponent} from './projects/task-manager/task-manager.component';
import {HomeComponent} from './home/home.component';

export const router: Routes = [
  { path: '',  component: HomeComponent},
  { path: 'home', redirectTo: '', pathMatch: 'full'},
  { path: 'about', component: AboutComponent},
  { path: 'projects', component: ProjectsComponent,
    children: [
        { path: '', redirectTo: 'task-manager', pathMatch: 'full'},
        { path: 'task-manager', component: TaskManagerComponent}
      ]
  },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
