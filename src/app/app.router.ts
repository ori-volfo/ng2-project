import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {ProjectsComponent} from './projects/projects.component';
import {TaskManagerComponent} from './projects/task-manager/task-manager.component';

export const router: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full'},
  { path: 'about', component: AboutComponent},
  { path: 'projects', component: ProjectsComponent,
    children: [
        { path: 'task-manager', component: TaskManagerComponent}
      ]
  },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
