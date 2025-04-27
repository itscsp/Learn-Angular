import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import {interval, map, Observable, subscribeOn} from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  clickCount = signal(0)
  clickCount$ = toObservable(this.clickCount)
  private distoryRef = inject(DestroyRef);

  constructor() {
    // effect(() => {
    //   console.log('Clicked Button', this.clickCount())
    // })

  }

  customInterval$ = new Observable((subscriber) => {
    setInterval(() => {
      console.log('Emitting new values...');
      subscriber.next({message: 'New value'});
    }, 2000)
  });


  ngOnInit(): void {
    // const subscription = interval(1000).pipe(
    //   map((val) => val * 2 )
    // ).subscribe({
    //   next: (val) => console.log('Intevals', val)
    // });

    
    const subscription = this.clickCount$.subscribe({
      next: (val) => console.log('Intevals', val)
    });

    this.distoryRef.onDestroy(() => {
      subscription.unsubscribe();
    })

    this.customInterval$.subscribe({
      next: (val) => console.log('ABCD')
    })
    
  }

  onClick() {
    this.clickCount.update(pervCount => pervCount + 1)
  }
}
