import { Component, Input } from "@angular/core";
import { DUMMY_USERS } from "../dummy-users";
import { TaskComponent } from "./task/task.component";

@Component({
    selector: 'app-tasks',
    standalone:true,
    imports:[TaskComponent],
    templateUrl:'./tasks.component.html',
    styleUrl:'./tasks.component.css'
})


export class TasksComponent {
    @Input({required:true}) id!:string;

    get userName(){
        let user = DUMMY_USERS.filter((item) => item.id === this.id)
        return user[0].name;
    }
}