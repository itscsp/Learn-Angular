import { inject, Injectable, signal } from "@angular/core";
import { Task, TaskStatus } from "./task.model";
import { LoggingService } from "../logging.service";
import { TasksListComponent } from "./tasks-list/tasks-list.component";

// @Injectable({
//     providedIn: 'root'
// })

export class TasksService {
    private tasks = signal<Task[]>([]);
    private logginService = inject(LoggingService)

    allTasks = this.tasks.asReadonly();

    addTask(taskData: {title: string; description: string}){
        const newTask: Task = {
            ...taskData,
            id: Math.random().toString(),
            status: 'OPEN'
        };

        this.tasks.update((oldTasks) => [...oldTasks, newTask])
        this.logginService.log('ADDED TASK WITH TITLE ' + taskData.title)
    }

    updateTaskStatus(taskId: string, newStatus: TaskStatus) {
        this.tasks.update((oldTask) => 
            oldTask.map((task) => 
                task.id === taskId ?  {...task, status: newStatus} : task
            )
        );

        this.logginService.log('CHANGE TASK STATUS ' + newStatus)

    } 
}