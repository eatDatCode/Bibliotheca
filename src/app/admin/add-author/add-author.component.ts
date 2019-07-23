import { Component, OnInit } from '@angular/core';
import { AddAuthorService } from 'src/app/service';
import { AuthorModel } from 'src/app/Models';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {

  constructor(private addAuthorService:AddAuthorService) { }

  ngOnInit() {
  }
author:AuthorModel;
  AddAuthor() {
    debugger;
    //this.loading = true;
    //console.log(this.selectedValue);
    // this.model.image=this.UImage.files[0];
    this.addAuthorService.saveAuthor(this.author) 
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
