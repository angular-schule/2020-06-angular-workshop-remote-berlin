import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  private api = 'https://api.angular.schule';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Book[]>(`${this.api}/books`);
  }

  getSingle(isbn: string) {
    return this.http.get<Book>(`${this.api}/book/${isbn}`);
  }

  create(book: Book) {
    return this.http.post(
      `${this.api}/book`,
      book,
      { responseType: 'text' } // wenn API kein JSON liefert
    );
  }
}
