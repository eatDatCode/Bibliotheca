import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent implements OnInit {
  addGenre: FormGroup;

  constructor() { }

  ngOnInit() {
    this.addGenre = new FormGroup({
      'genre': new FormControl('')
    })
  }

  onSubmit(){
    console.log(this.addGenre);
  }
}
