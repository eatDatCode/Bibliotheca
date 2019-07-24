import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { AddAuthorService } from 'src/app/service';
import { AuthorModel } from 'src/app/Models';
=======
import { FormGroup, FormControl } from '@angular/forms';
>>>>>>> aba45e1c1a8e64313b0c220b965c151e4c9c31c4

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit{
  addAuthor: FormGroup;

<<<<<<< HEAD
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
=======
  constructor() {}

  ngOnInit() {
    this.addAuthor =  new FormGroup({
      'firstName': new FormControl(''),
      'lastName': new FormControl(''),
      'dob': new FormControl(''),
      'place': new FormControl(''),
      'avatar': new FormControl('')
    });
>>>>>>> aba45e1c1a8e64313b0c220b965c151e4c9c31c4

  }
  onSubmit(){
    console.log(this.addAuthor);
  }
}
