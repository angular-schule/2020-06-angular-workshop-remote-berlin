import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() book: Book;

  constructor() { }

  ngOnInit(): void {
    // "trace driven development"
    /* console.time('FOO');
    console.log('Hallo');
    console.table(this.book);
    console.timeEnd('FOO');*/
  }

  getStars() {
    return new Array(this.book.rating);
  }

}
