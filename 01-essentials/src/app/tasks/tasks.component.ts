import { Component, Input } from "@angular/core";
import { DUMMY_USERS } from "../dummy-users";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { type NewTaskData } from "./task/task.model";
import { CardComponent } from "../shared/card/card.component";

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


    get userName(){
        let user = DUMMY_USERS.filter((item) => item.id === this.id)
        return user[0].name;
    }

   
    tasks = [
        {
            id: 't1',
            userId: 'u1',
            title: 'Master Angular',
            summary:
              'Learn all the basic and advanced features of Angular & how to apply them.',
            dueDate: '2025-12-31',
          },
          {
            id: 't2',
            userId: 'u3',
            title: 'Build first prototype',
            summary: 'Build a first prototype of the online shop website',
            dueDate: '2024-05-31',
          },
          {
            id: 't3',
            userId: 'u3',
            title: 'Prepare issue template',
            summary:
              'Prepare and describe an issue template which will help with project management',
            dueDate: '2024-06-15',
          },
        ]
    
    get selectedUserTasks() {
        return this.tasks.filter((task) => task.userId === this.id)
    }

    onCompleteTask(id:string) {
        //...
        this.tasks = this.tasks.filter((task) => task.id !== id )
    }

    onStartAddTask() {
      console.log("Click add task button")
      this.isAddingTask = true
    }

    onCancelAddTask() {
      this.isAddingTask = false
    }

    onAddTask(taskData: NewTaskData){
      this.tasks.unshift({
        id: new Date().getTime().toString(),
        userId:this.id,
        title: taskData.title,
        summary: taskData.summary,
        dueDate: taskData.date,
      })
      this.isAddingTask = false
    }
    
}