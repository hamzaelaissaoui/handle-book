import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from '../app-routing.module';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BooksComponent } from './components/books/books.component';
import { BookService } from './book.service';
import { BookDetailsResolverService } from './components/book-details/book-details.resolver.service';
import { BookListResolverService } from './components/books-list/book-list.resolver.service';
import { BookInterceptorService } from './book.interceptor.service';



@NgModule({
  declarations: [
    BooksListComponent,
    BookDetailsComponent,
    BooksComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    BooksComponent,
    BooksListComponent,
    BookDetailsComponent,
  ],
  providers:[
    BookService, 
    BookDetailsResolverService, 
    BookListResolverService, 
    {provide: HTTP_INTERCEPTORS, useClass: BookInterceptorService, multi:true},

  ]
})
export class BooksModule { }
