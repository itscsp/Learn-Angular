import { AfterViewInit, Component, ElementRef, EventEmitter, output, Output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit {
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  // @Output() add = new EventEmitter();
  add = output<{title: string, text: string}>();
  
  ngAfterViewInit(): void {
    console.log('After view init')
  }

  onSubmit(titleInput:string, textInput:string) {
    console.dir(titleInput, textInput);
    this.add.emit({title: titleInput, text: textInput})
    this.form().nativeElement.reset();
  }

}
