import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { AddGenreService } from 'src/app/service';
import { GenreModel } from 'src/app/Models';
import { map } from "rxjs/operators";
=======
import { FormGroup, FormControl } from '@angular/forms';
>>>>>>> aba45e1c1a8e64313b0c220b965c151e4c9c31c4

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

<<<<<<< HEAD
  genre:GenreModel;
// AddGenre(){
//   this.addGenreService.saveGenre(this.genre) 
//   .subscribe(
//       data => {
//           //this.alertService.success('Registration successful', true);
//           alert("sucessful");
//       },
//       error => {
//           //this.alertService.error(error);
//           //this.loading = false;
//           alert("error");
//       });
// }
  

=======
  onSubmit(){
    console.log(this.addGenre);
  }
>>>>>>> aba45e1c1a8e64313b0c220b965c151e4c9c31c4
}
