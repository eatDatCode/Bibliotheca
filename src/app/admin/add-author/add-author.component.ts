import { Component, OnInit } from '@angular/core';
import { AddAuthorService } from 'src/app/service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit{
 

  constructor(private addAuthorService:AddAuthorService) { }
  ngOnInit() {
    this.addAuthor =  new FormGroup({
      'firstName': new FormControl(''),
      'lastName': new FormControl(''),
      'dob': new FormControl(''),
      'place': new FormControl(''),
      'avatar': new FormControl('')
    });
  }
addAuthor: FormGroup;

  onSubmit() {
    debugger;
    //this.loading = true;
    //console.log(this.selectedValue);
    // this.model.image=this.UImage.files[0];
    this.addAuthorService.saveAuthor(this.addAuthor.value) 
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
  //   console.log(this.addAuthor);
  // }
}
