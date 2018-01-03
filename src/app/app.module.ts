import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

import {routes} from './app.router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { TaskManagerComponent } from './projects/task-manager/task-manager.component';
import { AboutComponent } from './about/about.component';
import { TaskManagerService } from './services/task-manager.service';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectsComponent,
    TaskManagerComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    routes,
    FormsModule
  ],
  providers: [TaskManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
