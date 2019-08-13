import {Component, OnInit} from '@angular/core';
import {IBook} from '../IBook';
import {BookService} from '../book.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.scss']
})
export class BookDeleteComponent implements OnInit {

  book: IBook;

  constructor(private service: BookService,
              private route: ActivatedRoute,
              private router: Router) {
    this.book = {
      id: 0,
      title: '',
      author: '',
      description: ''
    };
  }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.service.getBookById(+id).subscribe(next => {
        this.book = next;
      });
    });
  }

  delete() {
    this.service.deleteBook(this.book.id).subscribe(() => {
      this.router.navigate(['/books']);
    });
  }

}
