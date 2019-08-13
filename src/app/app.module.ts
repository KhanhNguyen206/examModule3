import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { BookCreatComponent } from './book-creat/book-creat.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookEditComponent,
    DetailComponent,
    BookDeleteComponent,
    BookCreatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
