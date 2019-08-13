import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IBook} from './IBook';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private readonly API_URL = 'http://localhost:3000/books';
  constructor(private http: HttpClient) { }

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.API_URL);
  }
  getBookById(id: number): Observable<IBook> {
    return this.http.get<IBook>(`${this.API_URL}/${id}`);
  }
  createBook(book: Partial<IBook>): Observable<IBook> {
    return this.http.post<IBook>(this.API_URL, book);
  }
  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
  updatePost(book: IBook): Observable<IBook> {
    return this.http.put<IBook>(`${this.API_URL}/${book.id}`, book);
  }
}
