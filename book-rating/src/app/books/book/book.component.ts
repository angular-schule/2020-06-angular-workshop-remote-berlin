import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() book: Book;
  @Output() rateUp = new EventEmitter<Book>(); // from @angular/core !
  @Output() rateDown = new EventEmitter<Book>();

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

  doRateUp() {
    this.rateUp.emit(this.book);
  }

  doRateDown() {
    this.rateDown.emit(this.book);
  }

}
