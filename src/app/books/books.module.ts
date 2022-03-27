import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '../app-routing.module';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BooksComponent } from './components/books/books.component';



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
  ]
})
export class BooksModule { }
