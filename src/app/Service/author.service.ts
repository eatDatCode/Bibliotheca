import { Injectable } from '@angular/core';
import { AuthorModel } from '../indexModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http:HttpClient) { }
  
  saveAuthor(author: AuthorModel) {
    debugger;
 //   const formData: FormData = new FormData();
   // formData.append('fileKey', file, file.name);
    //const headers= new HttpHeaders().set('Header', 'user').set('header2', 'formData');
    return this.http.post('https://localhost:44332/api/Login/createcontact/',author);
  }
}
