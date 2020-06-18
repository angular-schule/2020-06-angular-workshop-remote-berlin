import { Component } from '@angular/core';
import { Observable, of, from, interval, timer } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Book Rating';

  constructor() {

    function producer(obs) {

      obs.next(-1);
      obs.next(0);

      setTimeout(() => {
        obs.next(1);
      }, 2000);

      setTimeout(() => {
        obs.next(2);
      }, 3000);

      setTimeout(() => {
        obs.complete();
      }, 4000);
    }



    const observer = {
      next: e => console.log(e),
      error: err => console.error(err),
      complete: () => console.log('C')
    };

    // producer(observer);
    const myObservable$ = new Observable(producer); // Finnische Notation
    // myObservable$.subscribe(observer);

    ///////////////////////////////////////////////
    // Observer: Zuhörer
    // Observable: Beobachtbares Objekt, das Datenstrom generiert

    timer(0, 1000).pipe(
      map(e => e * 3),
      filter(e => e % 2 === 0)
    ).subscribe(e => console.log(e));


  }
}
