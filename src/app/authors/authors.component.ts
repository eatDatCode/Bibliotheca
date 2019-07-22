import { Component, OnInit } from '@angular/core';
import { AuthorModel } from '../Models/AuthorModel';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  public authors: AuthorModel[];

  constructor() { }

  ngOnInit() {
  }

}
