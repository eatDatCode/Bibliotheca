import { Component, OnInit } from '@angular/core';
import { BookModel } from '../Models/BookModel';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public books: BookModel[];

  constructor() { }

  ngOnInit() {
  }

}
