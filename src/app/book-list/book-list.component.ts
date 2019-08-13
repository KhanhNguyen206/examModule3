import {Component, OnInit} from '@angular/core';
import {IBook} from '../IBook';
import {BookService} from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  book: IBook;
  boolList: IBook[];

  constructor(private service: BookService) {
  }

  ngOnInit() {
    this.service.getBooks().subscribe(next => {
      this.boolList = next;
    }, error => console.log(error));
  }
}
