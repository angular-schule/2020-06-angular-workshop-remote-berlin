import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let book: Book;
  let ratingMock;

  beforeEach(async(() => {
    book = {
      isbn: '000',
      title: '',
      description: '',
      rating: 3,
      price: 2.99
    };

    ratingMock = {
      rateUp() { return book; },
      rateDown: () => book
    };

    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers: [
        // Abhängigkeit ersetzen:
        // Wenn BRS angefordert wird, wird ratingMock ausgeliefert
        { provide: BookRatingService, useValue: ratingMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the service for rateUp', () => {
    const rs = TestBed.inject(BookRatingService);

    // rs.rateUp überwachen und Call durchleiten zum originalen rs
    spyOn(rs, 'rateUp').and.callThrough();

    // Act
    component.rateUp(book);

    // Assert
    expect(rs.rateUp).toHaveBeenCalled();
  });
});
