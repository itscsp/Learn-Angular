import { Component, signal, inject, computed } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
// import { TasksService } from '../tasks.service';
import { Task, TASK_STATUS_OPTIONS, taskStatusOptionsProvider } from '../task.model';
import { TasksServiceToken } from '../../../main';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
  providers: [
    taskStatusOptionsProvider
  ]
})
export class TasksListComponent {
  private taskService = inject(TasksServiceToken)
  private selectedFilter = signal<string>('all');
  taskStatusOptions = inject(TASK_STATUS_OPTIONS);
  
  // tasks = this.taskService.allTasks;
  tasks = computed(() =>{
    switch(this.selectedFilter()) {
      case 'all': 
          return this.taskService.allTasks()
      case 'open':
          return this.taskService.allTasks().filter((task:Task) => task.status === 'OPEN')
      case 'in-progress':
        return this.taskService.allTasks().filter((task:Task) => task.status === 'IN_PROGRESS')
      case 'DONE':
        return this.taskService.allTasks().filter((task:Task) => task.status === 'DONE')
      default:
        return this.taskService.allTasks();
      
    }
  });

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
