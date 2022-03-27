import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../book.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  books!:Book[]

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
      this.books = this.bookService.getBooks();
  }

}
