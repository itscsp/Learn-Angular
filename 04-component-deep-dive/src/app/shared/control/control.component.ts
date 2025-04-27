import { AfterContentInit, afterNextRender, afterRender, Component, contentChild, ContentChild, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host:{
    class: "control",
    '(click)': "onClick()"
  }
})
export class ControlComponent implements AfterContentInit {
  // @HostBinding('class') className = "control";
  // @HostListener('click') onClick() {
  //   console.log("Clicked")
  // }

  label = input.required<string>()
  private el = inject(ElementRef);
  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  constructor() {
    afterRender(() => {
      console.log('Rendered');
    });

    afterNextRender(() => {
      console.log('Next Rendered');
    })
  }

  ngAfterContentInit() {
    console.log(this.control);
  }

  onClick() {
    this.el.nativeElement.focus();
    console.log(this.el);
    console.log(this.control());
  }
  
}
