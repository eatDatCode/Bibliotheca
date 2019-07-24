import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit{
  addAuthor: FormGroup;

  constructor() {}

  ngOnInit() {
    this.addAuthor =  new FormGroup({
      'firstName': new FormControl(''),
      'lastName': new FormControl(''),
      'dob': new FormControl(''),
      'place': new FormControl(''),
      'avatar': new FormControl('')
    });

  }
  onSubmit(){
    console.log(this.addAuthor);
  }
}
