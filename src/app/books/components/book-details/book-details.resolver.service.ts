import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { BookService } from '../../book.service';
import { Book } from '../../models/book';

@Injectable()
export class BookDetailsResolverService implements Resolve<Book> {

  constructor(private bookService: BookService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Book | Observable<Book> | Promise<Book> {
    return this.bookService.getById(+route.params.id)
  }
}
