import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Book } from './models/book';

const URL = 'http://localhost:5000/books'
@Injectable()
export class BookService {

  books: Book[] = [];
  booksChanged:Subject<Book[]> = new Subject<Book[]>();

  constructor(private http: HttpClient) { }

  getBooks(): Book[]{
    return this.books.slice();
  }
  getById(id:number): Book{
    return this.getBooks().find(b=>b.id===id)!;
  }
  setBooks(books:Book[]): void{
    this.books = books;
    this.booksChanged.next(books);
  }

  updateTable(book:Book):void{
    // const index = this.getBooks().findIndex(b=>b.id === book.id)
    // if(index === -1){
    //   this.books.concat(book);
    //   this.booksChanged.next(this.getBooks());
      
    // }else{
      
    // }
  }

  fetchBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(URL).pipe(
      tap((data:Book[]) => this.setBooks(data))
    );
  }

  fetchById(id:number):Observable<Book>{
    return this.http.get<Book>(URL+`/${id}`)
  }

  add(book:Book):void{
    this.http.post<Book>(URL, book);
  }

}
