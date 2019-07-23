import { Component, OnInit } from '@angular/core';
import { AddGenreService } from 'src/app/service';
import { GenreModel } from 'src/app/Models';

@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent implements OnInit {

  constructor(private addGenreService:AddGenreService) { }

  ngOnInit() {
  }

  genre:GenreModel;
AddGenre(){
  this.addGenreService.saveGenre(this.genre) 
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
  

}
