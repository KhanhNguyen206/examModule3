import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCreatComponent } from './book-creat.component';

describe('BookCreatComponent', () => {
  let component: BookCreatComponent;
  let fixture: ComponentFixture<BookCreatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookCreatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
