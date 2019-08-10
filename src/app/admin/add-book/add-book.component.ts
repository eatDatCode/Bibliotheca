import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';
import { AddBookService } from 'src/app/service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  addBook : FormGroup;
  bookGenres = []
  settings = {};
  bookAuthors = []

  constructor(private bookService:AddBookService) { }

  ngOnInit() {
    this.loadAuthor();
    this.loadGenre();
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
    this.settings = {
      singleSelection: false,
      text: "Select Name",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "myclass custom-class"
    };
  }
  onSubmit(){
    console.log(this.addBook)
    this.bookService.bookSave(this.addBook.value)
      .subscribe(
        data => {
          //  this.alertService.success('Registration successful', true);
          // this.router.navigate(['/login']);
          console.log(data);
          alert(data);
          //this.loading=false;
        },
        error => {
          // this.alertService.error(error);
          alert("Failed");
          //this.loading = false;
        });
  }
  private loadAuthor() {
    this.bookService.getAuthor().subscribe(bookAuthors => {
      for (var data of bookAuthors) {
        this.bookAuthors.push({ "id": data.authorId, "itemName": data.firstName+" "+data.lastName })
      }
    });
  }
  private loadGenre() {
    this.bookService.getGenre().subscribe(bookGenres => {
      for (var data of bookGenres) {
        this.bookGenres.push({ "id": data.genreId, "itemName": data.genre })
      }
    });
  }
  // private loadPublisher(){
  //   this.bookService.getAuthor().subscribe(bookAuthors => {
  //     for (var data of bookAuthors) {
  //       this.bookAuthors.push({ "id": data.authorId, "itemName": data.firstName+" "+data.lastName })
  //     }
  //   });
  // }
}
