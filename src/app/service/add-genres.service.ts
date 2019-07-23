import { Injectable } from '@angular/core';
import { GenreModel } from '../Models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiEndPoints } from 'src/const/api.endpoints';

@Injectable({
  providedIn: 'root'
})
export class AddGenreService {

  constructor(private http:HttpClient) { }
  saveGenre(genre:GenreModel){
    return this.http.post(ApiEndPoints.addGenre,genre);
  }
}
