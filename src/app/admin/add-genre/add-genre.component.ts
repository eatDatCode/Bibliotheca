import { Component, OnInit } from '@angular/core';
import { AddGenreService } from 'src/app/service';
import { GenreModel } from 'src/app/Models';
import { map } from "rxjs/operators";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent implements OnInit {
  addGenre: FormGroup;

  constructor(private addGenreService:AddGenreService) { }

  ngOnInit() {
    this.addGenre = new FormGroup({
      'genre': new FormControl('')
    })
  }

  genre:GenreModel;
onSubmit(){
  debugger;
  this.addGenreService.saveGenre(this.addGenre.value) 
  .subscribe(
      data => {
          //this.alertService.success('Registration successful', true);
          alert("sucessful");
      },
      error => {
          //this.alertService.error(error);
          //this.loading = false;
          alert("error");
      });
}
  
  // onSubmit(){
  //   console.log(this.addGenre);
  // }
}
