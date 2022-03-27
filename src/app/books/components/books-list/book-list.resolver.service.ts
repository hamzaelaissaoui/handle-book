import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { BookService } from '../../book.service';

import { Book } from '../../models/book';

@Injectable()
export class BookListResolverService implements Resolve<Book[]> {

  constructor(private bookService:BookService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Book[] | Observable<Book[]> | Promise<Book[]> {
      let books:Book[] = this.bookService.getBooks();

      if(books.length === 0){
        return this.bookService.fetchBooks();
      }
      
      return books
  }
}
