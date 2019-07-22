import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

//   register() {
//     debugger;
//    // this.loading = true;
//     //console.log(this.selectedValue);
//     // this.model.image=this.UImage.files[0];
//     this.userService.create(this.model,this.file)
//         .subscribe(
//             data => {
//                 this.alertService.success('Registration successful', true);
//                 this.router.navigate(['/login']);
//             },
//             error => {
//                 this.alertService.error(error);
//                 this.loading = false;
//             });
// }
  
}
