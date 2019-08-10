import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthorModel, GenreModel, BookModel } from '../Models';
import { ApiEndPoints } from 'src/const/api.endpoints';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddBookService {

  constructor(private http:HttpClient) { }

  bookSave(book: BookModel) {
    debugger;
    console.log(book);
    //   const formData: FormData = new FormData();
    // formData.append('fileKey', file, file.name);
    //const headers= new HttpHeaders().set('Header', 'user').set('header2', 'formData');
    return this.http.post(ApiEndPoints.saveBook,book);
  }

  getAuthor(){
    return this.http.get<AuthorModel[]>(ApiEndPoints.getAuthor)
  }
  getGenre(){
    return this.http.get<GenreModel[]>(ApiEndPoints.getGenre);
  }
}
