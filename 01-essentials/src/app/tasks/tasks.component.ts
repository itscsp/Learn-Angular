import { Component, Input } from "@angular/core";
import { DUMMY_USERS } from "../dummy-users";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { type NewTaskData } from "./task/task.model";
import { CardComponent } from "../shared/card/card.component";
import {TasksService} from './tasks.service'

@Component({
    selector: 'app-tasks',
    standalone:true,
    imports: [TaskComponent, NewTaskComponent],
    templateUrl:'./tasks.component.html',
    styleUrl:'./tasks.component.css'
})


export class TasksComponent {
    @Input({required:true}) id!:string;
    isAddingTask = false
    

    constructor(private tasksServices: TasksService) {}


    get userName(){
        let user = DUMMY_USERS.filter((item) => item.id === this.id)
        return user[0].name;
    }

    get selectedUserTasks() {

        return this.tasksServices.getUserTasks(this.id)
    }

    onStartAddTask() {
      this.isAddingTask = true
    }

    onCancelAddTask() {
      this.isAddingTask = false
    }    
}