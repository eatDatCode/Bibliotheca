import { Component, OnInit } from '@angular/core';
import { AuthorModel } from '../indexModel';
import { AuthorService } from '../Service/author.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  constructor(private authorService:AuthorService) { }

  ngOnInit() {
  }
  author:AuthorModel;
  file: File;

  register() {
    debugger;
    //this.loading = true;
    //console.log(this.selectedValue);
    // this.model.image=this.UImage.files[0];
    this.authorService.saveAuthor(this.author) 
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
