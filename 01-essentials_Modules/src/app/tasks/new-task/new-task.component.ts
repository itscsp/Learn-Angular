import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>()

  @Output() add = new EventEmitter<NewTaskData>()
  enteredTitle = '';
  enteredSummry = "";
  enteredDate = ""; 

  private tasksService = inject(TasksService)

  onSubmit() {
   
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummry,
      date: this.enteredDate
    }, this.userId)

    this.close.emit()
    // console.log(this.enteredTitle, this.enteredSummry, this.enteredDate)
  }

  onCancel() {  
    this.close.emit()
  }
}
