import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BookListComponent} from './book-list/book-list.component';
import {BookEditComponent} from './book-edit/book-edit.component';
import {DetailComponent} from './detail/detail.component';
import {BookDeleteComponent} from './book-delete/book-delete.component';
import {BookCreatComponent} from './book-creat/book-creat.component';


const routes: Routes = [{
  path: 'books',
  component: BookListComponent
}, {
  path: 'edit/:id',
  component: BookEditComponent
}, {
  path: 'detail/:id',
  component: DetailComponent
}, {
  path: 'delete/:id',
  component: BookDeleteComponent
}, {
  path: 'create',
  component: BookCreatComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
