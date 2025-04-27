import { Component, DestroyRef, inject, OnDestroy, OnInit, signal } from '@angular/core';
@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');
  // private interval?: ReturnType<typeof setInterval>;
  private destroryRef = inject(DestroyRef);

  constructor() {
    
  }
  
  ngOnInit() {
    // this.interval = setInterval(() => {
    //   const rnd = Math.random();
    //   if(rnd < 0.5) {
    //     this.currentStatus = 'online';
    //   } else if (rnd < 0.9){
    //     this.currentStatus = 'offline'
    //   } else {
    //     this.currentStatus = 'unknown'
    //   }
      
    // }, 5000)

    const interval = setInterval(() => {
      const rnd = Math.random();
      if(rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9){
        this.currentStatus.set('offline')
      } else {
        this.currentStatus.set('unknown')
      }
      
    }, 5000)

    this.destroryRef.onDestroy(() => {
      clearInterval(interval);
    } )

  }

  // ngOnDestroy() {
  //   clearInterval(this.interval);
  // }


}
