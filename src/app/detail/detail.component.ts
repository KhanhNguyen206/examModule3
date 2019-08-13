import {Component, OnInit} from '@angular/core';
import {IBook} from '../IBook';
import {BookService} from '../book.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

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

  done() {
    this.router.navigate(['/books']);
  }

}
