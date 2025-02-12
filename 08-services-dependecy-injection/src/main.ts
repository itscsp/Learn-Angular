  import { bootstrapApplication } from '@angular/platform-browser';
  import { InjectionToken } from '@angular/core';

import { AppComponent } from './app/app.component';
import { TasksService } from './app/tasks/tasks.service'; 

export const TasksServiceToken = new InjectionToken<TasksService>('tasks-service-token')

// bootstrapApplication(AppComponent).catch((err) => console.error(err));

//Alternative approch to add services to project
bootstrapApplication(AppComponent, {
    providers: [{provide: TasksServiceToken, useClass: TasksService}]
}).catch((err) => console.log(err));
