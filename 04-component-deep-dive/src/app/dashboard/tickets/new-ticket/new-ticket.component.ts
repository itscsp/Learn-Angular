<<<<<<< HEAD
import { AfterViewInit, Component, ElementRef, OnInit, viewChild, ViewChild } from '@angular/core';
=======
import { AfterViewInit, Component, ElementRef, EventEmitter, output, Output, viewChild, ViewChild } from '@angular/core';
>>>>>>> refs/remotes/origin/main
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
<<<<<<< HEAD
export class NewTicketComponent implements AfterViewInit, OnInit {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  ngOnInit() {
    console.log('INIT');
    console.log(this.form);
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
    console.log(this.form?.nativeElement);
  }

  onSubmit(titleInput:string, textInput:string) {
    console.dir(titleInput, textInput);
    
    this.form?.nativeElement.reset();
=======
export class NewTicketComponent implements AfterViewInit {
  enteredTitle = ''
  enteredText = ''


  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  // @Output() add = new EventEmitter();
  add = output<{title: string, text: string}>();
  
  ngAfterViewInit(): void {
    console.log('After view init')
  }

  onSubmit() {

    this.add.emit({title: this.enteredTitle, text: this.enteredText});
    this.enteredTitle = ''
    this.enteredText = ''
>>>>>>> refs/remotes/origin/main
  }

}
