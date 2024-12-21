import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>()
  @Output() add = new EventEmitter<NewTaskData>()
  enteredTitle = '';
  enteredSummry = "";
  enteredDate = ""; 

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummry,
      date: this.enteredDate
    })
    // console.log(this.enteredTitle, this.enteredSummry, this.enteredDate)
  }

  onCancel() {  
    this.cancel.emit()
  }
}
