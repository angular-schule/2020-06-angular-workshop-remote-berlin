import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ControlContainer } from '@angular/forms';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'br-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookForm: FormGroup;

  constructor(private bs: BookStoreService, private router: Router) { }

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      isbn: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13)
      ]),
      title: new FormControl('', Validators.required),
      description: new FormControl(''),
      price: new FormControl(0, Validators.min(5))
    });
  }

  isInvalid(controlName: string) {
    const control = this.bookForm.get(controlName);
    return control.invalid && control.touched;
  }

  hasError(controlName: string, errorCode: string) {
    const control = this.bookForm.get(controlName);
    return control.hasError(errorCode) && control.touched;
  }

  submitForm() {
    // Buch erzeugen
    const book: Book = {
      ...this.bookForm.value,
      rating: 1
    };

    this.bs.create(book).subscribe(() => {
      this.bookForm.reset(); // nur benötigt, wenn wir nicht wegnavigieren
      this.router.navigate(['/books', book.isbn]);
    });
  }

}
