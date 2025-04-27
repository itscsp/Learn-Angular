<<<<<<< HEAD
import { AfterContentInit, afterNextRender, afterRender, Component, contentChild, ContentChild, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';
=======
import { afterNextRender, afterRender, Component, contentChild, ContentChild, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';
>>>>>>> refs/remotes/origin/main

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
<<<<<<< HEAD
      console.log('Rendered');
    });

    afterNextRender(() => {
      console.log('Next Rendered');
    })
  }

  ngAfterContentInit() {
    console.log(this.control);
  }

=======
      console.log('After Render')
    })

    afterNextRender(() => {
      console.log('After Next Render')
    })
  }

>>>>>>> refs/remotes/origin/main
  onClick() {
    this.el.nativeElement.focus();
    console.log(this.el);
    console.log(this.control());
  }
  
}
