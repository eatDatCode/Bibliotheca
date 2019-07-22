import { Component, OnInit } from '@angular/core';
import { GenreModel } from '../Models/GenreModel';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  public genres: GenreModel[];
  // ["fiction","detective","satire","non-fiction","dystopia","horror",
   //   "fantasy","thriller","DIY","science-fiction","memoir","young-adult-fiction",
    //  "western","biography","childrens-book","romance","play","classic-fiction",
     // "mystery","musical","textbook"];
  constructor() { }

  ngOnInit() {
  }

}
