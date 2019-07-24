import { Injectable } from '@angular/core';
import { AuthorModel } from '../Models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ApiEndPoints} from '../../const/api.endpoints'
//import { HttpClient } from '../httpClient';

@Injectable({
  providedIn: 'root'
})
export class AddAuthorService {

  constructor(private http:HttpClient) { }
  saveAuthor(author:AuthorModel){
    return this.http.post(ApiEndPoints.addAuthor,author);
  }
}
