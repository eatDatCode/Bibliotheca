import { Component, OnInit } from '@angular/core';
import { BookModel } from '../Models/BookModel';
import { AddBookService } from '../service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public books: BookModel[];

  constructor(private bookService:AddBookService) { }
  bookss:BookModel;

  ngOnInit() {
    this.getBook();
  }
getBook(){
  debugger;
  this.bookService.getBook().subscribe((book:any) => {
  
   this.bookss=book.data;
   console.log(this.bookss);
  });
}
}
