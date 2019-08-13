import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {IBook} from '../IBook';
import {BookService} from '../book.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-book-creat',
  templateUrl: './book-creat.component.html',
  styleUrls: ['./book-creat.component.scss']
})
export class BookCreatComponent implements OnInit {

  bookForm: FormGroup;
  book: Partial<IBook>;

  constructor(private service: BookService,
              private route: ActivatedRoute,
              private router: Router) {
    this.bookForm = new FormGroup({
      title: new FormControl(''),
      author: new FormControl(''),
      description: new FormControl(''),
    });
    this.book = {
      title: '',
      author: '',
      description: '',
    };
  }

  ngOnInit() {
  }


  create() {
    this.service.createBook(this.book).subscribe(() => {
      this.router.navigate(['/books']);
    });
  }
}
