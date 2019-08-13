import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {FormControl, FormGroup} from '@angular/forms';
import {IBook} from '../IBook';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  bookForm: FormGroup;
  book: IBook;

  constructor(private service: BookService,
              private route: ActivatedRoute,
              private router: Router) {
    this.bookForm = new FormGroup({
      title: new FormControl(''),
      author: new FormControl(''),
      description: new FormControl(''),
    });
    this.book = {
      id: 0,
      title: '',
      author: '',
      description: '',
    };
  }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.service.getBookById(+id).subscribe(next => {
        this.book = next;
        this.bookForm.patchValue(this.book);
      });
    });
  }

  update() {
    this.service.updatePost(this.book).subscribe(next => {
      this.book = next;
      this.router.navigate(['/books']);
    }, error => console.log(error));
  }

}
