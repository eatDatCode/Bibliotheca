import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  addBook : FormGroup;

  constructor() { }

  ngOnInit() {
    this.addBook = new FormGroup({
      'isbn': new FormControl(''),
      'title': new FormControl(''),
      'price': new FormControl(''),
      'writtenBy': new FormControl(''),
      'genre': new FormControl(''),
      'language': new FormControl(''),
      'pages': new FormControl(''),
      'publisher': new FormControl(''),
      'firstPublished': new FormControl(''),
      'bookCover': new FormControl('')
    });
  }
  onSubmit(){
    console.log(this.addBook)
  }

}
