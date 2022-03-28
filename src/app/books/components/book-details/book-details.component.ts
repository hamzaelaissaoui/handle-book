import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit, OnDestroy {


  book!: Book;
  subscription!: Subscription;

  editMode: boolean = false;
  constructor(private route: ActivatedRoute) { }



  ngOnInit(): void {
    this.subscription = this.route.data.subscribe(data=> this.book = data["book"]);
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
